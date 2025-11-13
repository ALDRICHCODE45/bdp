import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesSection from "./components/ServicesSection";
import IndustriasSection from "./components/IndustriasSection";
import ValuesSection from "./components/ValuesSection";
import NewCallToAction from "./components/NewCallToAction";
import NewFooter from "./components/NewFooter";

export const metadata: Metadata = {
  title:
    "BDP | Despacho de Abogados en CDMX - Litigio y Consultoría Multidisciplinaria",
  description:
    "Firma especializada en litigio y consultoría multidisciplinaria en diversas áreas del Derecho Público, particularmente en las ramas constitucional, administrativa, regulatoria y electoral. Ubicados en Lomas de Chapultepec, Ciudad de México.",
  keywords: [
    "abogados Ciudad de México",
    "despacho jurídico CDMX",
    "litigio constitucional México",
    "derecho administrativo",
    "derecho regulatorio",
    "derecho electoral",
    "abogados energía México",
    "compliance México",
    "anticorrupción",
    "consultoría legal",
    "BDP abogados",
    "Lomas de Chapultepec",
    "Suprema Corte México",
    "juicio de amparo",
    "derecho público",
    "abogados especialistas México",
    "asociaciones público-privadas",
    "federalismo energético",
    "derecho inmobiliario",
    "políticas públicas",
  ],
  authors: [{ name: "BDP Abogados" }],
  creator: "BDP",
  publisher: "BDP Abogados",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://bdp.com.mx"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "BDP | Despacho de Abogados - Soluciones Inteligentes para Resultados Seguros",
    description:
      "Firma especializada en litigio y consultoría multidisciplinaria en diversas áreas del Derecho Público. Nuestro enfoque está orientado a la resolución de problemas, siempre buscando ofrecer valor añadido a nuestros clientes.",
    url: "https://bdp.com.mx",
    siteName: "BDP Abogados",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BDP Abogados - Despacho Jurídico en Ciudad de México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BDP | Despacho de Abogados en CDMX",
    description:
      "Firma especializada en litigio y consultoría multidisciplinaria en diversas áreas del Derecho Público, particularmente en las ramas constitucional, administrativa, regulatoria y electoral.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "verification_token", // Reemplazar con el token real de Google Search Console
  // },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <IndustriasSection />
      <ValuesSection />
      <NewCallToAction />
      <NewFooter />
    </main>
  );
}
