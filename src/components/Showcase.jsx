import { motion } from 'framer-motion'

const reels = [
  {
    title: 'Brand Reel',
    src: 'https://cdn.coverr.co/videos/coverr-nightlife-1111/1080p.mp4'
  },
  {
    title: 'Product Reel',
    src: 'https://cdn.coverr.co/videos/coverr-coffee-machine-working-1985/1080p.mp4'
  },
  {
    title: 'Event Reel',
    src: 'https://cdn.coverr.co/videos/coverr-nyc-skyline-7926/1080p.mp4'
  }
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
          <p className="mt-3 text-slate-300">Una selezione di progetti e showreel.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {reels.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
            >
              <video autoPlay muted loop playsInline className="w-full h-60 object-cover">
                <source src={r.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm font-medium text-white/90">{r.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
