import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const CONTACT_INFO = [
  { icon: Phone,  label: 'Teléfono / WhatsApp', value: '+503 0000-0000' },
  { icon: Mail,   label: 'Correo',               value: 'hola@armoniaestudio.com' },
  { icon: MapPin, label: 'Ubicación',             value: 'San Salvador, El Salvador' },
]

const SERVICE_OPTIONS = [
  'Diseño de interiores',
  'Home Staging',
  'Remodelación',
  'Diseño para Airbnb',
  'Diseño de Consultorio',
  'Venta de propiedad',
  'Alquiler de propiedad',
  'Asesoría inmobiliaria',
]

type Status = 'idle' | 'sending' | 'sent'

export function Contacto() {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 3500)
    }, 900)
  }

  const labelCls = 'block text-[9px] font-bold tracking-[0.2em] uppercase text-muted mb-2'
  const inputCls =
    'w-full bg-cream border border-cream-dark px-4 py-3.5 text-[12px] font-normal text-charcoal outline-none focus:border-sage transition-colors duration-250 font-sans'

  return (
    <section id="contacto" className="bg-cream-mid py-24 px-12 lg:px-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <ScrollReveal>
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="font-display text-[clamp(32px,3.5vw,50px)] font-light leading-[1.15] text-charcoal mb-5">
              Hablemos de tu <em>próximo espacio</em>
            </h2>
            <p className="text-[13px] font-light leading-[1.8] text-warm mb-10 max-w-[420px]">
              Ya sea diseño de interiores, home staging o una propiedad que deseas vender o alquilar,
              estamos aquí para ayudarte.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-sage flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-sage" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted mb-1">
                      {label}
                    </p>
                    <p className="text-[13px] font-normal text-charcoal">{value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Form */}
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Nombre</label>
                <input type="text" placeholder="Tu nombre" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input type="email" placeholder="tu@email.com" className={inputCls} required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Teléfono</label>
                <input type="tel" placeholder="+503 0000-0000" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Tipo de servicio</label>
                <select
                  className={`${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7'%3E%3Cpath d='M0 0l6 7 6-7' fill='none' stroke='%23A09891' stroke-width='1.5'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_16px_center]`}
                >
                  <option value="" disabled>Selecciona</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Mensaje</label>
              <textarea
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                className={`${inputCls} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2.5 bg-charcoal text-white text-[10px] font-bold tracking-[0.16em] uppercase px-8 py-4 hover:bg-sage-dark transition-colors duration-250 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {status === 'sent' ? (
                'Mensaje enviado ✓'
              ) : status === 'sending' ? (
                'Enviando...'
              ) : (
                <>
                  <Send size={12} /> Enviar mensaje
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
