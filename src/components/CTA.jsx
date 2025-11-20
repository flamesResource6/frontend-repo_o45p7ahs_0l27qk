import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Parliamo del tuo progetto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 text-slate-300 max-w-2xl"
          >
            Scrivici due righe su obiettivi, target e tempistiche. Ti risponderemo entro 24 ore con un piano e un preventivo.
          </motion.p>

          <form className="mt-8 grid sm:grid-cols-2 gap-4">
            <input required placeholder="Nome" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <input placeholder="Azienda" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-2" />
            <textarea required rows="4" placeholder="Raccontaci il tuo progetto" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-2" />
            <button type="submit" className="sm:col-span-2 inline-flex justify-center rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 hover:shadow-lg hover:shadow-white/10 transition-all">
              Invia richiesta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
