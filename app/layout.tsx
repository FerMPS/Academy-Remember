import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { PhoneFrame } from "@/components/layout/PhoneFrame";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academy Remember",
  description: "Inscripción, pagos y guías en un solo lugar",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.className}>
        <PhoneFrame>{children}</PhoneFrame>
      </body>
    </html>
  );
}
