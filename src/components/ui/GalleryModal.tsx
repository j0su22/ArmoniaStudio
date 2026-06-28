import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryModalProps {
  images: string[]
  index: number
  title: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onGoTo: (i: number) => void
}

export function GalleryModal({ images, index, title, onClose, onPrev, onNext, onGoTo }: GalleryModalProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-charcoal/95" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <X size={28} />
        </button>

        {/* Counter */}
        <span className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50">
          {index + 1} / {images.length}
        </span>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 max-w-[90vw] max-h-[82vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index]}
            alt={`${title} — foto ${index + 1}`}
            className="max-w-full max-h-[82vh] object-contain"
            style={{ filter: 'saturate(0.9)' }}
          />
        </motion.div>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 z-10 p-3 text-white/60 hover:text-white transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 z-10 p-3 text-white/60 hover:text-white transition-colors cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight size={36} />
          </button>
        )}

        {/* Title */}
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 font-display text-[15px] font-light text-white/60 tracking-wide whitespace-nowrap">
          {title}
        </p>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 max-w-[80vw] overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                className={`flex-shrink-0 w-10 h-10 overflow-hidden transition-opacity cursor-pointer ${
                  i === index ? 'opacity-100 ring-1 ring-white' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
