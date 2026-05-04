import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85&auto=format&fit=crop'

const titleWords = ['Espacios que', 'se sienten bien,', 'funcionan mejor.']

export function Hero() {
  return (
    <section id="inicio" className="min-h-svh grid grid-cols-1 lg:grid-cols-2 pt-[72px]">
      {/* Left */}
      <div className="flex flex-col justify-center px-12 lg:px-16 py-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[10px] font-bold tracking-[0.28em] uppercase text-sage mb-7"
        >
          Diseño de Interiores
        </motion.p>

        <h1 className="font-display text-[clamp(44px,5.5vw,80px)] font-light leading-[1.05] text-charcoal mb-7">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className={`block ${i === 2 ? 'italic text-warm' : ''}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 + i * 0.15 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-[13px] font-light leading-[1.85] text-warm max-w-[360px] mb-11"
        >
          Diseñamos ambientes que combinan estética, funcionalidad y propósito.
          Cada espacio, una conversación entre forma y vida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
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
          src={HERO_IMAGE}
          alt="Interior diseñado por Armonía Estudio"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.9) contrast(1.03)' }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        />
        <div className="absolute bottom-8 left-8 text-[9px] font-medium tracking-[0.22em] uppercase text-white/60">
          Residencia privada · 2024
        </div>
      </div>
    </section>
  )
}
