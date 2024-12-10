import { reasons } from "../constants";
import ServiceCard from "../components/ServiceCard.jsx";

const Whyclean = () => (
  <section className="max-container">
      <h2 className='text-center font-palanquin text-4xl font-bold'>
        Proč se věnovat <span className='text-coral-red'>čištění potrubí</span>? 
      </h2>
      <div className="mt-5 flex justify-center flex-wrap gap-9">
        {reasons.map((reason) => (
          <ServiceCard key={reason.label} {...reason} />
        ))}
      </div>
    </section>
);

export default Whyclean;