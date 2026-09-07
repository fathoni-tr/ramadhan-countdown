import { IDUL_FITRI } from "./config";
import type { PrayerTimes } from "./prayer";
import { store } from "./storage";
import { ymd } from "./time";

type Confetti = (opts: Record<string, unknown>) => void;
let confetti: Confetti | null = null;

export async function fire(big: boolean, flash: () => void): Promise<void> {
  flash();
  if (!confetti) {
    try {
      confetti = (await import("canvas-confetti")).default as Confetti;
    } catch {
      return;
    }
  }
  sideCannons(confetti, big ? 8000 : 3000);
}

const COLORS = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

function sideCannons(fn: Confetti, ms: number): void {
  const end = Date.now() + ms;
  const frame = () => {
    if (Date.now() > end) return;
    for (const [x, angle] of [[0, 60], [1, 120]] as const) {
      fn({ particleCount: 2, angle, spread: 55, startVelocity: 60, origin: { x, y: 0.5 }, colors: COLORS });
    }
    requestAnimationFrame(frame);
  };
  frame();
}

/** Idempoten per hari per perangkat. */
export function checkConfetti(now: Date, prayer: PrayerTimes | null, flash: () => void): void {
  // Idul Fitri — confetti besar sekali
  if (now >= IDUL_FITRI) {
    if (store.get("confetti:idulfitri")) return;
    store.set("confetti:idulfitri", "1");
    void fire(true, flash);
    return;
  }

  // Buka puasa — dalam 30 menit setelah Maghrib
  if (!prayer) return;
  const diffMs = +now - +prayer.maghrib;
  if (diffMs < 0 || diffMs > 30 * 60_000) return;

  const key = `confetti:buka:${ymd(now)}`;
  if (store.get(key)) return;
  store.set(key, "1");
  void fire(false, flash);
}
