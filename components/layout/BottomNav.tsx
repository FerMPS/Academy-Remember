"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, House, User } from "lucide-react";

const TABS = [
  { href: "/dashboard", label: "Inicio", Icon: House },
  { href: "/dashboard/guias", label: "Guías", Icon: BookOpen },
  { href: "/dashboard/recordatorios", label: "Recordatorios", Icon: Bell },
  { href: "/dashboard/perfil", label: "Perfil", Icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  const activa = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <nav className="sticky bottom-0 z-40 px-5 pb-4 pt-2">
      <div className="flex items-center justify-between rounded-full border border-slate-100 bg-white/95 px-3 py-2 shadow-xl shadow-slate-900/10 backdrop-blur">
        {TABS.map(({ href, label, Icon }) => {
          const active = activa(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center gap-0.5 rounded-full py-1"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  active ? "bg-[#DBE7FB] text-blue-600" : "text-slate-400"
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
              </span>
              <span
                className={`text-[9px] font-semibold leading-none ${
                  active ? "text-blue-600" : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
