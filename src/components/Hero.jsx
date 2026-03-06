import { BsLightningChargeFill, BsArrowRight, BsShieldFillCheck  } from 'react-icons/bs'
import { MdVerifiedUser } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2,400+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Emergency Service' },
]

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-jet-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,193,7,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,193,7,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-volt-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-volt-600/8 rounded-full blur-3xl" />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-jet-900/80 via-jet-900/40 to-jet-900" />
      </div>

      {/* Electrical circuit decorations */}
      <div className="absolute top-20 right-10 lg:right-20 opacity-10 hidden md:block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M150 0 L150 100 L200 100 L200 150 L300 150" stroke="#FFC107" strokeWidth="2" strokeDasharray="5,5"/>
          <path d="M0 200 L100 200 L100 150 L200 150" stroke="#FFC107" strokeWidth="2" strokeDasharray="5,5"/>
          <circle cx="150" cy="100" r="4" fill="#FFC107"/>
          <circle cx="200" cy="150" r="4" fill="#FFC107"/>
          <circle cx="100" cy="200" r="4" fill="#FFC107"/>
          <path d="M260 140 L280 150 L260 160" stroke="#FFC107" strokeWidth="2"/>
          <rect x="190" y="138" width="24" height="24" rx="2" stroke="#FFC107" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-32 left-5 lg:left-20 opacity-10 hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M0 100 L80 100 L80 50 L120 50 L120 100 L200 100" stroke="#FFC107" strokeWidth="2" strokeDasharray="5,5"/>
          <circle cx="80" cy="100" r="4" fill="#FFC107"/>
          <circle cx="120" cy="100" r="4" fill="#FFC107"/>
          <rect x="68" y="38" width="24" height="24" rx="2" stroke="#FFC107" strokeWidth="2"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-volt-500/10 border border-volt-500/30 mb-8"
            style={{ animation: 'fadeUp 0.6s ease-out 0.1s both' }}
          >
            <BsLightningChargeFill className="text-volt-500 text-sm animate-pulse-slow" />
            <span className="font-mono text-xs text-volt-400 tracking-wider uppercase">
              Licensed & Insured Electricians
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-green-400">Available Now</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-wide mb-6"
            style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
          >
            <span className="block text-white">RELIABLE</span>
            <span className="block text-gradient">ELECTRICAL</span>
            <span className="block text-white">SERVICES</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-lg text-jet-300 max-w-2xl mb-10 leading-relaxed"
            style={{ animation: 'fadeUp 0.6s ease-out 0.3s both' }}
          >
            Professional electrical solutions for homes and businesses. From simple repairs to 
            full panel upgrades — we bring power to your world safely and efficiently.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-16"
            style={{ animation: 'fadeUp 0.6s ease-out 0.4s both' }}
          >
            <button
              onClick={() => scrollTo('contact')}
              className="group flex items-center gap-3 px-8 py-4 bg-volt-500 text-jet-900 font-body font-bold text-sm rounded-xl hover:bg-volt-400 transition-all duration-300 shadow-xl shadow-volt-500/25 hover:shadow-volt-500/50 hover:-translate-y-1"
            >
              <FiPhoneCall className="text-base" />
              Get a Free Quote
              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white font-body font-semibold text-sm rounded-xl border border-jet-600 hover:border-volt-500/50 hover:bg-jet-800/50 transition-all duration-300 hover:-translate-y-1"
            >
              Our Services
              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-volt-500" />
            </button>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-6"
            style={{ animation: 'fadeUp 0.6s ease-out 0.5s both' }}
          >
            <div className="flex items-center gap-2 text-jet-400 text-sm font-body">
              <MdVerifiedUser className="text-volt-500 text-lg" />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2 text-jet-400 text-sm font-body">
              <BsShieldFillCheck  className="text-volt-500 text-lg" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-jet-400 text-sm font-body">
              <BsLightningChargeFill className="text-volt-500 text-lg" />
              <span>24/7 Emergency</span>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="absolute bottom-8 left-0 right-0 px-4 sm:px-6 lg:px-8"
          style={{ animation: 'fadeUp 0.6s ease-out 0.6s both' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-jet-700/30 rounded-2xl overflow-hidden border border-jet-700/30">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-jet-900/80 backdrop-blur-sm px-6 py-5 flex flex-col gap-1 group hover:bg-jet-800/80 transition-colors duration-300"
                >
                  <span className="font-display text-3xl text-volt-500">{stat.value}</span>
                  <span className="font-body text-xs text-jet-400 group-hover:text-jet-300 transition-colors">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
