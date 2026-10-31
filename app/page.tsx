import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-between px-6 pb-3 pt-2 text-center">
      {/* Bloque 1: Tagline */}
      <div className="flex items-center justify-center gap-2 text-blue-600">
        <Sparkles size={16} />
        <span className="text-[11px] font-bold tracking-widest">
          APRENDE. ORGANIZA. AVANZA.
        </span>
      </div>

      {/* Bloque 2: Card con logo */}
      <div className="relative rounded-3xl bg-[#F6F9FD] px-6 py-8">
        <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-amber-400" />
        <Logo />
        <div className="mt-6 flex items-center justify-center gap-8 text-blue-600">
          <BookOpen size={22} />
          <CalendarCheck size={22} />
          <GraduationCap size={22} />
        </div>
      </div>

      {/* Bloque 3: Textos */}
      <div>
        <p className="text-[15px] font-semibold text-blue-600">
          Academy Remember
        </p>
        <h1 className="mt-2 text-[30px] font-bold leading-tight text-slate-900">
          Inscripción, pagos y guías en un solo lugar
        </h1>
        <p className="mt-3 text-[15px] text-slate-400">
          Todo lo que necesitas para tu formación
        </p>
      </div>

      {/* Bloque 4: Botones + legal */}
      <div className="flex flex-col gap-3">
        <Button
          asChild
          className="h-14 w-full rounded-xl bg-blue-600 text-base font-semibold text-white hover:bg-blue-700"
        >
          <Link href="/registro">
            <ArrowRight size={18} />
            Registrarse
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-14 w-full rounded-xl border-slate-200 bg-white/60 text-base font-semibold text-blue-600 hover:bg-white hover:text-blue-700"
        >
          <Link href="/login">Iniciar sesión</Link>
        </Button>

        <div className="mt-4 space-y-1.5 text-xs text-slate-400">
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
        </div>
      </div>
    </div>
  );
}
