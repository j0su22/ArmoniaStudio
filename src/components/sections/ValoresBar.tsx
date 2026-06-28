import { Layers, Grid2x2, Heart, Home, TrendingUp } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const VALORES = [
  { icon: Layers,     name: 'Diseño Intencional',      desc: 'Cada detalle se diseña con un propósito claro.' },
  { icon: Grid2x2,    name: 'Estética y Funcionalidad', desc: 'Espacios que no solo se ven bien, sino que mejoran tu día.' },
  { icon: Heart,      name: 'Piezas con Historia',      desc: 'Selección de objetos que dan carácter y significado.' },
  { icon: Home,       name: 'Propiedades que Conectan', desc: 'Ayudamos a encontrar y transformar espacios con potencial.' },
  { icon: TrendingUp, name: 'Resultados Reales',        desc: 'Espacios que generan valor y marcan la diferencia.' },
]

export function ValoresBar() {
  return (
    <div className="bg-charcoal py-14 px-12 lg:px-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {VALORES.map((v, i) => (
          <ScrollReveal key={v.name} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center gap-3">
              <v.icon size={28} className="text-sage" strokeWidth={1.5} />
              <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white leading-5">
                {v.name}
              </p>
              <p className="text-[10px] font-light leading-[1.65] text-white/40">{v.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
