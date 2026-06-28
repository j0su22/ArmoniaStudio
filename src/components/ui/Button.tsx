import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'white' | 'outline-white'

const BASE = 'inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-charcoal text-white px-7 py-3.5 hover:bg-sage-dark',
  ghost:
    'text-charcoal border-b border-sage pb-0.5 hover:text-sage-dark hover:border-sage-dark',
  white:
    'bg-white text-charcoal px-7 py-3.5 hover:bg-charcoal hover:text-white',
  'outline-white':
    'border border-white/50 text-white px-7 py-3.5 hover:border-white hover:bg-white/10',
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: 'a'
  variant?: Variant
  children: ReactNode
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as: 'button'
  variant?: Variant
  children: ReactNode
}

type Props = AnchorProps | ButtonProps

export function Button({ variant = 'primary', children, className = '', ...props }: Props) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`

  if (props.as === 'button') {
    const { as: _as, ...rest } = props
    return (
      <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    )
  }

  const { as: _as, ...rest } = props as AnchorProps
  return (
    <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  )
}
