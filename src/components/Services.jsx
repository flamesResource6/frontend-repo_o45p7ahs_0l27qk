import { motion } from 'framer-motion'
import { Film, Camera, Brush, Layers } from 'lucide-react'

const items = [
  { icon: Film, title: 'Produzione Video', desc: 'Riprese, regia, illuminazione e post‑produzione per spot, eventi e corporate.' },
  { icon: Camera, title: 'Motion Graphics', desc: 'Animazioni 2D/3D, infografiche e titolazioni dinamiche per racconti coinvolgenti.' },
  { icon: Layers, title: '3D & VFX', desc: 'Modeling, rendering, compositing e simulazioni per risultati spettacolari.' },
  { icon: Brush, title: 'Design & Storytelling', desc: 'Concept, storyboard e art direction per contenuti coerenti e memorabili.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Servizi</h2>
          <p className="mt-3 text-slate-300">Un team completo per ogni fase di produzione.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-cyan-400/10 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <it.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
