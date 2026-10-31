"use client";

import { useState } from "react";
import {
  ArrowRight,
  Atom,
  BookOpen,
  CloudUpload,
  FlaskConical,
  Languages,
  Laptop,
  Landmark,
  Radical,
  Search,
  SlidersHorizontal,
  TestTubes,
} from "lucide-react";

type Tab = "todas" | "guardadas" | "mias";

type Guia = {
  id: number;
  materia: string;
  detalle: string;
  paginas: number;
  Icon: typeof BookOpen;
  fondo: string;
  color: string;
  guardada: boolean;
  propia: boolean;
};

/* ---------- Datos de demo (quemados, sin backend) ---------- */

const GUIAS: Guia[] = [
  {
    id: 1,
    materia: "Matemáticas",
    detalle: "Álgebra y ecuaciones",
    paginas: 24,
    Icon: Radical,
    fondo: "bg-[#DBE7FB]",
    color: "text-blue-500",
    guardada: true,
    propia: false,
  },
  {
    id: 2,
    materia: "Ciencias",
    detalle: "La célula y sus funciones",
    paginas: 18,
    Icon: FlaskConical,
    fondo: "bg-[#D8F1F6]",
    color: "text-cyan-500",
    guardada: false,
    propia: false,
  },
  {
    id: 3,
    materia: "Lenguaje",
    detalle: "Comprensión lectora",
    paginas: 16,
    Icon: BookOpen,
    fondo: "bg-[#FBEFD3]",
    color: "text-blue-500",
    guardada: true,
    propia: false,
  },
  {
    id: 4,
    materia: "Historia",
    detalle: "Independencia y república",
    paginas: 22,
    Icon: Landmark,
    fondo: "bg-[#DFF3E8]",
    color: "text-emerald-500",
    guardada: false,
    propia: true,
  },
  {
    id: 5,
    materia: "Inglés",
    detalle: "Verb tenses y vocabulario",
    paginas: 14,
    Icon: Languages,
    fondo: "bg-[#D8F1F6]",
    color: "text-cyan-500",
    guardada: true,
    propia: false,
  },
  {
    id: 6,
    materia: "Física",
    detalle: "Cinemática y vectores",
    paginas: 19,
    Icon: Atom,
    fondo: "bg-[#DBE7FB]",
    color: "text-blue-500",
    guardada: false,
    propia: false,
  },
  {
    id: 7,
    materia: "Química",
    detalle: "Tabla periódica esencial",
    paginas: 15,
    Icon: TestTubes,
    fondo: "bg-[#DFF3E8]",
    color: "text-emerald-500",
    guardada: true,
    propia: true,
  },
  {
    id: 8,
    materia: "Informática",
    detalle: "Introducción a Python",
    paginas: 20,
    Icon: Laptop,
    fondo: "bg-[#FBEFD3]",
    color: "text-amber-500",
    guardada: false,
    propia: true,
  },
];

const TABS: { id: Tab; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "guardadas", label: "Guardadas" },
  { id: "mias", label: "Mis guías" },
];

export default function GuiasPage() {
  const [tab, setTab] = useState<Tab>("todas");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  /* Filtro combinado: pestaña activa + texto buscado */
  const visibles = GUIAS.filter((g) => {
    const porTab =
      tab === "todas" ? true : tab === "guardadas" ? g.guardada : g.propia;
    const porBusqueda =
      q === "" ||
      g.materia.toLowerCase().includes(q) ||
      g.detalle.toLowerCase().includes(q);
    return porTab && porBusqueda;
  });

  return (
    <div className="px-5 pb-6 pt-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-[28px] font-bold leading-tight text-slate-900">
          Tus guías
        </h1>
        {/* Botón de filtros: inerte por ahora */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-blue-600 shadow-sm"
        >
          <SlidersHorizontal size={20} />
        </button>
      </div>
      <p className="mt-2 text-[13px] text-slate-400">
        Un recurso para cada nuevo logro.
      </p>

      {/* Buscador funcional */}
      <div className="relative mt-4">
        <Search
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar una guía o materia"
          className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] py-3.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40"
        />
      </div>

      {/* Pestañas (navegan entre tipos de guías) */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {TABS.map((t) => (
          <button
            type="button"
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-xl py-3 text-xs font-semibold transition-colors ${
              tab === t.id
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-[#EEF2F9] text-slate-500 hover:bg-slate-200/70"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Card: sigue donde lo dejaste */}
      <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#16243D] p-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
            Sigue donde lo dejaste
          </p>
          <h3 className="mt-1.5 text-lg font-bold text-white">
            Ecuaciones de 2.° grado
          </h3>
          <p className="mt-1 text-xs text-slate-300">
            Matemáticas · 60 % completado
          </p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
          <ArrowRight size={18} />
        </span>
      </div>

      {/* Lista de guías */}
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Para tu nivel</h2>
        <span className="text-xs font-semibold text-blue-600">
          2.° Bachillerato
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {visibles.map(
          ({ id, materia, detalle, paginas, Icon, fondo, color }) => (
            /* Tarjetas inertes: aún no navegan ni descargan */
            <div
              key={id}
              className="flex items-center gap-3 rounded-2xl bg-[#F7F9FC] p-4"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${fondo}`}
              >
                <Icon size={22} className={color} />
              </span>
              <span className="flex-1">
                <span className="block text-[15px] font-bold text-slate-900">
                  {materia}
                </span>
                <span className="mt-0.5 block text-[11px] text-slate-400">
                  {detalle} · {paginas} páginas
                </span>
              </span>
              <span className="text-[11px] font-bold text-blue-600">PDF</span>
            </div>
          ),
        )}

        {/* Estado vacío cuando la búsqueda/pestaña no arroja nada */}
        {visibles.length === 0 && (
          <div className="rounded-2xl bg-[#F7F9FC] px-4 py-10 text-center">
            <Search size={24} className="mx-auto text-slate-300" />
            <p className="mt-3 text-sm font-semibold text-slate-600">
              Sin resultados
            </p>
            <p className="mt-1 text-xs text-slate-400">
              No encontramos guías para «{query}» en esta pestaña.
            </p>
          </div>
        )}
      </div>

      {/* Subir guía: inerte por ahora (sin onClick) */}
      <button
        type="button"
        className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-[#F7F9FC] text-sm font-semibold text-blue-600"
      >
        <CloudUpload size={17} />
        Subir guía
      </button>
    </div>
  );
}
