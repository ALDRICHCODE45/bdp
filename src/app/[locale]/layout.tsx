import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';
import "../globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const messages = await getMessages({ locale });
  
  // Obtener keywords del objeto de mensajes
  const metadataMessages = (messages.metadata as AbstractIntlMessages | undefined);
  const keywords = (metadataMessages?.keywords as string[] | undefined) || [];
  
  return {
    title: t('title'),
    description: t('description'),
    keywords,
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
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://bdp.com.mx/${locale}`,
      siteName: "BDP Abogados",
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
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
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Asegurar que el locale es válido
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Proporcionar todos los mensajes al cliente
  // Solo los mensajes de nivel superior se pasan, no los anidados
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

