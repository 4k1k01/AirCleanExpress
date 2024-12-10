const Contact = () => (
  <section id="kontakt" className='w-full max-container'>
    <h2 className='font-palanquin text-4xl font-bold text-center'>
      Kontaktujte nás pomocí...
    </h2>
    <div className="flex justify-center items-center">
      <p className='mt-5 text-lg font-semibold font-montserrat leading-10'>
      E-mailu: <a className="text-coral-red font-medium" href="mailto:michal.tuma@aircleanexpress.cz">michal.tuma@aircleanexpress.cz</a>
      <br />
      Tel.: <a className="text-coral-red font-medium" href="tel:+420773713675">+420 773 713 675</a>
      <br />
      PO-PÁ 9:00–18:00 
      </p>
    </div>
  </section>
);

export default Contact;