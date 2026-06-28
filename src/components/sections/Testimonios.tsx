import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TESTIMONIALS } from '@/data'

export function Testimonios() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section id="testimonios" className="bg-charcoal py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-12 lg:px-16">
        <ScrollReveal>
          <SectionLabel>Testimonios</SectionLabel>
          <h2 className="font-display text-[clamp(36px,4vw,58px)] font-light leading-[1.1] text-white mb-14">
            Lo que dicen <em>nuestros clientes</em>
          </h2>
        </ScrollReveal>
      </div>

      {/* Carousel */}
      <div className="flex animate-marquee w-max">
        {doubled.map((t, i) => (
          <article
            key={i}
            className="flex-shrink-0 w-[380px] mx-3 border border-white/[0.06] p-9 hover:border-sage transition-colors duration-300 flex flex-col"
          >
            <div className="flex gap-1 mb-5 text-sage text-[13px]">
              {'★'.repeat(t.rating)}
            </div>
            <blockquote className="font-display text-[18px] font-light italic leading-[1.65] text-white/85 mb-6 flex-1">
              "{t.quote}"
            </blockquote>
            <div>
              <div className="w-7 h-px bg-sage mb-4" />
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white mb-1">
                {t.author}
              </p>
              <p className="text-[10px] font-light text-white/35">{t.service}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
