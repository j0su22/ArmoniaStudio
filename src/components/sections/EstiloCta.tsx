import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export function EstiloCta() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-cream-mid pt-12 pb-16">
      <div className="relative min-h-[420px] lg:min-h-[600px] overflow-hidden bg-cream-mid">
        <img
          src="./images/portadas/hero-4.png"
          alt="Descubre tu estilo"
          className="absolute inset-0 w-full h-full object-contain"
          style={{ filter: 'saturate(0.85)' }}
        />
      </div>

      <div className="flex flex-col justify-center px-12 lg:px-20 py-20">
        <ScrollReveal>
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-sage mb-5">
            ¿Por dónde empezar?
          </p>
          <h2 className="font-display text-[clamp(32px,3.5vw,50px)] font-light leading-[1.2] text-charcoal mb-5">
            ¿No sabes por dónde comenzar?
          </h2>
          <p className="text-[13px] font-light leading-[1.8] text-warm mb-8 max-w-[420px]">
            Descubre tu estilo y transforma tu espacio desde la esencia.
            Una consulta sin compromiso te ayuda a clarificar la visión de tu próximo proyecto.
          </p>
          <Button href="#contacto">Agenda una consulta gratuita</Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
