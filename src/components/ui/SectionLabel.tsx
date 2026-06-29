interface SectionLabelProps {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="block w-7 h-px flex-shrink-0 bg-sage" />
      <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-sage">
        {children}
      </span>
    </div>
  )
}
