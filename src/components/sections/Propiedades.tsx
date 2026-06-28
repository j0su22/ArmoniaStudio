import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { PROPERTIES } from '@/data'
import type { Property } from '@/types'

type Mode = Property['mode']

export function Propiedades() {
  const [mode, setMode] = useState<Mode>('venta')
  const filtered = PROPERTIES.filter((p) => p.mode === mode)

  return (
    <section id="propiedades" className="bg-cream py-24 px-12 lg:px-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <SectionLabel>Bienes Raíces</SectionLabel>
              <h2 className="font-display text-[clamp(36px,4vw,58px)] font-light leading-[1.1] text-charcoal">
                Propiedades <em>destacadas</em>
              </h2>
            </div>
            <a
              href="#contacto"
              className="text-[10px] font-bold tracking-[0.14em] uppercase text-charcoal border-b border-sage pb-0.5 hover:text-sage-dark transition-colors self-start sm:self-end"
            >
              Ver todas las propiedades
            </a>
          </div>
        </ScrollReveal>

        {/* Toggle */}
        <ScrollReveal delay={0.05}>
          <div className="flex gap-2 mb-10">
            {(['venta', 'alquiler'] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`text-[10px] font-bold tracking-[0.14em] uppercase px-6 py-3 transition-all duration-200 cursor-pointer ${
                  mode === m
                    ? 'bg-charcoal text-white'
                    : 'bg-cream-mid text-warm hover:bg-charcoal hover:text-white'
                }`}
              >
                En {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((prop, i) => (
              <motion.article
                key={prop.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-cream-mid overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  {prop.image ? (
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: 'saturate(0.85)' }}
                    />
                  ) : (
                    <div className="w-full h-full bg-cream-dark flex items-center justify-center">
                      <p className="font-display text-[18px] font-light text-warm text-center px-4">
                        {prop.name}
                      </p>
                    </div>
                  )}
                  <span className="absolute top-3.5 left-3.5 bg-sage text-white text-[8px] font-bold tracking-[0.18em] uppercase px-2.5 py-1.5">
                    {prop.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[12px] font-semibold text-charcoal mb-1">{prop.name}</p>
                  <p className="text-[11px] font-light text-muted mb-3.5">{prop.location}</p>
                  <div className="pt-3.5 border-t border-cream-dark">
                    <a
                      href="#contacto"
                      className="text-[10px] font-bold tracking-[0.12em] uppercase text-sage hover:text-sage-dark transition-colors duration-200"
                    >
                      Solicitar información
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button href="#contacto">Solicitar asesoría inmobiliaria</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
