"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import NewFooter from "../../components/NewFooter";

export default function CompliancePage() {
  const t = useTranslations("compliance");

  const organizations: string[] = t.raw("context.organizations");
  const materialSupportItems: string[] = t.raw("context.materialSupportItems");
  const bdpItems: string[] = t.raw("solution.bdpItems");
  const dataintItems: string[] = t.raw("solution.dataintItems");

  // Hero entrance animation
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Section observers
  const { ref: contextRef, isIntersecting: contextVisible } =
    useIntersectionObserver();
  const { ref: challengesRef, isIntersecting: challengesVisible } =
    useIntersectionObserver();
  const { ref: solutionRef, isIntersecting: solutionVisible } =
    useIntersectionObserver();
  const { ref: ctaRef, isIntersecting: ctaVisible } =
    useIntersectionObserver();

  return (
    <main>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO SECTION — Left-aligned, editorial, powerful
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ minHeight: "100dvh" }}
      >
        {/* Background Image — blue city skyline, visible */}
        <div className="absolute inset-0">
          <Image
            src="/images_nueva_setion/20.png"
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Lighter overlay to let the blue tones come through */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        {/* Content — left-aligned, centered-bottom */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 pt-24 md:pt-32">
          <div className="max-w-3xl space-y-8">
            {/* Label */}
            <p
              className={`text-xs text-white/50 uppercase tracking-[0.3em] transition-all ease-out ${
                isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms", transitionDuration: "1200ms" }}
            >
              {t("hero.label")}
            </p>

            {/* Title — COMMANDS attention */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] transition-all ease-out ${
                isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "300ms", transitionDuration: "1400ms" }}
            >
              {t("hero.title")}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl transition-all ease-out ${
                isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "450ms", transitionDuration: "1400ms" }}
            >
              {t("hero.subtitle")}
            </p>

            {/* CTA — no icon, clean white button */}
            <div
              className={`pt-2 flex flex-col sm:flex-row items-start gap-4 transition-all ease-out ${
                isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "600ms", transitionDuration: "1400ms" }}
            >
              <a
                href="/docs/BDP_DataInt_Compliance_FTO_Mexico_2025.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 text-sm font-light uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                {t("hero.cta")}
              </a>
              <Link
                href="/"
                className="px-8 py-4 border border-white/30 text-white text-sm font-light uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-colors"
              >
                {t("hero.backHome")}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all ease-out ${
            isHeroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms", transitionDuration: "1200ms" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONTEXT SECTION — FTO Designation
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        ref={contextRef}
        className="relative py-24 md:py-32 bg-slate-950 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Border divider with label */}
          <div className="border-t border-white/10 pt-6">
            <span
              className={`inline-block text-xs text-white/50 uppercase tracking-widest mb-12 md:mb-16 -mt-3 bg-slate-950 pr-4 transition-all duration-1000 ${
                contextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {t("context.label")}
            </span>

            {/* Header grid */}
            <div
              className={`grid md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24 transition-all duration-1000 delay-100 ${
                contextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
                {t("context.title")}
              </h2>
              <p className="text-base text-white/60 font-light leading-relaxed self-end">
                {t("context.description")}
              </p>
            </div>
          </div>

          {/* Designated Organizations — Clean numbered grid */}
          <div className="mb-16 md:mb-24">
            <h3
              className={`text-lg font-light text-white/80 mb-8 uppercase tracking-wider transition-all duration-1000 delay-200 ${
                contextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {t("context.organizationsTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {organizations.map((org: string, index: number) => (
                <div
                  key={index}
                  className={`group p-5 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 ${
                    contextVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  <span className="text-xs text-white/40 font-light mb-3 block">
                    _{String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm md:text-base text-white/80 font-light leading-relaxed group-hover:text-white transition-colors">
                    {org}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Material Support — 2 column editorial */}
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 delay-500 ${
                contextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                {t("context.materialSupportTitle")}
              </h3>
              <p className="text-base text-white/60 font-light leading-relaxed mb-8">
                {t("context.materialSupportDescription")}
              </p>
              <ul className="space-y-4">
                {materialSupportItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                    <span className="text-sm text-white/70 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex items-end transition-all duration-1000 delay-600 ${
                contextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="p-8 bg-white/5 border border-white/10 w-full">
                <p className="text-4xl md:text-5xl font-light text-white/20 mb-4 select-none">
                  §
                </p>
                <p className="text-sm text-white/70 font-light leading-relaxed italic">
                  {t("context.materialSupportWarning")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ACCENT IMAGE — Angel de la Independencia
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="/images_nueva_setion/19.png"
              alt="Angel de la Independencia, Mexico City"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              quality={90}
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CORPORATE CHALLENGE SECTION — Enforcement precedents
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        ref={challengesRef}
        className="relative py-24 md:py-32 bg-slate-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Border divider with label */}
          <div className="border-t border-white/10 pt-6">
            <span
              className={`inline-block text-xs text-white/50 uppercase tracking-widest mb-12 md:mb-16 -mt-3 bg-slate-900 pr-4 transition-all duration-1000 ${
                challengesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {t("challenges.label")}
            </span>

            {/* Header grid */}
            <div
              className={`grid md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24 transition-all duration-1000 delay-100 ${
                challengesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
                {t("challenges.title")}
              </h2>
              <p className="text-base text-white/60 font-light leading-relaxed self-end">
                {t("challenges.description")}
              </p>
            </div>
          </div>

          {/* Enforcement Precedent Cards — large dollar amounts */}
          <div className="mb-16 md:mb-24">
            <h3
              className={`text-lg font-light text-white/80 mb-8 uppercase tracking-wider transition-all duration-1000 delay-200 ${
                challengesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {t("challenges.casesTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(["case1", "case2", "case3"] as const).map((caseKey, index) => (
                <div
                  key={caseKey}
                  className={`group p-8 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 ${
                    challengesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="text-xs text-white/40 font-light mb-6 block">
                    _{String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Big amount number */}
                  <p className="text-3xl md:text-4xl font-light text-white mb-1 leading-tight">
                    {t(`challenges.${caseKey}.amount`)}
                  </p>

                  <h4 className="text-base font-light text-white/90 mb-4 mt-3">
                    {t(`challenges.${caseKey}.name`)}
                  </h4>

                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {t(`challenges.${caseKey}.description`)}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="h-px w-8 bg-white/20 group-hover:w-16 group-hover:bg-white/40 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Message — full-width callout */}
          <div
            className={`p-8 md:p-12 bg-white/5 border border-white/10 transition-all duration-1000 delay-500 ${
              challengesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-4xl">
              {t("challenges.keyMessage")}
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SOLUTION SECTION — BDP + DataInt, side by side
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        ref={solutionRef}
        className="relative py-24 md:py-32 bg-slate-950 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Border divider with label */}
          <div className="border-t border-white/10 pt-6">
            <span
              className={`inline-block text-xs text-white/50 uppercase tracking-widest mb-12 md:mb-16 -mt-3 bg-slate-950 pr-4 transition-all duration-1000 ${
                solutionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {t("solution.label")}
            </span>

            {/* Header grid */}
            <div
              className={`grid md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24 transition-all duration-1000 delay-100 ${
                solutionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
                {t("solution.title")}
              </h2>
              <p className="text-base text-white/60 font-light leading-relaxed self-end">
                {t("solution.description")}
              </p>
            </div>
          </div>

          {/* Two Column: BDP + DataInt — with divider */}
          <div className="grid md:grid-cols-2 gap-0 mb-16 md:mb-24">
            {/* BDP Column */}
            <div
              className={`p-8 md:p-10 bg-white/5 border border-white/10 md:border-r-0 transition-all duration-1000 delay-200 ${
                solutionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-8 h-16 flex items-center">
                <Image
                  src="/bdp-logo.png"
                  alt="BDP Litigio y Consultoría"
                  width={180}
                  height={80}
                  className="object-contain brightness-150"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-2">
                {t("solution.bdpTitle")}
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-8">
                {t("solution.bdpSubtitle")}
              </p>
              <ul className="space-y-5">
                {bdpItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-xs text-white/30 font-light mt-0.5 shrink-0">
                      _{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/70 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DataInt Column */}
            <div
              className={`p-8 md:p-10 bg-white/[0.03] border border-white/10 transition-all duration-1000 delay-300 ${
                solutionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-8">
                <Image
                  src="/DataIntlogo.png"
                  alt="DataInt"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-2">
                {t("solution.dataintTitle")}
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-8">
                {t("solution.dataintSubtitle")}
              </p>
              <ul className="space-y-5">
                {dataintItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-xs text-white/30 font-light mt-0.5 shrink-0">
                      _{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/70 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accent Image — Bellas Artes panoramic */}
          <div
            className={`relative aspect-[21/9] overflow-hidden rounded-lg transition-all duration-1000 delay-500 ${
              solutionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/images_nueva_setion/21.png"
              alt="Bellas Artes, Mexico City"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              quality={90}
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA SECTION — Matching NewCallToAction style
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        ref={ctaRef}
        className="relative py-24 md:py-32 text-white overflow-hidden border-0 [&>*]:border-0"
      >
        {/* Background — matching NewCallToAction */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center border-0">
          <div
            className={`space-y-8 transition-all ease-out ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1600ms" }}
          >
            <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase">
              {t("cta.label")}
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              {t("cta.title")}
            </h2>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 font-light leading-relaxed">
              {t("cta.description")}
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/docs/BDP_DataInt_Compliance_FTO_Mexico_2025.pdf"
                download
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 text-sm font-light uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                {t("cta.downloadPdf")}
              </a>
              <a
                href="mailto:contacto@bdplc.com"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm font-light uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-colors text-center"
              >
                {t("cta.contactBdp")}
              </a>
              <a
                href="mailto:contacto@dataint.mx"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm font-light uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-colors text-center"
              >
                {t("cta.contactDataint")}
              </a>
            </div>
          </div>

          {/* Contact Methods — matching NewCallToAction */}
          <div
            className={`pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto transition-all ease-out delay-300 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1600ms" }}
          >
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-white/10 bg-white/[0.03]">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-light text-white uppercase tracking-wider">
                {t("cta.emailLabel")}
              </h3>
              <a
                href="mailto:info@bdp.com.mx"
                className="text-base text-white/80 font-light hover:text-white transition-colors block"
              >
                info@bdp.com.mx
              </a>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-white/10 bg-white/[0.03]">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base font-light text-white uppercase tracking-wider">
                {t("cta.phoneLabel")}
              </h3>
              <a
                href="tel:+525555255593"
                className="text-base text-white/80 font-light hover:text-white transition-colors block"
              >
                55-55255593
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <NewFooter />
    </main>
  );
}
