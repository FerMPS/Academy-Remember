import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  CloudUpload,
  FlaskConical,
  Radical,
  Sparkles,
  Wallet,
} from "lucide-react";

/* Demo: nombre quemado */
const NOMBRE_USUARIO = "Usuario";
const INICIALES = NOMBRE_USUARIO.split(" ")
  .map((p) => p[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

const RECORDATORIOS = [
  {
    titulo: "Matrícula",
    sub: "Completa tu inscripción",
    fecha: "20 OCT",
    Icon: CalendarDays,
    fondo: "bg-[#DBE7FB]",
    color: "text-blue-500",
  },
  {
    titulo: "Pago",
    sub: "Mensualidad de octubre",
    fecha: "25 OCT",
    Icon: Wallet,
    fondo: "bg-[#FBEFD3]",
    color: "text-amber-500",
  },
];

const GUIAS = [
  {
    nombre: "Matemáticas",
    slug: "matematicas",
    total: "12 guías",
    Icon: Radical,
    fondo: "bg-[#DBE7FB]",
    color: "text-blue-500",
  },
  {
    nombre: "Ciencias",
    slug: "ciencias",
    total: "8 guías",
    Icon: FlaskConical,
    fondo: "bg-[#D8F1F6]",
    color: "text-cyan-500",
  },
  {
    nombre: "Lenguaje",
    slug: "lenguaje",
    total: "10 guías",
    Icon: BookOpen,
    fondo: "bg-[#FBEFD3]",
    color: "text-blue-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col justify-between gap-2.5 px-5 pb-2 pt-3">
      {/* Header: logo + avatar/premium */}
      <div className="flex items-start justify-between">
        <div className="rounded-2xl bg-white/80 p-1.5 shadow-sm">
          <Image
            src="/logo.png"
            alt="Academy Remember"
            width={120}
            height={100}
            className="h-11 w-auto"
          />
        </div>
        <Link
          href="/dashboard/perfil"
          className="flex flex-col items-center gap-1"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DBE7FB] text-xs font-bold text-blue-600">
            {INICIALES}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-[#FBEFC9] px-1.5 py-0.5 text-[9px] font-bold text-amber-600">
            <Sparkles size={9} /> Premium
          </span>
        </Link>
      </div>

      {/* Saludo */}
      <div>
        <h1 className="text-[27px] font-bold leading-tight text-slate-900">
          ¡Hola, {NOMBRE_USUARIO}!
        </h1>
        <p className="mt-1.5 text-[13px] text-slate-400">
          Un día más cerca de tus metas.
        </p>
      </div>

      {/* Recordatorios */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Recordatorios</h2>
          <Link
            href="/dashboard/recordatorios"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            Ver todos
          </Link>
        </div>
        <div className="mt-2.5 space-y-2.5">
          {RECORDATORIOS.map(({ titulo, sub, fecha, Icon, fondo, color }) => (
            <Link
              key={titulo}
              href="/dashboard/recordatorios"
              className="flex items-center gap-3 rounded-2xl bg-[#F7F9FC] p-3 transition hover:bg-slate-100"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${fondo}`}
              >
                <Icon size={19} className={color} />
              </span>
              <span className="flex-1">
                <span className="block text-[15px] font-bold text-slate-900">
                  {titulo}
                </span>
                <span className="block text-[11px] text-slate-400">{sub}</span>
              </span>
              <span className="flex flex-col items-end gap-0.5">
                <span className="text-[11px] font-bold text-blue-600">
                  {fecha}
                </span>
                <ChevronRight size={14} className="text-slate-300" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Guías de estudio */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Guías de estudio</h2>
          <Link
            href="/dashboard/guias"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            Ver todas
          </Link>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-3">
          {GUIAS.map(({ nombre, slug, total, Icon, fondo, color }) => (
            <Link
              key={slug}
              href={`/dashboard/guias/${slug}`}
              className="flex flex-col items-center rounded-2xl bg-[#F7F9FC] p-3 text-center transition hover:bg-slate-100"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${fondo}`}
              >
                <Icon size={19} className={color} />
              </span>
              <span className="mt-2 text-xs font-semibold text-slate-900">
                {nombre}
              </span>
              <span className="mt-0.5 text-[10px] text-slate-400">{total}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Subir guía: con separación propia garantizada (mt-2 + gap del padre) */}
      <Link
        href="/dashboard/guias/subir"
        className="mt-2 flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-[#F7F9FC] text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-white"
      >
        <CloudUpload size={17} />
        Subir guía
      </Link>
    </div>
  );
}
