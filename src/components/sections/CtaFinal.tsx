import { MessageCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export function CtaFinal() {
  return (
    <section className="bg-sage py-24 px-12 lg:px-16 text-center">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(36px,4.5vw,62px)] font-light leading-[1.15] text-white mb-4">
            ¿Buscas diseñar o vender<br />una propiedad?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-[13px] font-light leading-[1.8] text-white/75 mb-10">
            Estamos listos para ayudarte. Cada gran espacio comienza con una conversación.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="white" href="#contacto">
              Agenda una asesoría
            </Button>
            <Button
              variant="outline-white"
              href="https://wa.me/50300000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={13} />
              Escríbenos por WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
