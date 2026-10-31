import Link from "next/link";

export function PlaceholderPagina({
  titulo,
  descripcion,
}: {
  titulo: string;
  descripcion: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#DBE7FB] text-3xl">
        🚧
      </div>
      <h1 className="text-2xl font-bold text-slate-900">{titulo}</h1>
      <p className="text-sm text-slate-400">{descripcion}</p>
      <Link href="/dashboard" className="text-sm font-semibold text-blue-600">
        Volver al inicio
      </Link>
    </div>
  );
}
