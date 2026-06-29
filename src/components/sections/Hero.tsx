import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const titleWords = ['Espacios que', 'se sienten bien,', 'funcionan mejor.']

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="inicio" className="min-h-svh grid grid-cols-1 lg:grid-cols-2 pt-[72px]">
      {/* Left */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20">
        <motion.p
          initial={{ opacity: reduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.2 }}
          className="text-[10px] font-bold tracking-[0.28em] uppercase text-sage mb-7"
        >
          Diseño de Interiores / Bienes y Raíces
        </motion.p>

        <h1 className="font-display text-[clamp(44px,5.5vw,80px)] font-light leading-[1.05] text-charcoal mb-7">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className={`block ${i === 2 ? 'italic text-warm' : ''}`}
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: reduced ? 0 : 0.4 + i * 0.15 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.85 }}
          className="text-[13px] font-light leading-[1.85] text-warm max-w-[360px] mb-11"
        >
          Diseñamos ambientes que combinan estética, funcionalidad y propósito.
          Cada espacio, una conversación entre forma y vida.
        </motion.p>

        <motion.div
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 1.05 }}
          className="flex items-center gap-5 flex-wrap"
        >
          <Button href="#portafolio">Ver portafolio</Button>
          <Button variant="ghost" href="#contacto">
            Hablemos de tu proyecto
          </Button>
        </motion.div>
      </div>

      {/* Right */}
      <div className="relative overflow-hidden min-h-[400px] lg:min-h-full">
        <motion.img
          src="./images/portadas/hero-1.webp"
          alt="Interior diseñado por Armonía Estudio"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.9) contrast(1.03)' }}
          fetchPriority="high"
          decoding="async"
          initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduced ? 0 : 1.4, ease: 'easeOut', delay: reduced ? 0 : 0.3 }}
        />
        <div className="absolute bottom-8 left-8 text-[9px] font-medium tracking-[0.22em] uppercase text-white/60">
          Puerta del Alma · 2025
        </div>
      </div>
    </section>
  )
}
