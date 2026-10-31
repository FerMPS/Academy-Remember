import { PlaceholderPagina } from "@/components/PlaceholderPagina";

type Props = { params: Promise<{ materia?: string }> };

export default async function MateriaPage({ params }: Props) {
  const { materia } = await params;
  const slug = materia ?? "materia";
  const nombre = slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <PlaceholderPagina
      titulo={`Guías de ${nombre}`}
      descripcion="Aquí irá el detalle por materia de tu Figma."
    />
  );
}
