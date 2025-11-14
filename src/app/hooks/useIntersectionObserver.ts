"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Detectar si es móvil de forma segura
    let isMobile = false;
    if (typeof window !== "undefined") {
      isMobile = window.innerWidth < 768;
    }
    
    // Configuración más permisiva para móvil
    const defaultOptions = isMobile
      ? {
          threshold: 0.05, // Solo 5% necesario en móvil
          rootMargin: "0px 0px -50px 0px", // Más permisivo en móvil
        }
      : {
          threshold: 0.2,
          rootMargin: "0px 0px -100px 0px",
        };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsIntersecting(true);
          setHasAnimated(true);
        }
      },
      {
        ...defaultOptions,
        ...options,
      }
    );

    observer.observe(element);

    // Fallback más agresivo en móvil: mostrar contenido después de 500ms
    // Esto asegura que el contenido siempre sea visible en móviles
    const fallbackDelay = isMobile ? 500 : 1000;
    const fallbackTimeout = setTimeout(() => {
      if (!hasAnimated) {
        setIsIntersecting(true);
        setHasAnimated(true);
      }
    }, fallbackDelay);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, [hasAnimated, options]);

  return { ref, isIntersecting };
}

