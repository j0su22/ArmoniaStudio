import { useState } from 'react'
import { Calendar, Menu, X } from 'lucide-react'
import { useNavScroll } from '@/hooks/useNavScroll'
import { NAV_LINKS } from '@/data'

export function Navbar() {
  const scrolled = useNavScroll()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center px-8 lg:px-12 h-[72px] transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-cream-mid shadow-sm'
          : 'bg-cream/95'
      }`}
    >
      <a href="#inicio" className="flex-shrink-0" onClick={close}>
        <img src="./images/logos/logo.png" alt="Armonía Estudio" className="h-12 w-auto" />
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-8 ml-auto">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[10px] font-semibold tracking-[0.14em] uppercase text-warm hover:text-charcoal transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#contacto"
        className="ml-6 flex-shrink-0 hidden lg:inline-flex items-center gap-2 bg-charcoal text-white text-[10px] font-bold tracking-[0.14em] uppercase px-5 py-3 hover:bg-sage-dark transition-colors duration-200"
      >
        <Calendar size={12} />
        Agenda una visita
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="ml-auto lg:hidden w-10 h-10 flex items-center justify-center text-charcoal hover:text-sage transition-colors duration-200"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>

    {/* Mobile drawer */}
    {open && (
      <div className="fixed inset-0 z-40 lg:hidden">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={close} />

        {/* Panel */}
        <div className="absolute top-[72px] left-0 right-0 bg-cream border-t border-cream-mid shadow-xl">
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block px-8 py-4 text-[11px] font-semibold tracking-[0.14em] uppercase text-warm hover:text-charcoal hover:bg-cream-mid transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-8 pb-6">
            <a
              href="#contacto"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-charcoal text-white text-[10px] font-bold tracking-[0.14em] uppercase px-5 py-4 hover:bg-sage-dark transition-colors duration-200 w-full"
            >
              <Calendar size={12} />
              Agenda una visita
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
