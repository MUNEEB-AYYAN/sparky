import { useState, useEffect } from 'react'
import { BsLightningChargeFill } from 'react-icons/bs'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-jet-900/95 backdrop-blur-md border-b border-jet-700/50 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-volt-500 rounded-lg flex items-center justify-center group-hover:bg-volt-400 transition-colors duration-300 shadow-lg shadow-volt-500/30">
                <BsLightningChargeFill className="text-jet-900 text-lg" />
              </div>
              <div className="absolute inset-0 bg-volt-500 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl text-white tracking-wider">SPARKVOLT</span>
              <span className="font-mono text-[9px] text-volt-500 tracking-[0.2em] uppercase">Electric</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-volt-500'
                    : 'text-jet-300 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-volt-500 rounded-full transition-all duration-300 ${
                    activeSection === link.href.replace('#', '') ? 'w-4' : 'w-0 group-hover:w-4'
                  }`}
                />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="ml-4 px-5 py-2.5 bg-volt-500 text-jet-900 font-body font-semibold text-sm rounded-lg hover:bg-volt-400 transition-all duration-300 shadow-lg shadow-volt-500/20 hover:shadow-volt-500/40 hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-volt-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-jet-900/98 backdrop-blur-lg border-t border-jet-700/50 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body font-medium text-sm transition-all duration-300 mb-1 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-volt-500 bg-volt-500/10'
                  : 'text-jet-200 hover:text-white hover:bg-jet-800'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-volt-500 opacity-60" />
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-jet-700/50">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="block w-full text-center px-5 py-3 bg-volt-500 text-jet-900 font-body font-semibold text-sm rounded-lg hover:bg-volt-400 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
