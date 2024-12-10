const Nav = () => (
  <header className="padding-x py-8 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container">
      <a href="/">
       <h1 className="text-3xl font-semibold text-coral-red font-montserrat">AirCleanE<span className="font-black font-serif">⤯</span>press</h1>
      </a>
      <ul className="flex justify-center flex-col max-md:hidden">
        <li className="text-lg text-slate-gray font-montserrat leading-normal">
        E-mail: <a className="text-coral-red font-medium" href="mailto:michal.tuma@aircleanexpress.cz">michal.tuma@aircleanexpress.cz</a>
        </li>
        <li className="text-lg text-slate-gray font-montserrat leading-normal">
        Tel.: <a className="text-coral-red font-medium" href="tel:+420773713675">+420 773 713 675</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;