// app/dashboard/guias/[materia]/page.tsx
import { PlaceholderPagina } from "@/components/PlaceholderPagina";

type Props = { params: Promise<{ materia: string }> };

export default async function MateriaPage({ params }: Props) {
  const { materia } = await params;
  const nombre = materia.charAt(0).toUpperCase() + materia.slice(1);
  return (
    <PlaceholderPagina
      titulo={`Guías de ${nombre}`}
      descripcion="Aquí irá el detalle por materia de tu Figma."
    />
  );
}
