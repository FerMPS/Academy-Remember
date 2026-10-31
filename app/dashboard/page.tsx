import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#DBE7FB] text-3xl">
        🚧
      </div>
      <h1 className="text-2xl font-bold text-slate-900">
        Dashboard en construcción
      </h1>
      <p className="text-sm text-slate-400">
        Aquí irá la próxima vista de tu Figma (inicio / guías).
      </p>
      <Link
        href="/"
        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        Volver a Bienvenida
      </Link>
    </div>
  );
}
