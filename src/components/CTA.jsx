import { BsLightningChargeFill, BsArrowRight, BsTelephoneFill } from 'react-icons/bs'

export default function CTA() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-hidden">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-volt-600 via-volt-500 to-volt-400 p-12 lg:p-20">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-jet-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Lightning icons decorative */}
          <BsLightningChargeFill className="absolute top-8 right-12 text-white/10 text-8xl" />
          <BsLightningChargeFill className="absolute bottom-8 left-12 text-white/10 text-6xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jet-900/20 backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider">24/7 Emergency Available</span>
              </div>
              <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl text-jet-900 leading-none mb-4">
                NEED ELECTRICAL REPAIR
                <span className="block text-white">OR INSTALLATION?</span>
              </h2>
              <p className="font-body text-jet-800/80 text-base">
                Don't let electrical issues wait. Our licensed team responds fast, 
                prices fairly, and gets the job done right.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 min-w-fit">
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center gap-3 px-8 py-4 bg-jet-900 text-white font-body font-bold text-sm rounded-xl hover:bg-jet-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span>Request Service</span>
                <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="tel:+15551234567"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-jet-900 font-body font-semibold text-sm rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:-translate-y-1"
              >
                <BsTelephoneFill />
                <span>8856937384</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
