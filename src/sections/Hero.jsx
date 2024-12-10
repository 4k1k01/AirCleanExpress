import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import panelak from '../assets/images/panelak0.png'
import Button from '../components/Button.jsx'

const Hero = () => (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <div className='xl:whitespace-nowrap relative z-10 pr-10'>
          Čistíme <span className="text-coral-red inline-block mt-3">vzduch</span>
          <br />
          který dýcháte!</div>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Zbavte se bakterií, mastnoty a plísní v panelových domech. Dýchajte zdravě!</p>
        <Button label="Kontaktovat" iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-warp w-20 mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 top-5 left-32 max-lg:hidden'>
        <img
          src={panelak}
          alt='panelový dům/panelák'
          width={450}
          height={502}
          className='object-contain relative z-10'
        />
      </div>
    </section>
);

export default Hero;