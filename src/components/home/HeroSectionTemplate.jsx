const HeroSectionTemplate = ({
  title,
  description,
  buttonTitle,
  handleButtonClick,
}) => {
  return (
    <section className=" w-400px mt-10 bg-white h-full flex flex-col items-center text-center justify-between py-7 pb-0 rounded-xl">
      <span className=" text-3xl font-semibold text-[#162425]">{title}</span>
      <span className="text-[#575757} px-10 my-5">{description}</span>
      <button
        onClick={handleButtonClick}
        className=" bg-[#162425] text-white w-full h-16 font-bold hover:text-gray-200"
      >
        {buttonTitle}
      </button>
    </section>
  );
};

export default HeroSectionTemplate;
