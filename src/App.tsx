import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { Hero } from '@/components/sections/Hero'
import { Proposito } from '@/components/sections/Proposito'
import { ValoresBar } from '@/components/sections/ValoresBar'
import { Portafolio } from '@/components/sections/Portafolio'
import { EstiloCta } from '@/components/sections/EstiloCta'
import { Propiedades } from '@/components/sections/Propiedades'
import { Testimonios } from '@/components/sections/Testimonios'
import { Nosotros } from '@/components/sections/Nosotros'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { Contacto } from '@/components/sections/Contacto'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proposito />
        <ValoresBar />
        <Portafolio />
        <EstiloCta />
        <Propiedades />
        <Testimonios />
        <Nosotros />
        <CtaFinal />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
