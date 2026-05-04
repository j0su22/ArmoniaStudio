interface SectionLabelProps {
  children: string
  light?: boolean
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className={`block w-7 h-px flex-shrink-0 ${light ? 'bg-sage' : 'bg-sage'}`} />
      <span
        className={`text-[10px] font-semibold tracking-[0.28em] uppercase ${
          light ? 'text-sage' : 'text-sage'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
