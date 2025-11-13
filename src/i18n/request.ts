import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Esta función se ejecuta en el servidor para cada request
  // `requestLocale` viene del middleware o de la URL
  let locale = await requestLocale;

  // Asegurar que el locale es válido
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});

