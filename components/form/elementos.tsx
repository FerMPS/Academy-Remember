import { Check, CircleAlert } from "lucide-react";

export type Estado = "neutro" | "ok" | "error";

export const inputClass = (estado: Estado) =>
  "w-full rounded-xl border bg-[#F7F9FC] px-4 py-3.5 pr-11 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 " +
  (estado === "ok"
    ? "border-green-500 ring-1 ring-green-500/40"
    : estado === "error"
      ? "border-red-400 ring-1 ring-red-400/40"
      : "border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40");

export function IconoEstado({
  estado,
  Icono,
}: {
  estado: Estado;
  Icono: typeof Check;
}) {
  if (estado === "ok") return <Check size={18} className="text-green-600" />;
  if (estado === "error")
    return <CircleAlert size={18} className="text-red-400" />;
  return <Icono size={18} className="text-slate-400" />;
}
