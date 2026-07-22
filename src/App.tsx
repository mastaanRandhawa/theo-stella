import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Offers } from './components/Offers'
import { Visit } from './components/Visit'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Faq />
        <Offers />
        <Visit />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
