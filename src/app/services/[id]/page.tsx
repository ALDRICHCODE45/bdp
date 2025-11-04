import NewCallToAction from "@/app/components/NewCallToAction";
import NewFooter from "@/app/components/NewFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { content } from "@/services/content";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BDP - Servicio Especializado",
  description: "Servicio Especializado",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const contentItem = content.find((item) => item.id === id);

  if (!contentItem) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <>
      <section className="relative min-h-screen flex pt-44 md:pt-24 items-center justify-center hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8 animate__animated animate__fadeInLeft">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary-foreground/90">
                  Servicio Especializado
                </span>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                  {contentItem.title.split(" ").slice(0, -1).join(" ")}
                </h1>
                <p className="text-2xl md:text-3xl lg:text-6xl font-light text-white leading-tight">
                  {contentItem.title.split(" ").slice(-1).join(" ")}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-foreground to-primary-foreground/50 rounded-full"></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                {contentItem.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="cursor-pointer bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Consulta Gratuita
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent transition-all duration-300"
                >
                  Conocer Servicios
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group animate__animated animate__fadeInRight">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-foreground/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-foreground/5 rounded-full blur-xl"></div>
                {/* Main Image Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

                  <Card className=" relative overflow-hidden bg-transparent border-none rounded-3xl  shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <div className="aspect-[5/5] relative">
                      {contentItem.image && contentItem.image.trim() !== "" ? (
                        <Image
                          src={contentItem.image}
                          alt={contentItem.title}
                          width={800}
                          height={800}
                          className="w-full rounded-4xl h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-primary-foreground/60"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="space-y-2">
                              <p className="text-primary-foreground/80 font-medium text-lg">
                                {contentItem.title}
                              </p>
                              <p className="text-primary-foreground/60 text-sm">
                                Servicio Profesional
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/20 backdrop-blur-sm mb-8">
              <span className="text-sm font-medium text-primary-foreground/80">
                Descripción del Servicio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Detalles Especializados
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-foreground to-primary-foreground/50 rounded-full mx-auto"></div>
          </div>

          {/* Content Section */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-foreground/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-foreground/5 rounded-full blur-2xl"></div>

            {/* Main Content Card */}
            <Card className="relative bg-gradient-to-br from-primary-foreground/5 to-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-8">
                {contentItem.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start space-x-4">
                        {/* Decorative Element */}
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-foreground to-primary-foreground/60 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed font-light group-hover:text-primary-foreground transition-colors duration-300">
                            {paragraph.trim()}
                          </p>
                        </div>
                      </div>

                      {/* Separator (except for last paragraph) */}
                      {index <
                        contentItem.description.split("\n\n").length - 1 && (
                        <div className="mt-8 mb-4">
                          <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </Card>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 text-primary-foreground/60">
              <div className="w-8 h-px bg-primary-foreground/30"></div>
              <div className="w-2 h-2 bg-primary-foreground/40 rounded-full"></div>
              <div className="w-8 h-px bg-primary-foreground/30"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[100px]">
        <NewCallToAction />
        <NewFooter />
      </div>
    </>
  );
}
