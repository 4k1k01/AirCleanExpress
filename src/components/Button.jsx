const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red transition-all duration-300 hover:scale-105" onClick={() => (window.location.href = '/#kontakt')}>
      <span className="group-hover:bg-">{label}</span>
      <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt={label}/>
    </button>
  )
}

export default Button;