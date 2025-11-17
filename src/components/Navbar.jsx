import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Test', href: '/test' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a className="font-bold text-lg tracking-tight" href="#">Flames.Blue</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 transition-colors">Get Started</a>
          </nav>
          <button className="md:hidden p-2 rounded hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu size={22} />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded hover:bg-black/5">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 transition-colors">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
