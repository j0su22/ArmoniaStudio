import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PROJECTS, PROJECT_CATEGORIES } from '@/data'
import type { ProjectCategory } from '@/types'

const CATEGORY_LABELS: Record<string, string> = {
  residencial: 'Residencial',
  airbnb: 'Airbnb',
  consultorio: 'Consultorio',
  comercial: 'Comercial',
  homestaging: 'Home Staging',
}

const GRID_SPANS = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-8',
  'lg:col-span-6',
  'lg:col-span-6',
]

const ASPECT_RATIOS = [
  'aspect-[4/3]',
  'aspect-[3/4]',
  'aspect-[3/4]',
  'aspect-[16/9]',
  'aspect-[4/3]',
  'aspect-[4/3]',
]

export function Portafolio() {
  const [active, setActive] = useState<ProjectCategory>('all')

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="portafolio" className="bg-cream-mid py-24 px-12 lg:px-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <SectionLabel>Portafolio</SectionLabel>
              <h2 className="font-display text-[clamp(36px,4vw,58px)] font-light leading-[1.1] text-charcoal">
                El trabajo <em>habla</em>
              </h2>
            </div>
            <a
              href="#contacto"
              className="text-[10px] font-bold tracking-[0.14em] uppercase text-charcoal border-b border-sage pb-0.5 hover:text-sage-dark hover:border-sage-dark transition-colors self-start sm:self-end"
            >
              Ver portafolio completo
            </a>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-1.5 mb-9">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value as ProjectCategory)}
                className={`text-[10px] font-semibold tracking-[0.14em] uppercase px-4 py-2.5 border transition-all duration-200 cursor-pointer ${
                  active === cat.value
                    ? 'bg-charcoal border-charcoal text-white'
                    : 'bg-transparent border-cream-dark text-warm hover:bg-charcoal hover:border-charcoal hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.04 }}
                className={`col-span-12 ${GRID_SPANS[i] ?? 'lg:col-span-6'} relative overflow-hidden group cursor-pointer`}
              >
                <div className={ASPECT_RATIOS[i] ?? 'aspect-[4/3]'}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06]"
                    style={{ filter: 'saturate(0.78)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'saturate(1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'saturate(0.78)')}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6"
                    style={{ background: 'linear-gradient(to top, rgba(43,43,43,.84) 0%, rgba(43,43,43,.06) 55%, transparent 100%)' }}
                  >
                    <motion.div
                      initial={{ y: 12 }}
                      whileInView={{ y: 0 }}
                      className="translate-y-3 group-hover:translate-y-0 transition-transform duration-400"
                    >
                      <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-sage mb-1.5">
                        {CATEGORY_LABELS[project.category]}
                      </p>
                      <p className="font-display text-[20px] font-normal text-white mb-0.5">
                        {project.name}
                      </p>
                      <p className="text-[10px] text-white/55">
                        {project.location} · {project.year}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
