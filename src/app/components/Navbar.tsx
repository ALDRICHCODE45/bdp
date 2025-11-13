"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Navbar appears after HeroSection animation (1200ms + 200ms delay)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsLanguageMenuOpen(false);
  };

  const navLinks = [
    { href: "#inicio", label: t("inicio") },
    { href: "#servicios", label: t("areasPractica") },
    { href: "#industrias", label: t("industrias") },
    { href: "#equipo", label: t("equipo") },
    { href: "#contacto", label: t("contacto") },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsLanguageMenuOpen(false);
  };

  // Cerrar menú de idioma al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest(".relative")) {
          setIsLanguageMenuOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-sm"
        } ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
        style={{
          transitionDuration: "800ms",
          transitionTimingFunction: "ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center relative z-50 text-gray-900 hover:text-gray-700 transition-colors"
            >
              <Logo size="sm" />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language Selector & CTA Button - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="px-4 py-2 text-sm font-light text-gray-700 hover:text-gray-900 transition-colors border border-gray-300 rounded"
                  aria-label="Select language"
                >
                  {locale.toUpperCase()}
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded shadow-lg z-50">
                    <button
                      onClick={() => handleLanguageChange("es")}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
                        locale === "es" ? "bg-gray-100 font-medium" : ""
                      }`}
                    >
                      ES
                    </button>
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
                        locale === "en" ? "bg-gray-100 font-medium" : ""
                      }`}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
              <Link
                href="#contacto"
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-colors"
              >
                {t("contactanos")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors"
              style={{
                animation: isMobileMenuOpen
                  ? `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-8 px-8 py-4 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-colors"
            style={{
              animation: isMobileMenuOpen
                ? `fadeInUp 0.4s ease-out ${navLinks.length * 0.1}s both`
                : "none",
            }}
          >
            {t("contactanos")}
          </Link>
          {/* Language Selector - Mobile */}
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button
              onClick={() => {
                handleLanguageChange("es");
                handleLinkClick();
              }}
              className={`px-4 py-2 text-sm font-light transition-colors ${
                locale === "es"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => {
                handleLanguageChange("en");
                handleLinkClick();
              }}
              className={`px-4 py-2 text-sm font-light transition-colors ${
                locale === "en"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
