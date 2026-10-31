import type { ReactNode } from "react";
import { BatteryFull, Signal, Wifi } from "lucide-react";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-4 pb-2 text-slate-900">
      <span className="text-sm font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={15} strokeWidth={2.5} />
        <Wifi size={15} strokeWidth={2.5} />
        <BatteryFull size={18} strokeWidth={2} />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="flex justify-center pb-2 pt-3">
      <div className="h-1.5 w-36 rounded-full bg-slate-900" />
    </div>
  );
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-300 md:py-10">
      <div className="relative flex h-[100dvh] w-full max-w-[430px] flex-col overflow-hidden bg-[#EEF2FB] md:h-[900px] md:max-h-[92vh] md:rounded-[3rem] md:border-[10px] md:border-slate-900 md:shadow-2xl">
        <StatusBar />
        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
        <HomeIndicator />
      </div>
    </div>
  );
}
