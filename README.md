# BDP - Litigio y Consultoría Multidisciplinaria

Sitio web corporativo para BDP (anteriormente Accuracy Legal and Consulting), firma especializada en litigio y consultoría multidisciplinaria.

## 🎨 Diseño

El diseño está inspirado en TCH Abogados, con un enfoque minimalista, moderno y profesional que refleja la seriedad y excelencia de la firma.

### Características del Diseño

- **Minimalista y Elegante**: Diseño limpio con tipografía Inter
- **Videos de Fondo**: Hero section y sección de valores con videos cinematográficos
- **Responsive**: Totalmente adaptable a todos los dispositivos
- **Navegación Suave**: Scroll behavior optimizado
- **Menú Móvil**: Navegación fullscreen para dispositivos móviles
- **Animaciones Sutiles**: Transiciones y efectos hover profesionales

## 📋 Estructura del Sitio

1. **Hero Section**: Video de fondo con mensaje principal
2. **Por Qué Elegirnos**: Características y estadísticas clave
3. **Áreas de Práctica** (Servicios):
   - Litigio Constitucional
   - Litigio y Consultoría en Materia Administrativa
   - Derecho de la Energía
   - Gobierno, Anticorrupción y Compliance
4. **Industrias**: Sectores atendidos con estadísticas
5. **Valores**: Cultura y principios de la firma
6. **Equipo**: Presentación de socios y asociados
7. **Call to Action**: Invitación al contacto
8. **Footer**: Información de contacto y enlaces

## 🚀 Tecnologías

- **Next.js 15.5.4**: Framework React
- **React 19**: Biblioteca UI
- **TypeScript**: Tipado estático
- **Tailwind CSS 4**: Estilos utility-first
- **Inter Font**: Tipografía moderna de Google Fonts

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun dev

# Compilar para producción
bun build

# Iniciar servidor de producción
bun start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura de Archivos

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx              # Navegación principal
│   │   ├── HeroSection.tsx         # Hero con video
│   │   ├── WhyChooseUs.tsx         # Por qué elegirnos
│   │   ├── ServicesSection.tsx     # Áreas de práctica
│   │   ├── IndustriasSection.tsx   # Industrias
│   │   ├── ValuesSection.tsx       # Valores y cultura
│   │   ├── NewTeamSection.tsx      # Equipo
│   │   ├── NewCallToAction.tsx     # CTA
│   │   └── NewFooter.tsx           # Footer
│   ├── globals.css                 # Estilos globales
│   ├── layout.tsx                  # Layout principal
│   └── page.tsx                    # Página principal
```

## 🎯 Componentes Clave

### Navbar
- Fondo translúcido con backdrop blur
- Menú desktop con enlaces de navegación
- Menú móvil fullscreen con animaciones
- Logo y CTA button

### Hero Section
- Video de fondo cinematográfico
- Texto principal con tipografía grande
- Indicador de scroll animado
- Overlay oscuro para legibilidad

### Services Section
- Grid de servicios con selector
- Imágenes de alta calidad de Unsplash
- Detalles expandidos del servicio seleccionado
- Lista de características

### Industries Section
- Grid responsive de industrias
- Efectos hover elegantes
- Estadísticas de la firma
- Diseño minimalista

### Values Section
- Video de fondo con overlay
- Grid de valores con iconos
- Animaciones en hover
- Fondo oscuro para contraste

### Team Section
- Grid de miembros del equipo
- Imágenes en escala de grises con efecto color en hover
- Información profesional de cada miembro
- CTA para conocer más

## 🎨 Paleta de Colores

- **Principal**: Gris Oscuro (#111111)
- **Secundario**: Gris Claro (#F5F5F5)
- **Texto**: Gris Oscuro (#171717)
- **Fondo**: Blanco (#FAFAFA)
- **Acentos**: Negro (#000000)

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🖼️ Fuentes de Medios

- **Videos**: Pixabay (cdn.pixabay.com)
- **Imágenes**: Unsplash (images.unsplash.com)

## 🔧 Configuración

El archivo `next.config.ts` está configurado para permitir imágenes de:
- images.unsplash.com
- cdn.pixabay.com
- picsum.photos
- source.unsplash.com

## 📄 Licencia

© BDP / 2025 - Todos los derechos reservados

## 👥 Contacto

- **Email**: info@bdp.com.mx
- **Teléfono**: (55) 1234.5678
- **Dirección**: Ciudad de México, CDMX
