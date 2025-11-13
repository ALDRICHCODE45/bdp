import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Lista de todos los locales soportados
  locales: ['es', 'en'],

  // Locale por defecto cuando no hay match
  defaultLocale: 'es'
});

