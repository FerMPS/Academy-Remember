"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  CircleAlert,
  Eye,
  EyeOff,
  Loader2,
  Mail,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------- Datos simulados de niveles ---------- */

type Nivel = "basica" | "bachillerato" | "universidad";

const NIVELES: {
  id: Nivel;
  label: string;
  campo: string;
  porDefecto: string;
  opciones: string[];
}[] = [
  {
    id: "basica",
    label: "Educación básica",
    campo: "Grado de educación básica",
    porDefecto: "6.° grado",
    opciones: [
      "1.° grado",
      "2.° grado",
      "3.° grado",
      "4.° grado",
      "5.° grado",
      "6.° grado",
      "7.° grado",
      "8.° grado",
      "9.° grado",
    ],
  },
  {
    id: "bachillerato",
    label: "Bachillerato",
    campo: "Año de bachillerato",
    porDefecto: "2.° año",
    opciones: ["1.° año", "2.° año", "3.° año", "4.° año", "5.° año"],
  },
  {
    id: "universidad",
    label: "Universidad",
    campo: "Carrera",
    porDefecto: "Ingeniería",
    opciones: [
      "Ingeniería",
      "Medicina",
      "Derecho",
      "Psicología",
      "Administración",
      "Arquitectura",
    ],
  },
];

/* ---------- Validaciones (solo frontend, sin backend) ---------- */

const validarNombre = (v: string) => v.trim().length >= 3;
const validarEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const reglasPassword = (v: string) => [
  { ok: v.length >= 8, texto: "Mínimo 8 caracteres" },
  { ok: /[A-Z]/.test(v) && /[a-z]/.test(v), texto: "Mayúscula y minúscula" },
  { ok: /[0-9]/.test(v), texto: "Al menos un número" },
  { ok: /[^A-Za-z0-9]/.test(v), texto: "Al menos un símbolo" },
];

type Estado = "neutro" | "ok" | "error";

const inputClass = (estado: Estado) =>
  "w-full rounded-xl border bg-[#F7F9FC] px-4 py-3.5 pr-11 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 " +
  (estado === "ok"
    ? "border-green-500 ring-1 ring-green-500/40"
    : estado === "error"
      ? "border-red-400 ring-1 ring-red-400/40"
      : "border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40");

function IconoEstado({
  estado,
  Icono,
}: {
  estado: Estado;
  Icono: typeof User;
}) {
  if (estado === "ok") return <Check size={18} className="text-green-600" />;
  if (estado === "error")
    return <CircleAlert size={18} className="text-red-400" />;
  return <Icono size={18} className="text-slate-400" />;
}

/* ---------- Página ---------- */

export default function RegistroPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState(false);
  const [nivel, setNivel] = useState<Nivel>("bachillerato");
  const [opcion, setOpcion] = useState("2.° año");
  const [touched, setTouched] = useState({
    nombre: false,
    email: false,
    password: false,
  });
  const [enviando, setEnviando] = useState(false);
  const [creado, setCreado] = useState(false);

  const nivelActual = NIVELES.find((n) => n.id === nivel)!;
  const reglas = reglasPassword(password);
  const score = reglas.filter((r) => r.ok).length;
  const passwordValida = score === 4;

  const fuerza = [
    { label: "débil", bar: "bg-red-500", text: "text-red-500" },
    { label: "aceptable", bar: "bg-orange-400", text: "text-orange-500" },
    { label: "buena", bar: "bg-yellow-400", text: "text-yellow-600" },
    { label: "segura", bar: "bg-green-500", text: "text-green-600" },
  ][Math.max(score - 1, 0)];

  const estadoDe = (
    valido: boolean,
    tocado: boolean,
    valor: string,
  ): Estado => {
    if (valido && valor) return "ok";
    if (tocado) return "error";
    return "neutro";
  };
  const estadoNombre = estadoDe(validarNombre(nombre), touched.nombre, nombre);
  const estadoEmail = estadoDe(validarEmail(email), touched.email, email);
  const estadoPassword: Estado = passwordValida
    ? "ok"
    : touched.password
      ? "error"
      : "neutro";

  const formValido =
    validarNombre(nombre) && validarEmail(email) && passwordValida;

  function cambiarNivel(id: Nivel) {
    const n = NIVELES.find((x) => x.id === id)!;
    setNivel(id);
    setOpcion(n.porDefecto);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ nombre: true, email: true, password: true });
    if (!formValido) return;
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setCreado(true);
      setTimeout(() => router.push("/premium"), 1000);
    }, 1500);
  }

  return (
    <div className="px-6 pb-8 pt-4 text-left">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm transition hover:bg-white"
        >
          <ArrowLeft size={20} />
        </Link>
        <h2 className="text-xl font-bold text-slate-900">Crear cuenta</h2>
      </div>

      {/* Título */}
      <h1 className="mt-6 text-[28px] font-bold leading-tight text-slate-900">
        Empieza a aprender
      </h1>
      <p className="mt-1 text-sm text-slate-400">
        Crea tu perfil y aprende a tu ritmo.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        {/* Nombre */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            Nombre
          </label>
          <div className="relative">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, nombre: true }))}
              placeholder="Tu nombre completo"
              className={inputClass(estadoNombre)}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
              <IconoEstado estado={estadoNombre} Icono={User} />
            </span>
          </div>
          {estadoNombre === "error" && (
            <p className="mt-1.5 text-[11px] text-red-500">
              Escribe tu nombre completo (mín. 3 caracteres).
            </p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            Correo electrónico
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="nombre@correo.com"
              className={inputClass(estadoEmail)}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
              <IconoEstado estado={estadoEmail} Icono={Mail} />
            </span>
          </div>
          {estadoEmail === "error" && (
            <p className="mt-1.5 text-[11px] text-red-500">
              Ingresa un correo electrónico válido.
            </p>
          )}
        </div>

        {/* Contraseña */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={verPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              placeholder="Mínimo 8 caracteres"
              className={inputClass(estadoPassword)}
            />
            <button
              type="button"
              onClick={() => setVerPassword((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
            >
              {verPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          {password && (
            <div className="mt-2 space-y-1.5">
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i < score ? fuerza.bar : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className={`text-[11px] font-semibold ${fuerza.text}`}>
                Contraseña {fuerza.label}
              </p>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[11px]">
                {reglas.map((r) => (
                  <li
                    key={r.texto}
                    className={r.ok ? "text-green-600" : "text-slate-400"}
                  >
                    {r.ok ? "✓" : "○"} {r.texto}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Nivel (segmentado) */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            ¿En qué nivel estás?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {NIVELES.map((n) => (
              <button
                type="button"
                key={n.id}
                onClick={() => cambiarNivel(n.id)}
                className={`rounded-xl px-2 py-3 text-[11px] font-semibold transition-colors ${
                  nivel === n.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "border border-slate-200 bg-[#F7F9FC] text-slate-500 hover:bg-slate-100"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dropdown dinámico según nivel */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            {nivelActual.campo}
          </label>
          <div className="relative">
            <select
              value={opcion}
              onChange={(e) => setOpcion(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-[#F7F9FC] px-4 py-3.5 pr-11 text-sm text-slate-500 outline-none transition-colors focus:border-blue-500"
            >
              {nivelActual.opciones.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Caja informativa */}
        <div className="rounded-xl bg-[#DCE8FA] px-4 py-3">
          <p className="text-xs font-semibold text-blue-600">
            Tu información cambia según el nivel
          </p>
          <div className="mt-1.5 space-y-1 text-xs text-slate-500">
            <p>Básica → Grado · Ej. 6.° grado</p>
            <p>Bachillerato → Año · Ej. 2.° año</p>
            <p>Universidad → Carrera · Ej. Ingeniería</p>
          </div>
        </div>

        {/* Mensaje de éxito simulado */}
        {creado && (
          <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">
            <Check size={16} />
            ¡Cuenta creada con éxito!{" "}
            <span className="text-green-600/60">(demo sin backend)</span>
          </div>
        )}

        {/* Botón principal */}
        <Button
          type="submit"
          disabled={enviando}
          className="h-14 w-full rounded-xl bg-blue-600 text-base font-semibold text-white hover:bg-blue-700 disabled:opacity-70"
        >
          {enviando ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Creando cuenta...
            </>
          ) : creado ? (
            <>
              <Check size={18} />
              Cuenta creada
            </>
          ) : (
            "Crear cuenta"
          )}
        </Button>
      </form>

      {/* Link a login */}
      <Link
        href="/login"
        className="mt-5 block text-center text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        Ya tengo cuenta
      </Link>
    </div>
  );
}
