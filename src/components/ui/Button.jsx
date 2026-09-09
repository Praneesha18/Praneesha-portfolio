import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, href, secondary = false, className = '', ...props }) {
  const style = `creative-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2 ${
    secondary
      ? 'creative-button--secondary border border-ink/25 bg-transparent text-ink hover:bg-ink hover:text-paper'
      : 'bg-saffron text-[var(--btn-text)] shadow-sm'
  } ${className}`

  return href ? (
    <a className={style} href={href} {...props}>
      {children}
      <ArrowUpRight size={15} />
    </a>
  ) : (
    <button className={style} {...props}>
      {children}
    </button>
  )
}
