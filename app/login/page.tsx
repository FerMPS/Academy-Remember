"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  IconoEstado,
  inputClass,
  type Estado,
} from "@/components/form/elementos";
import { validarEmail, validarPasswordLogin } from "@/lib/validaciones";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [enviando, setEnviando] = useState(false);
  const [dentro, setDentro] = useState(false);
  const [mostrarRecuperar, setMostrarRecuperar] = useState(false);

  const estadoEmail: Estado = validarEmail(email)
    ? "ok"
    : touched.email
      ? "error"
      : "neutro";
  const estadoPassword: Estado = validarPasswordLogin(password)
    ? "ok"
    : touched.password
      ? "error"
      : "neutro";

  const formValido = validarEmail(email) && validarPasswordLogin(password);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!formValido) return;
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setDentro(true);
      setTimeout(() => router.push("/premium"), 1000);
    }, 1400);
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
        <h2 className="text-xl font-bold text-slate-900">Iniciar sesión</h2>
      </div>

      {/* Ícono decorativo */}
      <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#DBE7FB]">
        <GraduationCap size={36} strokeWidth={1.8} className="text-blue-500" />
      </div>

      {/* Título */}
      <h1 className="mt-6 text-[30px] font-bold leading-tight text-slate-900">
        Qué bueno verte de nuevo.
      </h1>
      <p className="mt-3 text-sm text-slate-400">
        Tus guías, pagos y próximos pasos te esperan.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
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
              placeholder="Ingresa tu contraseña"
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
          {estadoPassword === "error" && (
            <p className="mt-1.5 text-[11px] text-red-500">
              Ingresa tu contraseña.
            </p>
          )}
        </div>

        {/* Recuperar contraseña (simulado) */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => setMostrarRecuperar((v) => !v)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            ¿Olvidaste tu contraseña?
          </button>
          {mostrarRecuperar && (
            <p className="mt-2 rounded-lg bg-[#DCE8FA] px-3 py-2 text-left text-[11px] text-slate-500">
              (demo) Aquí te enviaríamos un correo de recuperación a{" "}
              <span className="font-semibold text-blue-600">
                {email || "tu correo"}
              </span>
              .
            </p>
          )}
        </div>

        {/* Mensaje de éxito simulado */}
        {dentro && (
          <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">
            <Check size={16} />
            ¡Sesión iniciada!{" "}
            <span className="text-green-600/60">
              (demo: aquí entrarías al dashboard)
            </span>
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
              Verificando...
            </>
          ) : dentro ? (
            <>
              <Check size={18} />
              ¡Bienvenido de nuevo!
            </>
          ) : (
            <>
              <ArrowRight size={18} />
              Iniciar sesión
            </>
          )}
        </Button>
      </form>

      {/* Links inferiores */}
      <p className="mt-6 text-center text-sm text-slate-400">
        ¿Aún no tienes cuenta?{" "}
        <Link
          href="/registro"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Crear cuenta
        </Link>
      </p>
      <Link
        href="/"
        className="mt-4 block text-center text-sm text-slate-400 transition hover:text-slate-600"
      >
        Volver a Bienvenida
      </Link>
    </div>
  );
}
