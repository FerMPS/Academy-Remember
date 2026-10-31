import type { ReactNode } from "react";
import { BottomNav } from "@/components/layout/BottomNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    /*
      min-h-full (no h-full):
      - Contenido corto → el contenedor mide exactamente el frame
        y el nav queda abajo del todo (dashboard home sin scroll).
      - Contenido largo → el contenedor crece con el contenido,
        así el sticky bottom-0 puede flotar sobre TODO el recorrido
        y el contenido pasa detrás de la pill.
    */
    <div className="flex min-h-full flex-col">
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <BottomNav />
    </div>
  );
}
