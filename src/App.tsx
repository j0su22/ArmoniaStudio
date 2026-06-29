import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { Hero } from '@/components/sections/Hero'
import { Proposito } from '@/components/sections/Proposito'
import { ValoresBar } from '@/components/sections/ValoresBar'
import { EstiloCta } from '@/components/sections/EstiloCta'
import { Testimonios } from '@/components/sections/Testimonios'
import { Nosotros } from '@/components/sections/Nosotros'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { Contacto } from '@/components/sections/Contacto'

const Portafolio = lazy(() => import('@/components/sections/Portafolio').then(m => ({ default: m.Portafolio })))
const Propiedades = lazy(() => import('@/components/sections/Propiedades').then(m => ({ default: m.Propiedades })))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proposito />
        <ValoresBar />
        <Suspense fallback={null}>
          <Portafolio />
        </Suspense>
        <div className="bg-cream-mid px-6 sm:px-12 lg:px-16">
          <div className="max-w-[1300px] mx-auto border-t border-cream-dark" />
        </div>
        <EstiloCta />
        <Suspense fallback={null}>
          <Propiedades />
        </Suspense>
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
