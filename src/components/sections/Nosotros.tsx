import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'


export function Nosotros() {
  return (
    <section id="nosotros" className="bg-cream py-24 px-12 lg:px-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <ScrollReveal className="relative">
          <img
            src="./images/portadas/hero-4.png"
            alt="Equipo Armonía Estudio"
            className="w-full aspect-[3/4] object-cover"
            style={{ filter: 'saturate(0.85)' }}
          />
        </ScrollReveal>

        {/* Content */}
        <div className="lg:pl-8">
          <ScrollReveal>
            <SectionLabel>Sobre Nosotros</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(32px,3.5vw,50px)] font-light leading-[1.15] text-charcoal mb-6">
              Diseñamos espacios con <em>intención</em> y propósito
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[13px] font-light leading-[1.85] text-warm mb-4 max-w-[480px]">
              Creemos en el potencial de los espacios. En aquellos que inspiran nuevas etapas, impulsan proyectos, generan bienestar o simplemente hacen que cada día se sienta mejor. Acompañamos a nuestros clientes a descubrir oportunidades, tomar decisiones con confianza y crear entornos que aporten valor, funcionalidad y significado.
            </p>
            <p className="text-[13px] font-light leading-[1.85] text-warm mb-4 max-w-[480px]">
              Te ayudamos a descubrir oportunidades inmobiliarias con una mirada estratégica y personalizada. Entendemos que cada cliente tiene objetivos diferentes, por eso brindamos un acompañamiento cercano, basado en la confianza, el conocimiento del mercado y la atención a los detalles.
            </p>
            <p className="text-[13px] font-light leading-[1.85] text-warm mb-8 max-w-[480px]">
              Nuestro compromiso es ayudarte a tomar decisiones informadas y encontrar propiedades con verdadero potencial, ya sea para vivir, invertir o desarrollar nuevos proyectos.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button href="#contacto">Hablemos de tu proyecto</Button>
          </ScrollReveal>


        </div>
      </div>
    </section>
  )
}
