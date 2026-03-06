import { useState } from 'react'
import { 
  BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill, 
  BsClockFill, BsLightningChargeFill, BsCheckCircleFill
} from 'react-icons/bs'

const contactInfo = [
  { icon: BsTelephoneFill, label: 'Phone', value: '8856937384', sub: 'Call or text anytime', href: 'tel:+15551234567' },
  { icon: BsEnvelopeFill, label: 'Email', value: 'info@sparkvolt.com', sub: 'We reply within 2 hours', href: 'mailto:info@sparkvolt.com' },
  { icon: BsGeoAltFill, label: 'Service Area', value: 'Greater Metro Area', sub: '50-mile radius', href: null },
  { icon: BsClockFill, label: 'Hours', value: 'Mon–Sat 7am–7pm', sub: 'Emergency: 24/7', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-jet-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-volt-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 section-hidden">
          <span className="w-8 h-px bg-volt-500" />
          <span className="font-mono text-xs text-volt-500 uppercase tracking-widest">Get in Touch</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 section-hidden">
          <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight">
            LET'S TALK ABOUT
            <span className="block text-gradient">YOUR PROJECT</span>
          </h2>
          <p className="font-body text-jet-400 text-sm max-w-sm">
            Free estimates with no obligation. Most jobs quoted same day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 section-hidden">
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-jet-800/50 border border-jet-700/40 hover:border-volt-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-volt-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-volt-500/20 transition-colors">
                    <info.icon className="text-volt-500 text-base" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-jet-500 uppercase tracking-wider mb-0.5">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="font-body text-sm font-semibold text-white hover:text-volt-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-body text-sm font-semibold text-white">{info.value}</div>
                    )}
                    <div className="font-body text-xs text-jet-500">{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-volt-500/15 to-transparent border border-volt-500/30">
              <div className="flex items-center gap-2 mb-3">
                <BsLightningChargeFill className="text-volt-500 animate-pulse-slow" />
                <span className="font-body font-semibold text-white text-sm">Emergency Service</span>
              </div>
              <p className="font-body text-jet-400 text-xs leading-relaxed mb-4">
                Electrical emergency? Don't wait. We have technicians on standby 24 hours a day, 
                365 days a year.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 px-5 py-3 bg-volt-500 text-jet-900 font-body font-bold text-sm rounded-xl hover:bg-volt-400 transition-all duration-300 w-full justify-center"
              >
                <BsTelephoneFill />
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 section-hidden">
            <div className="bg-jet-800/40 border border-jet-700/40 rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4">
                  <div className="w-16 h-16 rounded-full bg-volt-500/20 flex items-center justify-center">
                    <BsCheckCircleFill className="text-volt-500 text-3xl" />
                  </div>
                  <h3 className="font-display text-2xl text-white">Message Sent!</h3>
                  <p className="font-body text-jet-400 text-sm text-center">
                    We'll get back to you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] text-jet-400 uppercase tracking-wider block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-jet-900/80 border border-jet-700/60 rounded-xl text-white text-sm font-body placeholder-jet-600 focus:outline-none focus:border-volt-500/50 focus:ring-1 focus:ring-volt-500/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-jet-400 uppercase tracking-wider block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-jet-900/80 border border-jet-700/60 rounded-xl text-white text-sm font-body placeholder-jet-600 focus:outline-none focus:border-volt-500/50 focus:ring-1 focus:ring-volt-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] text-jet-400 uppercase tracking-wider block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 bg-jet-900/80 border border-jet-700/60 rounded-xl text-white text-sm font-body placeholder-jet-600 focus:outline-none focus:border-volt-500/50 focus:ring-1 focus:ring-volt-500/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-jet-400 uppercase tracking-wider block mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-jet-900/80 border border-jet-700/60 rounded-xl text-sm font-body focus:outline-none focus:border-volt-500/50 focus:ring-1 focus:ring-volt-500/20 transition-all duration-300 appearance-none cursor-pointer"
                        style={{ color: form.service ? '#f5f5f5' : '#636363' }}
                      >
                        <option value="" style={{ background: '#1c1c1c', color: '#888' }}>Select a service</option>
                        <option value="house-wiring" style={{ background: '#1c1c1c', color: '#f5f5f5' }}>House Wiring</option>
                        <option value="repair" style={{ background: '#1c1c1c', color: '#f5f5f5' }}>Electrical Repair</option>
                        <option value="lighting" style={{ background: '#1c1c1c', color: '#f5f5f5' }}>Lighting Installation</option>
                        <option value="panel" style={{ background: '#1c1c1c', color: '#f5f5f5' }}>Panel Upgrade</option>
                        <option value="ev-charger" style={{ background: '#1c1c1c', color: '#f5f5f5' }}>EV Charger</option>
                        <option value="emergency" style={{ background: '#1c1c1c', color: '#f5f5f5' }}>Emergency Service</option>
                        <option value="other" style={{ background: '#1c1c1c', color: '#f5f5f5' }}>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-jet-400 uppercase tracking-wider block mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your electrical project, issue, or question. The more detail you provide, the better we can help..."
                      className="w-full px-4 py-3 bg-jet-900/80 border border-jet-700/60 rounded-xl text-white text-sm font-body placeholder-jet-600 focus:outline-none focus:border-volt-500/50 focus:ring-1 focus:ring-volt-500/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-volt-500 text-jet-900 font-body font-bold text-sm rounded-xl hover:bg-volt-400 transition-all duration-300 shadow-lg shadow-volt-500/20 hover:shadow-volt-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                  >
                    <BsLightningChargeFill className="text-base" />
                    Send Message — Get Free Quote
                  </button>

                  <p className="font-mono text-[10px] text-jet-600 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
