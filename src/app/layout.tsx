import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BDP | Litigio y Consultoría Multidisciplinaria",
  description:
    "Firma de abogados especializada en litigio constitucional, derecho administrativo, energía y compliance. Soluciones inteligentes y resultados seguros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
