import Nav from './components/Nav.jsx'
import Hero from './sections/Hero.jsx'
import Whyclean from './sections/Whyclean.jsx';
import Whyus from './sections/Whyus.jsx';
import Price from './sections/Price.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx'

const App = () => (
  <main className="relative">
    <Nav />
    <section id="home" className="xl:padding-1">
      <Hero />
    </section>
    <section className='padding bg-primary'>
      <Whyclean />
    </section>
    <section className='padding'>
      <Whyus />
    </section>
    {/*<Comparison />*/}
    <section className='padding bg-primary'>
      <Price />
    </section>
    {/*<References />*/}
    <section className='padding'>
      <Contact />
    </section>
    <Footer />
  </main>
);

export default App;
