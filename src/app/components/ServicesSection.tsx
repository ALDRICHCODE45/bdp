"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Litigio Constitucional",
    description:
      "Especialistas en litigio de alto nivel ante la Suprema Corte de Justicia de la Nación (SCJN). Nos enfocamos en acciones de inconstitucionalidad y controversias constitucionales para disputar la validez de normas generales o dilucidar conflictos competenciales.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    features: [
      "Acciones de inconstitucionalidad",
      "Controversias constitucionales",
      "Juicio de amparo en todas sus modalidades",
      "Criterios innovadores de interpretación jurídica",
      "Expansión de derechos fundamentales",
    ],
  },
  {
    id: 2,
    title: "Litigio y Consultoría en Materia Administrativa",
    description:
      "Representamos a personas físicas y empresas, tanto nacionales como extranjeras, en la defensa de sus derechos frente a la actividad de las administraciones públicas y autoridades fiscales.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    features: [
      "Estructuración regulatoria de proyectos",
      "Estrategias de prevención",
      "Procesos de Contratación Pública",
      "Litigio contencioso administrativo y constitucional",
      "Responsabilidad patrimonial del Estado",
      "Asociaciones Público-Privadas (APP)",
    ],
  },
  {
    id: 3,
    title: "Derecho de la Energía",
    description:
      "Área central de la firma que ofrece asesoría, consultoría y litigio de alta especialización regulatoria y técnica, cubriendo todos los eslabones del sector, desde la exploración hasta el expendio.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    features: [
      "Proyectos Oil & Gas",
      "Infraestructura logística",
      "Procesos de refinación",
      "Electricidad y energías renovables",
      "Agenda medioambiental y cambio climático",
      "Gestión de derecho de vía",
      "Federalismo de la energía",
    ],
  },
  {
    id: 4,
    title: "Gobierno, Anticorrupción y Compliance",
    description:
      "Enfoque integral en la práctica de integridad y buen gobierno corporativo. Proveemos estrategias de prevención, mitigación y remediación de riesgos, a través de la convergencia de derecho público y corporativo.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    features: [
      "Programas de Ética e Integridad",
      "Cumplimiento corporativo (compliance)",
      "Anticorrupción y transparencia",
      "Protección de datos personales",
      "Due Diligence transaccional",
      "Investigación corporativa y forense",
      "Defensa legal en materia de cumplimiento",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 font-light tracking-[0.3em] uppercase mb-4">
            Áreas de Práctica
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Nuestros <span className="font-normal">Servicios</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(index)}
              className={`p-8 text-left transition-all border-l-4 ${
                selectedService === index
                  ? "bg-gray-50 border-gray-900"
                  : "bg-white border-gray-200 hover:border-gray-400"
              }`}
            >
              <h3
                className={`text-lg font-light mb-2 ${
                  selectedService === index
                    ? "text-gray-900"
                    : "text-gray-700"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {service.description}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src={services[selectedService].image}
              alt={services[selectedService].title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              {services[selectedService].title}
            </h3>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-8">
              {services[selectedService].description}
            </p>
            <ul className="space-y-3">
              {services[selectedService].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-900 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm text-gray-700 font-light">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

