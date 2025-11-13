"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ minHeight: "100dvh" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center py-12 sm:py-0">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* Main Title */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight max-w-5xl mx-auto px-2 transition-all ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms", transitionDuration: "1300ms" }}
          >
            {t("title").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < t("title").split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className={`max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed px-4 transition-all ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms", transitionDuration: "1300ms" }}
          >
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            className={`pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 transition-all ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "600ms", transitionDuration: "1300ms" }}
          >
            <Link
              href="#servicios"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 text-sm font-normal rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              {t("cta1")}
            </Link>
            <Link
              href="#contacto"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white text-sm font-normal rounded-lg hover:bg-white/10 hover:border-white/50 transition-colors text-center"
            >
              {t("cta2")}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div
            className={`hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms", transitionDuration: "1300ms" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
