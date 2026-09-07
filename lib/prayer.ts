// Jadwal sholat via Aladhan API (method=20 = MUI/Kemenag Indonesia).
// Geolocation browser → fallback Jakarta jika ditolak atau timeout.

const JAKARTA = { lat: -6.2088, lng: 106.8456 };

export type PrayerTimes = {
  imsak: Date;
  fajr: Date;    // Subuh
  dhuhr: Date;
  asr: Date;
  maghrib: Date; // Buka Puasa
  isha: Date;    // Isya
  isDefault: boolean; // true = pakai Jakarta fallback
};

function parseHM(timeStr: string, base: Date): Date {
  const [h, m] = timeStr.split(":").map(Number);
  return new Date(base.getFullYear(), base.getMonth(), base.getDate(), h, m, 0, 0);
}

function cacheKey(date: Date, lat: number, lng: number): string {
  return `prayer:${date.getFullYear()}-${date.getMonth()}-${date.getDate()}:${lat.toFixed(2)},${lng.toFixed(2)}`;
}

async function fetchTimes(date: Date, lat: number, lng: number): Promise<PrayerTimes | null> {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const key = cacheKey(date, lat, lng);

  try {
    let timings: Record<string, string>;
    const cached = localStorage.getItem(key);
    if (cached) {
      timings = JSON.parse(cached) as Record<string, string>;
    } else {
      const res = await fetch(
        `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=20`,
      );
      if (!res.ok) return null;
      const json = await res.json();
      timings = json.data.timings as Record<string, string>;
      localStorage.setItem(key, JSON.stringify(timings));
    }

    return {
      imsak: parseHM(timings.Imsak, date),
      fajr: parseHM(timings.Fajr, date),
      dhuhr: parseHM(timings.Dhuhr, date),
      asr: parseHM(timings.Asr, date),
      maghrib: parseHM(timings.Maghrib, date),
      isha: parseHM(timings.Isha, date),
      isDefault: lat === JAKARTA.lat && lng === JAKARTA.lng,
    };
  } catch {
    return null;
  }
}

function getCoords(): Promise<{ lat: number; lng: number }> {
  return new Promise((resolve) => {
    if (!("geolocation" in navigator)) return resolve(JAKARTA);
    navigator.geolocation.getCurrentPosition(
      (p) => resolve({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => resolve(JAKARTA),
      { timeout: 5000 },
    );
  });
}

export async function getPrayerTimes(date: Date): Promise<PrayerTimes | null> {
  const { lat, lng } = await getCoords();
  return fetchTimes(date, lat, lng);
}
