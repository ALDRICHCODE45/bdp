"use client";

import Image from "next/image";

const team = [
  {
    name: "Dr. Juan Pérez",
    role: "Socio Director",
    specialization: "Litigio Constitucional",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },
  {
    name: "Lic. María González",
    role: "Socia",
    specialization: "Derecho Administrativo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    name: "Dr. Carlos Rodríguez",
    role: "Socio",
    specialization: "Derecho de la Energía",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Lic. Ana Martínez",
    role: "Socia",
    specialization: "Compliance y Anticorrupción",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
  },
];

export default function NewTeamSection() {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 font-light tracking-[0.3em] uppercase mb-4">
            Socios & Asociados
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Nuestro <span className="font-normal">Equipo</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base text-gray-600 font-light leading-relaxed">
            Destacados por su trayectoria profesional y probada integridad.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative h-96 mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-light text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {member.role}
                </p>
                <p className="text-xs text-gray-400 font-light uppercase tracking-wider">
                  {member.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-light uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Conoce a todo el equipo
          </a>
        </div>
      </div>
    </section>
  );
}

