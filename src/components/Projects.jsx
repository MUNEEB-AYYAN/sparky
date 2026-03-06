import { BsArrowRight, BsLightningChargeFill } from 'react-icons/bs'

const projects = [
  {
    title: 'Full Home Rewire',
    category: 'Residential',
    location: 'Oakwood Estate',
    desc: '3,200 sq ft home complete rewiring — panel upgrade and smart home integration.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: 'from-amber-500/40',
  },
  {
    title: 'Commercial Panel Upgrade',
    category: 'Commercial',
    location: 'Downtown Office Complex',
    desc: '400A three-phase service upgrade for a 12,000 sq ft office building.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
    color: 'from-blue-500/40',
  },
  {
    title: 'Luxury Lighting Design',
    category: 'Lighting',
    location: 'Riverside Residence',
    desc: 'Full smart lighting system with scene control and landscape integration.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
    color: 'from-purple-500/40',
  },
  {
    title: 'Warehouse Electrical',
    category: 'Industrial',
    location: 'Northside Industrial Park',
    desc: 'Complete electrical fit-out for 45,000 sq ft distribution warehouse.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    color: 'from-green-500/40',
  },
  {
    title: 'Solar Integration',
    category: 'Renewable',
    location: 'Hillcrest Neighborhood',
    desc: '20kW solar array with battery backup and smart grid integration.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    color: 'from-yellow-500/40',
  },
  {
    title: 'EV Charging Network',
    category: 'EV Infrastructure',
    location: 'Westfield Shopping Center',
    desc: '24-station Level 2 EV charging network installation with smart metering.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
    color: 'from-cyan-500/40',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-jet-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-volt-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 section-hidden">
          <span className="w-8 h-px bg-volt-500" />
          <span className="font-mono text-xs text-volt-500 uppercase tracking-widest">Our Work</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 section-hidden">
          <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight">
            FEATURED
            <span className="block text-gradient">PROJECTS</span>
          </h2>
          <button className="flex items-center gap-2 font-body text-sm text-volt-500 hover:text-volt-400 transition-colors group">
            View all projects
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="section-hidden group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-jet-700 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                {/* Dark gradient always */}
                <div className="absolute inset-0 bg-gradient-to-t from-jet-900 via-jet-900/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] px-3 py-1.5 bg-jet-900/80 backdrop-blur-sm text-volt-400 rounded-full border border-volt-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-volt-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <BsArrowRight className="text-jet-900 text-sm" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <BsLightningChargeFill className="text-volt-500 text-xs" />
                  <span className="font-mono text-[10px] text-jet-400">{project.location}</span>
                </div>
                <h3 className="font-body font-semibold text-white text-base group-hover:text-volt-50 transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-jet-400 mt-1 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
