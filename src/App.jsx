import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(15,23,42,1),rgba(2,6,23,1))]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Showcase />
        <CTA />
        <footer className="py-10 border-t border-white/10 text-center text-slate-400">
          © {new Date().getFullYear()} Frame Factory House — P.IVA 000000000
        </footer>
      </main>
    </div>
  )
}

export default App
