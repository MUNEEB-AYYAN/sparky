import { useEffect, useRef, useState } from 'react'
import { 
  MdOutlineHomeWork, MdOutlineBusiness, MdOutlineSearch, 
  MdOutlineLightbulb, MdOutlineSecurity, MdOutlineElectricCar,
  MdOutlineSettings, MdOutlineElectricalServices
} from 'react-icons/md'

const skills = [
  { label: 'Residential Electrical', value: 98, icon: MdOutlineHomeWork },
  { label: 'Commercial Systems', value: 92, icon: MdOutlineBusiness },
  { label: 'Circuit Troubleshooting', value: 96, icon: MdOutlineSearch },
  { label: 'Lighting Design & Install', value: 94, icon: MdOutlineLightbulb },
  { label: 'Electrical Safety Inspection', value: 97, icon: MdOutlineSecurity },
  { label: 'EV Charging Infrastructure', value: 88, icon: MdOutlineElectricCar },
]

const tools = [
  { label: 'Thermal Imaging', icon: MdOutlineSearch },
  { label: 'Panel Analysis', icon: MdOutlineElectricalServices },
  { label: 'Load Calculation', icon: MdOutlineSettings },
  { label: 'Code Compliance', icon: MdOutlineSecurity },
  { label: 'Smart Home Wiring', icon: MdOutlineHomeWork },
  { label: 'Commercial 3-Phase', icon: MdOutlineBusiness },
  { label: 'Solar Integration', icon: MdOutlineLightbulb },
  { label: 'Emergency Response', icon: MdOutlineElectricCar },
]

function SkillBar({ skill, animate }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="text-volt-500 text-base" />
          <span className="font-body text-sm text-jet-200">{skill.label}</span>
        </div>
        <span className="font-mono text-sm text-volt-500">{skill.value}%</span>
      </div>
      <div className="h-1.5 bg-jet-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-volt-600 to-volt-400 rounded-full progress-bar relative"
          style={{ width: animate ? `${skill.value}%` : '0%' }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-volt-400 rounded-full shadow-lg shadow-volt-500/50" />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), 300)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 lg:py-32 bg-jet-800/40 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-volt-500/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 section-hidden">
          <span className="w-8 h-px bg-volt-500" />
          <span className="font-mono text-xs text-volt-500 uppercase tracking-widest">Expertise</span>
        </div>

        <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight mb-16 section-hidden">
          SKILLS &
          <span className="block text-gradient">CAPABILITIES</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Progress bars */}
          <div className="section-hidden">
            <h3 className="font-body font-semibold text-jet-300 text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-volt-500" />
              Core Competencies
            </h3>
            {skills.map((skill, i) => (
              <SkillBar key={i} skill={skill} animate={animate} />
            ))}
          </div>

          {/* Right: Icon grid + narrative */}
          <div className="section-hidden">
            <h3 className="font-body font-semibold text-jet-300 text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-volt-500" />
              Specialized Tools & Services
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-jet-800/60 border border-jet-700/40 hover:border-volt-500/30 hover:bg-jet-700/50 transition-all duration-300 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-volt-500/10 flex items-center justify-center group-hover:bg-volt-500/20 transition-colors">
                    <tool.icon className="text-volt-500 text-base" />
                  </div>
                  <span className="font-body text-xs text-jet-300 group-hover:text-white transition-colors">{tool.label}</span>
                </div>
              ))}
            </div>

            {/* Quote / philosophy */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-volt-500/10 to-transparent border border-volt-500/20">
              <div className="absolute top-4 left-5 font-display text-6xl text-volt-500/20 leading-none">"</div>
              <p className="font-body text-jet-300 text-sm leading-relaxed pt-6 italic">
                We don't just meet code — we exceed it. Every wire, every connection, 
                every panel we touch is done with the care and precision that protects 
                your family and your investment.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-volt-500/20 flex items-center justify-center">
                  <MdOutlineElectricalServices className="text-volt-500" />
                </div>
                <div>
                  <div className="font-body text-xs font-semibold text-white">Marcus Reid</div>
                  <div className="font-mono text-[10px] text-jet-500">Master Electrician, Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
