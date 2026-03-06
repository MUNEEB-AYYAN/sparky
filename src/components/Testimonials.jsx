import { useState } from 'react'
import { BsStarFill, BsChevronLeft, BsChevronRight, BsLightningChargeFill } from 'react-icons/bs'

const testimonials = [
  {
    name: 'Sarah & James Mitchell',
    role: 'Homeowners, Oakwood',
    rating: 5,
    text: 'Marcus and his team rewired our entire 1970s home in just 4 days. The work was incredibly clean, and they patched every hole they made. We had our final inspection pass on the first try — no issues whatsoever.',
    project: 'Full Home Rewire',
    initials: 'SJ',
    color: 'bg-blue-500',
  },
  {
    name: 'Derek Thornton',
    role: 'Property Manager, Northside',
    rating: 5,
    text: 'I manage 12 commercial properties and SparkVolt is the only electrical contractor I call. Fast response, competitive pricing, and they always leave the site cleaner than they found it. Highly recommend.',
    project: 'Commercial Maintenance Contract',
    initials: 'DT',
    color: 'bg-purple-500',
  },
  {
    name: 'Linda & Robert Chen',
    role: 'Restaurant Owners',
    rating: 5,
    text: 'Our panel caught fire on a Friday night. SparkVolt had emergency service there within an hour and got us back operational by Monday morning. Literally saved our business. Cannot thank them enough.',
    project: 'Emergency Panel Replacement',
    initials: 'LC',
    color: 'bg-red-500',
  },
  {
    name: 'Tom Vasquez',
    role: 'General Contractor',
    rating: 5,
    text: 'As a GC, I have high standards for subs. SparkVolt consistently delivers — they show up on time, work clean, coordinate well with other trades, and their paperwork and documentation is always spot on.',
    project: 'New Construction — 8 Units',
    initials: 'TV',
    color: 'bg-green-500',
  },
  {
    name: 'Michelle Park',
    role: 'EV Owner, Westfield',
    rating: 5,
    text: 'Had them install a Level 2 charger for my Tesla. They ran a dedicated 240V circuit through my finished basement without damaging anything. Clean work, great price, done in half a day.',
    project: 'EV Charger Installation',
    initials: 'MP',
    color: 'bg-cyan-500',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <BsStarFill
          key={i}
          className={`text-xs ${i < rating ? 'text-volt-500' : 'text-jet-600'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const visible = 3

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(testimonials.length - visible, c + 1))

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-jet-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-volt-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 section-hidden">
          <span className="w-8 h-px bg-volt-500" />
          <span className="font-mono text-xs text-volt-500 uppercase tracking-widest">Reviews</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 section-hidden">
          <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight">
            WHAT CLIENTS
            <span className="block text-gradient">ARE SAYING</span>
          </h2>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="font-display text-4xl text-volt-500">4.9</div>
              <div className="flex gap-0.5 justify-end mt-1">
                {[...Array(5)].map((_, i) => <BsStarFill key={i} className="text-volt-500 text-xs" />)}
              </div>
              <div className="font-mono text-[10px] text-jet-400 mt-1">Based on 200+ reviews</div>
            </div>
            {/* Nav buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-10 h-10 rounded-xl border border-jet-700 flex items-center justify-center text-jet-300 hover:text-white hover:border-volt-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              >
                <BsChevronLeft />
              </button>
              <button
                onClick={next}
                disabled={current >= testimonials.length - visible}
                className="w-10 h-10 rounded-xl border border-jet-700 flex items-center justify-center text-jet-300 hover:text-white hover:border-volt-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials slider */}
        <div className="overflow-hidden">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pr-4"
              >
                <div className="h-full bg-jet-800/50 border border-jet-700/40 rounded-2xl p-6 hover:border-jet-600 transition-all duration-300 card-glow group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center text-white font-body font-bold text-sm`}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-body font-semibold text-white text-sm">{t.name}</div>
                        <div className="font-mono text-[10px] text-jet-500">{t.role}</div>
                      </div>
                    </div>
                    <BsLightningChargeFill className="text-volt-500/30 text-sm" />
                  </div>

                  <StarRating rating={t.rating} />

                  <p className="font-body text-jet-300 text-sm leading-relaxed mt-4 mb-5">
                    "{t.text}"
                  </p>

                  <div className="pt-4 border-t border-jet-700/50">
                    <span className="font-mono text-[10px] text-volt-500/70">Project: </span>
                    <span className="font-mono text-[10px] text-jet-400">{t.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: testimonials.length - visible + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-volt-500'
                  : 'w-2 h-2 bg-jet-700 hover:bg-jet-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
