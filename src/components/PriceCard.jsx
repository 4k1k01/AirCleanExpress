const PriceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <h3 className='font-palanquin text-3xl leading-normal font-bold text-center'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center'>
        {subtext}
      </p>
    </div>
  );
};

export default PriceCard;