import { Phone, Mail, MapPin } from 'lucide-react'
import { SOCIAL_LINKS } from '@/data'

const DESIGN_LINKS = [
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Diseño Residencial', href: '#portafolio' },
  { label: 'Airbnb', href: '#portafolio' },
  { label: 'Consultorios', href: '#portafolio' },
  { label: 'Comercial', href: '#portafolio' },
]

const PROPERTY_LINKS = [
  { label: 'En Venta', href: '#propiedades' },
  { label: 'Asesoría Inmobiliaria', href: '#contacto' },
  { label: 'Capta tu propiedad', href: '#contacto' },
]

const CONTACT_INFO = [
  { icon: Phone, text: '+503 7347-3219', href: 'tel:+50373473219' },
  { icon: Mail, text: 'gabrielaaguilarconsultora@gmail.com', href: 'mailto:gabrielaaguilarconsultora@gmail.com' },
  { icon: MapPin, text: 'El Salvador', href: null },
]

export function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="max-w-[1300px] mx-auto px-16 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <img
              src="./images/logos/logoFill.png"
              alt="Armonía Estudio"
              className="h-12 w-auto mb-4"
            />
            <p className="text-[11px] font-light leading-7 text-white/35 mb-5">
              Diseñamos espacios que generan bienestar y resultados.
              Interior Design · Bienes Raíces · El Salvador.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/armoniaestudiosv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/[0.12] flex items-center justify-center text-white/40 hover:border-sage hover:text-sage transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a
                href="https://www.facebook.com/share/1D3Yooqd4n/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/[0.12] flex items-center justify-center text-white/40 hover:border-sage hover:text-sage transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Diseño */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white mb-5">
              Diseño de Interiores
            </p>
            <ul className="flex flex-col gap-2.5">
              {DESIGN_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[11px] font-light text-white/40 hover:text-sage transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Propiedades */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white mb-5">
              Propiedades
            </p>
            <ul className="flex flex-col gap-2.5">
              {PROPERTY_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[11px] font-light text-white/40 hover:text-sage transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white mb-5">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={13} className="text-sage mt-0.5 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="text-[11px] font-light text-white/40 leading-5 hover:text-sage transition-colors duration-200">
                      {text}
                    </a>
                  ) : (
                    <span className="text-[11px] font-light text-white/40 leading-5">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="text-[10px] text-white/20 tracking-wide">
            © 2025 Armonía Estudio. Todos los derechos reservados.
          </p>
          <a href="#" className="text-[10px] text-white/20 hover:text-sage transition-colors duration-200">
            Aviso de Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}
