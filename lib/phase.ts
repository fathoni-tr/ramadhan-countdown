import { RAMADAN_START, IDUL_FITRI } from "./config";

export type Phase = "PRE_RAMADAN" | "RAMADAN" | "IDUL_FITRI";

export function getPhase(now: Date): Phase {
  if (now >= IDUL_FITRI) return "IDUL_FITRI";
  if (now >= RAMADAN_START) return "RAMADAN";
  return "PRE_RAMADAN";
}
