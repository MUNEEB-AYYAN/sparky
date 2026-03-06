import { BsLightningChargeFill, BsCheckCircleFill, BsAwardFill } from 'react-icons/bs'
import { MdElectricalServices } from 'react-icons/md'

const certifications = [
  'Master Electrician License #ME-2847',
  'OSHA 30-Hour Safety Certification',
  'NFPA 70E Arc Flash Certified',
  'EPA Certified Contractor',
  'BBB Accredited Business A+',
]

const highlights = [
  { icon: BsAwardFill, label: '15 Years', sublabel: 'Industry Experience' },
  { icon: MdElectricalServices, label: '2,400+', sublabel: 'Jobs Completed' },
  { icon: BsLightningChargeFill, label: '100%', sublabel: 'Code Compliant' },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-jet-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-volt-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 section-hidden">
          <span className="w-8 h-px bg-volt-500" />
          <span className="font-mono text-xs text-volt-500 uppercase tracking-widest">About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image side */}
          <div className="relative section-hidden">
            {/* Main image placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-jet-700 to-jet-800 flex items-center justify-center">
                {/* SVG Electrician illustration */}
                <svg viewBox="0 0 400 500" className="w-full h-full opacity-20" fill="none">
                  <rect x="150" y="50" width="100" height="120" rx="50" fill="#FFC107"/>
                  <rect x="120" y="180" width="160" height="200" rx="20" fill="#FFB300"/>
                  <rect x="80" y="190" width="40" height="120" rx="10" fill="#FFB300"/>
                  <rect x="280" y="190" width="40" height="120" rx="10" fill="#FFB300"/>
                  <rect x="130" y="380" width="50" height="100" rx="10" fill="#FF8F00"/>
                  <rect x="220" y="380" width="50" height="100" rx="10" fill="#FF8F00"/>
                  <circle cx="200" cy="110" r="50" fill="#FFE082"/>
                  <rect x="175" y="300" width="50" height="70" rx="5" fill="#FFC107"/>
                  <path d="M195 320 L205 310 L200 330 L210 320" stroke="#1c1c1c" strokeWidth="2" fill="#1c1c1c"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-jet-900/90 via-transparent to-transparent" />
              </div>
              {/* Actual image will show if loaded */}
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80"
                alt="Master Electrician"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jet-900/80 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -right-6 top-8 bg-jet-800 border border-jet-700/50 rounded-xl px-5 py-4 shadow-2xl">
              <div className="font-display text-3xl text-volt-500">15+</div>
              <div className="font-body text-xs text-jet-400">Years of Expertise</div>
            </div>

            <div className="absolute -left-6 bottom-20 bg-volt-500 rounded-xl px-5 py-4 shadow-2xl shadow-volt-500/30">
              <div className="font-display text-3xl text-jet-900">2,400+</div>
              <div className="font-body text-xs text-jet-800 font-medium">Projects Done</div>
            </div>

            {/* Cert badge */}
            <div className="absolute right-4 bottom-4 bg-jet-900/90 backdrop-blur-sm border border-jet-700/50 rounded-xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-volt-500/20 rounded-lg flex items-center justify-center">
                <BsAwardFill className="text-volt-500 text-lg" />
              </div>
              <div>
                <div className="font-body text-xs font-semibold text-white">Master Electrician</div>
                <div className="font-mono text-[10px] text-jet-400">Lic. #ME-2847</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="section-hidden">
            <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight mb-6">
              POWERING YOUR HOME & BUSINESS
              <span className="block text-gradient">SINCE 2009</span>
            </h2>

            <p className="font-body text-jet-300 text-base leading-relaxed mb-6">
              SparkVolt Electric was founded by Marcus Reid, a Master Electrician with over 15 years 
              of hands-on experience. We've built our reputation on doing the job right the first time — 
              safely, efficiently, and always up to code.
            </p>
            <p className="font-body text-jet-400 text-sm leading-relaxed mb-10">
              From single-family homes to large commercial buildings, our team handles every 
              electrical challenge with precision. We believe in transparent pricing, clean workmanship, 
              and treating every property like our own.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-jet-800/50 border border-jet-700/50 rounded-xl p-4 hover:border-volt-500/30 transition-colors duration-300 group"
                >
                  <item.icon className="text-volt-500 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-display text-2xl text-white">{item.label}</div>
                  <div className="font-body text-xs text-jet-400">{item.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-body text-sm font-semibold text-jet-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-volt-500" />
                Certifications & Standards
              </h3>
              <ul className="space-y-2.5">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-jet-300">
                    <BsCheckCircleFill className="text-volt-500 text-sm flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
