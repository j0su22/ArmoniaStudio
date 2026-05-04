import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

const PROP_CARDS = [
  {
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80&auto=format&fit=crop',
    category: 'Airbnb',
    title: 'Espacios que atraen',
    desc: 'Diseños que generan mejores reseñas y más reservas.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80&auto=format&fit=crop',
    category: 'Consultorios',
    title: 'Confianza desde el primer vistazo',
    desc: 'Ambientes que transmiten profesionalismo y bienestar.',
  },
]

export function Proposito() {
  return (
    <section className="bg-cream py-24 px-12 lg:px-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <ScrollReveal>
            <SectionLabel>Nuestro Propósito</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(32px,3.5vw,50px)] font-light leading-[1.15] text-charcoal mb-5">
              Armonía entre diseño, funcionalidad y bienestar.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[13px] font-light leading-[1.85] text-warm mb-5 max-w-[440px]">
              Creamos espacios que no solo se ven bien, sino que funcionan, conectan y generan valor.
              Cada proyecto comienza con una escucha profunda y termina con un espacio que sorprende.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="ghost" href="#nosotros">
              Conoce más sobre nosotros
            </Button>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <ScrollReveal delay={0.15} className="grid grid-rows-2 gap-4 h-[460px]">
          {PROP_CARDS.map((card) => (
            <div key={card.category} className="relative overflow-hidden group">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'saturate(0.85)' }}
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-5"
                style={{ background: 'linear-gradient(to top, rgba(43,43,43,.82), transparent)' }}
              >
                <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-sage mb-1">
                  {card.category}
                </p>
                <p className="font-display text-[20px] font-normal text-white mb-1">{card.title}</p>
                <p className="text-[10px] font-light text-white/60 leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
