const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] flex flex-col justify-center mx-auto mt-[-96px] w-full h-screen text-center items-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANAYLSIS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:my-6">
          Grow with data
        </h1>
        <div>
          <p className="md:text-4xl sm:text-2xl text-xl font-bold">
            Fast,Faxible financing for BTB
          </p>
          <p className="md:text-2xl text-xl font-bold text-gray-600">
            Monitor your data analysis to incrase revenue for BTB, BTC && SASS
            platforms
          </p>
          <button className="relative flex h-[50px] w-40 mx-auto my-3 rounded-md items-center justify-center overflow-hidden bg-[#00df9a] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-purple-700 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
