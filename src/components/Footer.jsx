import { BsLightningChargeFill, BsFacebook, BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'

const footerLinks = {
  Services: [
    'House Wiring', 'Electrical Repair', 'Lighting Installation',
    'Ceiling Fan Install', 'Panel Upgrade', 'EV Charger Install',
  ],
  Company: [
    'About Us', 'Our Work', 'Testimonials', 'Blog', 'Careers', 'Contact',
  ],
  Legal: [
    'Privacy Policy', 'Terms of Service', 'Licensing Info', 'Warranty Policy',
  ],
}

const socials = [
  { icon: BsFacebook, href: '#', label: 'Facebook' },
  { icon: BsInstagram, href: '#', label: 'Instagram' },
  { icon: BsTwitter, href: '#', label: 'Twitter/X' },
  { icon: BsYoutube, href: '#', label: 'YouTube' },
  { icon: BsLinkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-jet-900 border-t border-jet-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid lg:grid-cols-5 gap-12 py-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('home') }}
              className="flex items-center gap-2 group mb-6"
            >
              <div className="relative">
                <div className="w-9 h-9 bg-volt-500 rounded-lg flex items-center justify-center group-hover:bg-volt-400 transition-colors duration-300">
                  <BsLightningChargeFill className="text-jet-900 text-lg" />
                </div>
                <div className="absolute inset-0 bg-volt-500 rounded-lg blur-md opacity-30" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl text-white tracking-wider">SPARKVOLT</span>
                <span className="font-mono text-[9px] text-volt-500 tracking-[0.2em] uppercase">Electric</span>
              </div>
            </a>

            <p className="font-body text-jet-400 text-sm leading-relaxed mb-6 max-w-xs">
              Licensed master electricians serving homes and businesses with integrity, 
              precision, and 24/7 reliability since 2009.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-8">
              <a href="tel:+15551234567" className="flex items-center gap-3 font-body text-sm text-jet-400 hover:text-volt-400 transition-colors">
                <MdPhone className="text-volt-500 flex-shrink-0" />
                8856937384
              </a>
              <a href="mailto:info@sparkvolt.com" className="flex items-center gap-3 font-body text-sm text-jet-400 hover:text-volt-400 transition-colors">
                <MdEmail className="text-volt-500 flex-shrink-0" />
                info@sparkvolt.com
              </a>
              <div className="flex items-center gap-3 font-body text-sm text-jet-400">
                <MdLocationOn className="text-volt-500 flex-shrink-0" />
                Greater Metro Area, 50-Mile Radius
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-jet-800 border border-jet-700/50 flex items-center justify-center text-jet-400 hover:text-volt-500 hover:border-volt-500/40 hover:bg-jet-700 transition-all duration-300"
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body font-semibold text-white text-sm mb-5 flex items-center gap-2">
                <span className="w-3 h-px bg-volt-500" />
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="font-body text-sm text-jet-500 hover:text-volt-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-jet-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-jet-600">
            © {new Date().getFullYear()} SparkVolt Electric LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-jet-600">Lic. #ME-2847 | Fully Insured</span>
            <div className="flex items-center gap-1.5">
              <BsLightningChargeFill className="text-volt-500 text-xs" />
              <span className="font-mono text-[11px] text-jet-600">Powered by passion for safe electrical work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
