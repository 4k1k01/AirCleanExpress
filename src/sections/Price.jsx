import { services } from "../constants";
import PriceCard  from "../components/PriceCard.jsx";

const Price = () => (
  <section className="max-container">
      <h2 className='text-center font-palanquin text-4xl font-bold'>
        Ceník 
      </h2>
      <div className="mt-5 flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <PriceCard  key={service.label} {...service} />
        ))}
      </div>
  </section>
);

export default Price;