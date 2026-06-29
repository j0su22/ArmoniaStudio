import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const CONTACT_INFO = [
  { icon: Phone,  label: 'Teléfono / WhatsApp', value: '+503 7347-3219', href: 'tel:+50373473219' },
  { icon: Mail,   label: 'Correo',               value: 'gabrielaaguilarconsultora@gmail.com', href: 'mailto:gabrielaaguilarconsultora@gmail.com' },
  { icon: MapPin, label: 'Ubicación',             value: 'El Salvador', href: null },
]

export function Contacto() {
  return (
    <section id="contacto" className="bg-cream-mid py-24 px-6 sm:px-12 lg:px-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <ScrollReveal>
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="font-display text-[clamp(32px,3.5vw,50px)] font-light leading-[1.15] text-charcoal mb-5">
              Hablemos de tu <em>próximo espacio</em>
            </h2>
            <p className="text-[13px] font-light leading-[1.8] text-warm mb-10 max-w-[420px]">
              Ya sea diseño de interiores o una propiedad que deseas vender,
              estamos aquí para ayudarte.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-sage flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-sage" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-[13px] font-normal text-charcoal hover:text-sage transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[13px] font-normal text-charcoal">{value}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col gap-5">
            <p className="text-[11px] font-light leading-[1.8] text-warm mb-2">
              Elige la forma en que prefieres contactarnos:
            </p>

            <a
              href="https://wa.me/50373473219?text=Hola%2C%20me%20contacto%20desde%20el%20sitio%20web%20de%20Armon%C3%ADa%20Estudio."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 rounded-xl hover:bg-[#1fba5a] transition-colors duration-200 group"
            >
              <MessageCircle size={22} className="flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-0.5">
                  WhatsApp
                </p>
                <p className="text-[12px] font-light opacity-85">
                  Escríbenos directamente, respondemos rápido
                </p>
              </div>
            </a>

            <a
              href="mailto:gabrielaaguilarconsultora@gmail.com?subject=Consulta%20desde%20Armon%C3%ADa%20Estudio"
              className="flex items-center gap-4 bg-charcoal text-white px-8 py-5 rounded-xl hover:bg-sage-dark transition-colors duration-200 group"
            >
              <Mail size={22} className="flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-0.5">
                  Correo Electrónico
                </p>
                <p className="text-[12px] font-light opacity-85">
                  gabrielaaguilarconsultora@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/armoniaestudiosv/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white px-8 py-5 rounded-xl transition-opacity duration-200 hover:opacity-90 group"
              style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-0.5">Instagram</p>
                <p className="text-[12px] font-light opacity-85">@armoniaestudiosv</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/share/1D3Yooqd4n/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white px-8 py-5 rounded-xl transition-opacity duration-200 hover:opacity-90 group"
              style={{ background: '#1877F2' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-0.5">Facebook</p>
                <p className="text-[12px] font-light opacity-85">Armonía Estudio / interiorismo y real estate</p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
