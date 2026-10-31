import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Academy Remember"
      width={220}
      height={190}
      className="mx-auto h-40 w-auto object-contain"
    />
  );
}
