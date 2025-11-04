import Image from "next/image";

const members = [
  {
    name: "Roberto Gil Zuarth",
    role: "Socio Fundador",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    link: "#",
  },
  {
    name: "Carlos A. Lezama Fernández",
    role: "Socio Fundador",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    link: "#",
  },
  {
    name: "Manuel MacFarland",
    role: "Socio",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    link: "#",
  },
  {
    name: "Gonzalo José Bolio",
    role: "Abogado Asociado",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    link: "#",
  },
  {
    name: "Alonso Zepeda Celis",
    role: "Abogado Asociado",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    link: "#",
  },
  {
    name: "José Antonio Montes",
    role: "Asociado Líder - Energía",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section className=" py-16 md:py-32 dark:bg-transparent" id="acerca">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl text-white font-bold sm:text-4xl">
              Nuestro Equipo
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-white text-xl">
              Contamos con un equipo de profesionales del derecho con una amplia
              trayectoria en la práctica del derecho público y disciplinas
              relacionadas.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden cursor-pointer">
                <div className="relative h-96 w-full overflow-hidden rounded-md transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl">
                  <Image
                    className="object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
                    src={member.avatar}
                    alt="team member"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base text-white/60 font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-white inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
