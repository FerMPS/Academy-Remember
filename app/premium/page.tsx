"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BookOpen, Check, CircleCheck, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Plan = "mensual" | "anual";

const PLANES: {
  id: Plan;
  nombre: string;
  tag: string;
  tagClass: string;
  precio: string;
  periodo: string;
}[] = [
  {
    id: "mensual",
    nombre: "Mensual",
    tag: "A tu ritmo",
    tagClass: "text-slate-400",
    precio: "$9.99",
    periodo: "/ mes",
  },
  {
    id: "anual",
    nombre: "Anual",
    tag: "Ahorra 25 %",
    tagClass: "text-blue-600",
    precio: "$89.99",
    periodo: "/ año",
  },
];

export default function PremiumPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<Plan>("anual");
  const [activando, setActivando] = useState(false);
  const [activo, setActivo] = useState(false);

  function activarPremium() {
    if (activo || activando) return;
    setActivando(true);
    // Simulación de pago (nunca se envía nada a ningún backend)
    setTimeout(() => {
      setActivando(false);
      setActivo(true);
      setTimeout(() => router.push("/dashboard"), 1200);
    }, 1400);
  }

  return (
    <div className="px-6 pb-8 pt-4">
      {/* Header centrado */}
      <h2 className="text-center text-[17px] font-bold text-slate-900">
        Academy Remember
      </h2>

      {/* Ícono de éxito */}
      <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#DFF3E8]">
        <Check size={40} strokeWidth={1.5} className="text-emerald-600" />
      </div>

      {/* Título */}
      <h1 className="mt-6 text-center text-[34px] font-bold leading-tight text-slate-900">
        Cuenta creada
      </h1>
      <p className="mt-2 text-center text-sm text-slate-400">
        Bienvenido a Academy Remember
      </p>

      {/* Explorar guías */}
      <Button
        variant="outline"
        onClick={() => router.push("/dashboard")}
        className="mt-8 h-14 w-full rounded-xl border-slate-200 bg-[#F7F9FC] text-base font-semibold text-blue-600 hover:bg-white hover:text-blue-700"
      >
        <BookOpen size={18} />
        Explorar guías
      </Button>

      {/* Sección Premium */}
      <h2 className="mt-8 text-[22px] font-bold text-slate-900">
        Da el salto a Premium
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Más recursos, menos límites. Todo tu aprendizaje en un solo plan.
      </p>

      {/* Tarjetas de plan (seleccionables) */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {PLANES.map((p) => (
          <button
            type="button"
            key={p.id}
            onClick={() => setPlan(p.id)}
            className={`relative rounded-2xl p-4 text-left transition-colors ${
              plan === p.id
                ? "border-2 border-blue-600 bg-[#DBE7FB]"
                : "border-2 border-transparent bg-[#F7F9FC] hover:bg-slate-100"
            }`}
          >
            {plan === p.id && (
              <CircleCheck
                size={20}
                className="absolute right-3 top-3 text-blue-600"
              />
            )}
            <p className="text-lg font-bold text-slate-900">{p.nombre}</p>
            <p
              className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${p.tagClass}`}
            >
              {p.tag}
            </p>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-[26px] font-bold text-slate-900">
                {p.precio}
              </span>
              <span className="text-xs text-slate-400">{p.periodo}</span>
            </p>
            <p className="mt-2 text-xs text-slate-400">Acceso completo</p>
          </button>
        ))}
      </div>

      {/* Activar Premium */}
      <Button
        onClick={activarPremium}
        disabled={activando}
        className="mt-6 h-14 w-full rounded-xl bg-blue-600 text-base font-semibold text-white hover:bg-blue-700 disabled:opacity-70"
      >
        {activando ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Activando...
          </>
        ) : activo ? (
          <>
            <Check size={18} />
            ¡Premium activo!
          </>
        ) : (
          <>
            <Sparkles size={18} />
            Activar Premium
          </>
        )}
      </Button>

      {/* ✨ NUEVO: Continuar con plan gratuito (colores muted) */}
      <button
        type="button"
        onClick={() => router.push("/dashboard")}
        className="mt-3 h-12 w-full rounded-xl text-sm font-semibold text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-600"
      >
        Continuar con plan gratuito
      </button>

      <p className="mt-4 text-center text-xs text-slate-400">
        Precios de muestra · Cancela cuando quieras
      </p>
    </div>
  );
}
