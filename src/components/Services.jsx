import { 
  MdOutlineElectricalServices, MdOutlineLightbulb, MdOutlineElectricMeter,
  MdOutlineWarning, MdOutlineHomeRepairService, MdOutlineSettingsInputComponent
} from 'react-icons/md'
import { BsLightningChargeFill, BsArrowRight } from 'react-icons/bs'
import { FaFan } from 'react-icons/fa'
import { RiSwitchLine } from 'react-icons/ri'

const services = [
  {
    icon: MdOutlineHomeRepairService,
    title: 'House Wiring',
    desc: 'Complete residential wiring for new constructions and full rewiring of existing homes to modern code standards.',
    tag: 'Residential',
  },
  {
    icon: MdOutlineElectricalServices,
    title: 'Electrical Repair',
    desc: 'Fast diagnosis and repair of faulty wiring, outlets, switches, and all electrical system components.',
    tag: 'Repair',
  },
  {
    icon: MdOutlineLightbulb,
    title: 'Lighting Installation',
    desc: 'Indoor and outdoor lighting solutions — recessed, track, landscape, and smart lighting systems.',
    tag: 'Installation',
  },
  {
    icon: FaFan,
    title: 'Ceiling Fan Install',
    desc: 'Safe and proper installation of ceiling fans including new wiring runs and switch upgrades.',
    tag: 'Installation',
  },
  {
    icon: RiSwitchLine,
    title: 'Circuit Breaker Repair',
    desc: 'Tripped breaker diagnosis, breaker replacement, and load balancing for overloaded circuits.',
    tag: 'Repair',
  },
  {
    icon: MdOutlineElectricMeter,
    title: 'Panel Upgrade',
    desc: 'Upgrade your electrical panel from 100A to 200A or 400A service for modern power demands.',
    tag: 'Upgrade',
  },
  {
    icon: MdOutlineWarning,
    title: 'Emergency Services',
    desc: '24/7 emergency response for power outages, sparking outlets, burning smells, and electrical hazards.',
    tag: '24/7',
    featured: true,
  },
  {
    icon: MdOutlineSettingsInputComponent,
    title: 'EV Charger Install',
    desc: 'Level 2 home EV charger installation with dedicated 240V circuit and smart charging features.',
    tag: 'New Service',
  },
]

const tagColors = {
  'Residential': 'bg-blue-500/10 text-blue-400',
  'Repair': 'bg-orange-500/10 text-orange-400',
  'Installation': 'bg-green-500/10 text-green-400',
  'Upgrade': 'bg-purple-500/10 text-purple-400',
  '24/7': 'bg-volt-500/20 text-volt-400',
  'New Service': 'bg-cyan-500/10 text-cyan-400',
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-jet-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 section-hidden">
          <span className="w-8 h-px bg-volt-500" />
          <span className="font-mono text-xs text-volt-500 uppercase tracking-widest">What We Do</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 section-hidden">
          <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight">
            ELECTRICAL SERVICES
            <span className="block text-gradient">DONE RIGHT</span>
          </h2>
          <p className="font-body text-jet-400 text-sm max-w-sm leading-relaxed">
            Every service comes with our quality guarantee — licensed work, clean cleanup, and 
            a written warranty.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`section-hidden group relative rounded-2xl p-6 border transition-all duration-500 cursor-pointer card-glow ${
                service.featured
                  ? 'bg-gradient-to-br from-volt-500/15 to-volt-600/5 border-volt-500/40 hover:border-volt-500/70'
                  : 'bg-jet-800/50 border-jet-700/40 hover:border-jet-600/60 hover:bg-jet-700/50'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.featured 
                  ? 'bg-gradient-to-br from-volt-500/10 to-transparent' 
                  : 'bg-gradient-to-br from-volt-500/5 to-transparent'
              }`} />

              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full ${tagColors[service.tag] || 'bg-jet-700 text-jet-400'}`}>
                  {service.tag}
                </span>
                {service.featured && (
                  <BsLightningChargeFill className="text-volt-500 text-sm animate-pulse-slow" />
                )}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                service.featured
                  ? 'bg-volt-500/20 text-volt-400'
                  : 'bg-jet-700/80 text-jet-300 group-hover:bg-volt-500/15 group-hover:text-volt-400'
              }`}>
                <service.icon className="text-2xl" />
              </div>

              {/* Content */}
              <h3 className="font-body font-semibold text-white text-base mb-2 group-hover:text-volt-50 transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-jet-400 text-xs leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 font-body text-xs font-medium text-jet-500 group-hover:text-volt-500 transition-colors duration-300">
                <span>Learn more</span>
                <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
