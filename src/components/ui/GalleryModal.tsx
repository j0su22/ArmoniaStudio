import { useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GallerySection } from '@/types'

interface GalleryModalProps {
  images: string[]
  index: number
  title: string
  sections?: GallerySection[]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onGoTo: (i: number) => void
}

function buildSectionIndex(sections: GallerySection[]) {
  const map: number[] = [] // map[flatIndex] = sectionIndex
  const starts: number[] = []
  let cursor = 0
  sections.forEach((sec, si) => {
    starts.push(cursor)
    sec.images.forEach(() => { map.push(si); cursor++ })
  })
  return { map, starts }
}

export function GalleryModal({
  images, index, title, sections, onClose, onPrev, onNext, onGoTo,
}: GalleryModalProps) {
  const thumbRef = useRef<HTMLDivElement>(null)

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

  // scroll active thumb into view
  useEffect(() => {
    const el = thumbRef.current?.querySelector(`[data-thumb="${index}"]`) as HTMLElement | null
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [index])

  const { map: sectionMap, starts: sectionStarts } = sections
    ? buildSectionIndex(sections)
    : { map: [], starts: [] }

  const activeSection = sections ? sectionMap[index] : -1

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex flex-col"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-charcoal/96" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-5 pb-3 shrink-0" onClick={e => e.stopPropagation()}>
          <p className="font-display text-[15px] font-light text-white/60 tracking-wide">
            {title}
          </p>
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/40">
            {index + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors cursor-pointer ml-4"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Section tabs */}
        {sections && (
          <div
            className="relative z-10 flex gap-1.5 px-6 pb-3 overflow-x-auto scrollbar-none shrink-0"
            onClick={e => e.stopPropagation()}
          >
            {sections.map((sec, si) => (
              <button
                key={sec.label}
                onClick={() => onGoTo(sectionStarts[si])}
                className={`flex-shrink-0 text-[9px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 transition-all duration-200 cursor-pointer border ${
                  activeSection === si
                    ? 'border-sage bg-sage/20 text-sage'
                    : 'border-white/15 text-white/40 hover:border-white/40 hover:text-white/70'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        )}

        {/* Image */}
        <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 px-16">
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
            src={images[index]}
            alt={`${title} — foto ${index + 1}`}
            className="max-w-full max-h-full object-contain"
            style={{ filter: 'saturate(0.9)' }}
            onClick={e => e.stopPropagation()}
          />

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); onPrev() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); onNext() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div
            ref={thumbRef}
            className="relative z-10 flex gap-1.5 px-6 py-3 overflow-x-auto scrollbar-none shrink-0"
            onClick={e => e.stopPropagation()}
          >
            {images.map((src, i) => (
              <button
                key={i}
                data-thumb={i}
                onClick={() => onGoTo(i)}
                className={`flex-shrink-0 w-12 h-12 overflow-hidden transition-all duration-200 cursor-pointer ${
                  i === index ? 'opacity-100 ring-1 ring-sage' : 'opacity-30 hover:opacity-60'
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
