import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const links = [
  { href: '#services', label: 'Servizi' },
  { href: '#showcase', label: 'Portfolio' },
  { href: '#about', label: 'Chi Siamo' },
  { href: '#contact', label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={classNames(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20" />
          <span className="text-white font-semibold tracking-wide">Frame Factory House</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-200 hover:text-white/90 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-white text-slate-900 text-sm font-semibold px-4 py-2 hover:shadow-lg hover:shadow-white/10 transition-all">Richiedi Preventivo</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Apri menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-slate-900/90 border-t border-white/10">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-white text-slate-900 font-semibold text-center">Richiedi Preventivo</a>
        </div>
      )}
    </header>
  )
}
