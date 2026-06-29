import { useEffect, useRef, useState } from 'react'
import { X, MapPin, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Property } from '@/types'

interface Props {
  property: Property
  onClose: () => void
}

export function PropertyModal({ property, onClose }: Props) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const images = (() => {
    const all = property.gallery ?? (property.image ? [property.image] : [])
    const filtered = all.filter((src) => src !== property.image)
    return filtered.length > 0 ? filtered : all
  })()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [images.length, onClose])

  const waText = encodeURIComponent(
    `Hola, estoy interesado/a en la propiedad "${property.name}" que vi en el sitio web de Armonía Estudio.`
  )

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-stretch justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-charcoal/75 backdrop-blur-sm" onClick={onClose} />

        {/* Modal — full screen with small inset */}
        <motion.div
          className="relative m-3 lg:m-6 w-full max-w-[1400px] bg-cream flex flex-col lg:flex-row overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 bg-charcoal hover:bg-sage-dark flex items-center justify-center transition-colors duration-200"
          >
            <X size={14} className="text-white" />
          </button>

          {/* LEFT — 30% — portada + info */}
          <div className="max-h-[55%] lg:max-h-none lg:w-[30%] flex flex-col border-r border-cream-dark overflow-y-auto">
            {/* Portada */}
            {property.image ? (
              <div className="relative w-full aspect-[4/3] flex-shrink-0 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0.85)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-[8px] font-bold tracking-[0.22em] uppercase text-white border border-white/40 px-2 py-0.5 bg-sage">
                    {property.badge}
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-[4/3] flex-shrink-0 bg-charcoal flex items-center justify-center">
                <span className="text-[8px] font-bold tracking-[0.22em] uppercase text-sage border border-sage/40 px-2.5 py-1">
                  Próximamente
                </span>
              </div>
            )}

            {/* Info */}
            <div className="p-7 flex flex-col gap-5 flex-1 bg-cream">
              <div>
                <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-sage mb-2">
                  {property.mode === 'venta' ? 'En Venta' : 'En Alquiler'}
                </p>
                <h2 className="font-display text-[22px] font-light text-charcoal leading-[1.15] mb-2">
                  {property.name}
                </h2>
                <div className="flex items-start gap-1.5">
                  <MapPin size={11} className="text-sage mt-0.5 flex-shrink-0" />
                  <p className="text-[10px] font-light text-warm leading-[1.5]">{property.location}</p>
                </div>
              </div>

              {property.price && (
                <p className="font-display text-[26px] font-light text-charcoal border-t border-cream-dark pt-5">
                  {property.price}
                </p>
              )}

              {(property.area || property.builtArea || property.units) && (
                <div className="flex flex-col gap-2 border-t border-cream-dark pt-5">
                  {property.area && (
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-muted">Terreno</span>
                      <span className="text-[11px] font-light text-charcoal">{property.area}</span>
                    </div>
                  )}
                  {property.builtArea && (
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-muted">Construcción</span>
                      <span className="text-[11px] font-light text-charcoal">{property.builtArea}</span>
                    </div>
                  )}
                  {property.units && (
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-muted">Unidades</span>
                      <span className="text-[11px] font-light text-charcoal">{property.units}</span>
                    </div>
                  )}
                </div>
              )}

              {property.description && (
                <p className="text-[11px] font-light leading-[1.8] text-warm border-t border-cream-dark pt-5">
                  {property.description}
                </p>
              )}

              {property.features && property.features.length > 0 && (
                <div className="border-t border-cream-dark pt-5">
                  <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted mb-3">
                    Características
                  </p>
                  <ul className="flex flex-col gap-2">
                    {property.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-sage flex-shrink-0 mt-[2px]">▸</span>
                        <span className="text-[11px] font-light text-warm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {property.ideal && property.ideal.length > 0 && (
                <div className="border-t border-cream-dark pt-5">
                  <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted mb-3">
                    Ideal para
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {property.ideal.map((tag) => (
                      <span key={tag} className="text-[9px] text-sage border border-sage/40 px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
                href={`https://wa.me/50373473219?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 bg-[#25D366] text-white text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-3.5 hover:bg-[#1fba5a] transition-colors duration-200"
              >
                <MessageCircle size={13} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — 70% — galería */}
          <div className="flex-1 min-h-0 lg:flex-none lg:w-[70%] flex flex-col bg-cream-mid overflow-hidden">
            {images.length > 0 ? (
              <>
                {/* Main image */}
                <div className="relative flex-1 min-h-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active}
                      src={images[active]}
                      alt={`${property.name} ${active + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </AnimatePresence>

                  {/* Nav arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream/80 hover:bg-cream flex items-center justify-center text-charcoal text-lg transition-colors duration-200 shadow-sm"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setActive((i) => (i + 1) % images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream/80 hover:bg-cream flex items-center justify-center text-charcoal text-lg transition-colors duration-200 shadow-sm"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Counter */}
                  <div className="absolute bottom-4 right-4 text-[9px] font-light text-warm tracking-widest bg-cream/80 px-2.5 py-1">
                    {active + 1} / {images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div
                    ref={galleryRef}
                    className="flex gap-2 p-4 overflow-x-auto flex-shrink-0 scrollbar-none border-t border-cream-dark bg-cream"
                  >
                    {images.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`relative flex-shrink-0 w-20 h-14 overflow-hidden transition-all duration-200 ${
                          i === active
                            ? 'ring-1 ring-sage opacity-100'
                            : 'opacity-50 hover:opacity-80'
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85)' }} />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[11px] text-muted tracking-widest uppercase">Sin imágenes disponibles</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
