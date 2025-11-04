"use client";

import NewFooter from "../components/NewFooter";
import AnimatedContent from "@/components/AnimatedContent";
import SpotlightCard from "@/components/SpotlightCard";
import { content } from "@/services/content";
import {
  Scale,
  Shield,
  Building,
  Zap,
  Leaf,
  FileText,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NewCallToAction from "../components/NewCallToAction";

// Icon mapping for each service
const serviceIcons = {
  "1": Scale,
  "2": Shield,
  "3": Building,
  "4": Zap,
  "5": FileText,
  "6": Leaf,
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
      >
        <section className="pt-24 lg:pt-32 min-h-[60vh] flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Nuestros Servicios Legales
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                BDP se especializa en litigio y consultoría multidisciplinaria
                en los distintos ámbitos del derecho público, particularmente en
                las ramas constitucional, administrativa, regulatoria y
                electoral.
              </p>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Services Grid */}
      <section className="mb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((service) => {
              const IconComponent =
                serviceIcons[service.id as keyof typeof serviceIcons];

              return (
                <AnimatedContent
                  key={service.id}
                  distance={100}
                  direction="vertical"
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                >
                  <Link href={`/services/${service.id}`}>
                    <SpotlightCard
                      className="custom-spotlight-card h-full group cursor-pointer"
                      spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                      <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className="inline-flex rounded-lg bg-white/10 backdrop-blur-sm p-3">
                            <IconComponent className="size-5 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-white/70 text-sm font-medium">
                            {service.subtitle}
                          </p>
                        </div>

                        <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                          {service.description.substring(0, 150)}...
                        </p>

                        <div className="flex items-center text-blue-300 text-sm font-medium group-hover:text-blue-200 transition-colors">
                          Conocer más
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
      >
        <NewCallToAction />
      </AnimatedContent>

      <NewFooter />
    </main>
  );
}
