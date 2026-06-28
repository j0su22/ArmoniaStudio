import { Calendar } from 'lucide-react'
import { useNavScroll } from '@/hooks/useNavScroll'
import { NAV_LINKS } from '@/data'

export function Navbar() {
  const scrolled = useNavScroll()

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center px-12 h-[72px] transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-cream-mid shadow-sm'
          : 'bg-cream/95'
      }`}
    >
      <a href="#inicio" className="flex-shrink-0">
        <img src="./images/logos/logo.png" alt="Armonía Estudio" className="h-12 w-auto" />
      </a>

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

      <a
        href="#contacto"
        className="ml-6 flex-shrink-0 hidden md:inline-flex items-center gap-2 bg-charcoal text-white text-[10px] font-bold tracking-[0.14em] uppercase px-5 py-3 hover:bg-sage-dark transition-colors duration-250"
      >
        <Calendar size={12} />
        Agenda una visita
      </a>
    </nav>
  )
}
