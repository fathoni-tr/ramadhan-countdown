"use client";

import { useEffect, useRef, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { RAMADAN_START, IDUL_FITRI } from "@/lib/config";
import { getPhase, type Phase } from "@/lib/phase";
import { getPrayerTimes, type PrayerTimes } from "@/lib/prayer";
import { checkConfetti } from "@/lib/confetti";
import { loadHolidays } from "@/lib/holidays";
import { pad } from "@/lib/time";
import { cn } from "@/lib/utils";

function PT({
  label,
  time,
  accent,
}: {
  label: string;
  time: Date;
  accent?: boolean;
}) {
  return (
    <span className={cn("flex flex-col items-center gap-0.5", accent && "text-[var(--accent)]")}>
      <span className="text-[0.6rem] uppercase tracking-widest text-[var(--dim)]">{label}</span>
      <span className="text-sm font-semibold [font-variant-numeric:tabular-nums]">
        {pad(time.getHours())}.{pad(time.getMinutes())}
      </span>
    </span>
  );
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("PRE_RAMADAN");
  const [prayer, setPrayer] = useState<PrayerTimes | null>(null);
  const [afterIftar, setAfterIftar] = useState(false);
  const [iftarIn, setIftarIn] = useState<{ h: number; m: number; s: number } | null>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    let currentPrayer: PrayerTimes | null = null;
    let lastDay = -1;

    void loadHolidays([new Date().getFullYear(), IDUL_FITRI.getFullYear()]);

    const flash = () => {
      const el = card.current;
      if (!el) return;
      el.dataset.flash = "1";
      setTimeout(() => el && delete el.dataset.flash, 700);
    };

    const tick = () => {
      const now = new Date();
      const p = getPhase(now);
      setPhase((prev) => (prev === p ? prev : p));

      if (p !== "IDUL_FITRI") {
        const day = now.getDate();
        if (day !== lastDay) {
          lastDay = day;
          getPrayerTimes(now).then((pt) => {
            currentPrayer = pt;
            setPrayer(pt);
          });
        }
      }

      if (p === "RAMADAN" && currentPrayer) {
        const diff = +currentPrayer.maghrib - +now;
        if (diff > 0) {
          const s = Math.floor(diff / 1000);
          setIftarIn({ h: Math.floor(s / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 });
          setAfterIftar(false);
        } else {
          setIftarIn(null);
          setAfterIftar(true);
        }
      }

      checkConfetti(now, currentPrayer, flash);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return <div className="h-[40vh] animate-pulse rounded-3xl bg-[var(--line)]" aria-hidden />;
  }

  if (phase === "IDUL_FITRI") {
    return (
      <div
        ref={card}
        className="flip-card rounded-3xl p-10 text-center transition-colors duration-500 data-[flash]:bg-[var(--accent)]"
      >
        <h1 className="font-display text-2xl uppercase tracking-[0.18em] text-[var(--fg)] sm:text-4xl">
          SELAMAT IDUL FITRI
        </h1>
        <p className="mt-2 text-base text-[var(--dim)]">1448 Hijriyah · perkiraan</p>
        <p className="mt-6 text-lg font-semibold text-[var(--fg)]">Minal Aidin Wal Faizin</p>
        <p className="mt-1 text-sm text-[var(--dim)]">Mohon Maaf Lahir dan Batin</p>
      </div>
    );
  }

  const isRamadan = phase === "RAMADAN";
  const target = isRamadan ? IDUL_FITRI : RAMADAN_START;

  return (
    <>
      <h1 className="relative font-display text-2xl uppercase tracking-[0.18em] text-[var(--fg)] sm:text-4xl">
        {isRamadan ? "RAMADHAN MUBARAK" : "MENUJU RAMADHAN"}
      </h1>
      <p className="relative mb-6 text-sm text-[var(--dim)]">
        {isRamadan
          ? "Menuju Idul Fitri · 19 Maret 2027 · perkiraan"
          : "17 Februari 2027 · perkiraan 1 Ramadhan 1448H"}
      </p>

      <div
        ref={card}
        className="relative flip-card rounded-3xl transition-colors duration-500 data-[flash]:bg-[var(--accent)]"
      >
        <FlipClockCountdown
          key={isRamadan ? "ramadan" : "pre"}
          to={+target}
          labels={["HARI", "JAM", "MENIT", "DETIK"]}
          hideOnComplete={false}
          digitBlockStyle={{ fontWeight: 700 }}
          labelStyle={{ fontWeight: 600, letterSpacing: "0.18em" }}
        />
      </div>

      {/* Waktu Sholat */}
      <div className="relative mt-8">
        {prayer ? (
          <>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {isRamadan && <PT label="Imsak" time={prayer.imsak} />}
              <PT label="Subuh" time={prayer.fajr} />
              <PT label="Dhuhr" time={prayer.dhuhr} />
              <PT label="Asr" time={prayer.asr} />
              <PT label={isRamadan ? "Buka" : "Maghrib"} time={prayer.maghrib} accent={isRamadan} />
              <PT label="Isya" time={prayer.isha} />
            </div>
            {prayer.isDefault && (
              <p className="mt-2 text-xs text-[var(--dim)]">jadwal Jakarta · izin lokasi belum diberikan</p>
            )}

            {/* Iftar countdown — hanya saat Ramadhan */}
            {isRamadan && (
              <div className="mt-4">
                {afterIftar ? (
                  <p className="text-lg font-semibold text-[var(--accent)]">Selamat Berbuka Puasa</p>
                ) : iftarIn ? (
                  <p className="text-sm text-[var(--dim)]">
                    {"Buka dalam "}
                    {iftarIn.h > 0 && `${iftarIn.h} jam `}
                    {pad(iftarIn.m)} menit {pad(iftarIn.s)} detik
                  </p>
                ) : null}
              </div>
            )}
          </>
        ) : (
          <p className="text-xs text-[var(--dim)]">Memuat jadwal sholat...</p>
        )}
      </div>
    </>
  );
}
