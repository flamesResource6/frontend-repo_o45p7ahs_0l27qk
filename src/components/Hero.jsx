import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Produzioni Video e Animazioni che trasformano le tue idee in movimento
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300"
            >
              Dallo storyboard alla post‑produzione: realizziamo video corporate, spot, motion graphics e 3D per brand che vogliono distinguersi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:gap-3 transition-all">
                Inizia un Progetto
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-all">
                Guarda i lavori
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-slate-300/80">
              <div>
                <div className="text-3xl font-bold text-white">100+ </div>
                <div className="text-sm">Progetti consegnati</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10 anni</div>
                <div className="text-sm">di esperienza</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 shadow-2xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="https://cdn.coverr.co/videos/coverr-micro-soldering-a-circuit-board-8888/1080p.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs text-white/70">Showreel</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
