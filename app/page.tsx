import Countdown from "@/components/Countdown";
import QuoteTicker from "@/components/QuoteTicker";
import { Globe } from "@/components/Globe";
import InfoBar from "@/components/InfoBar";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="relative grid min-h-dvh w-full place-content-center gap-2 overflow-hidden px-4 py-8 text-center">
      <AnimatedThemeToggler className="fixed right-4 top-4 z-10" />

      <div className="pointer-events-none fixed left-1/2 top-1/2 aspect-square w-[min(85vh,85vw)] -translate-x-1/2 -translate-y-1/2 opacity-45">
        <Globe className="max-w-none" />
      </div>

      <div className="relative">
        <Countdown />
      </div>
      <div className="relative mt-8">
        <QuoteTicker />
      </div>
      <div className="relative">
        <InfoBar />
      </div>
    </main>
  );
}
