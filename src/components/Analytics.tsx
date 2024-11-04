const Analytics = () => {
  return (
    <div className="w-full bg-white py-3 px-2">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className=" w-[500px] mx-auto my-4" src="./pgm.avif" />
        <div className="flex flex-col justify-center">
          <p className=" uppercase font-bold text-[#00df9a]">
            Data Analysis Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-xl my-4 font-bold text-purple-400">
            Manage Data anaytics Centrally
          </h1>
          <p className="text-xl text-green-500 ">
            How do you think about this app
          </p>
          <button className="before:ease relative h-12 w-40 overflow-hidden border rounded-xl mt-2 mx-auto border-none bg-purple-400 text-white font-bold shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
            <span className="relative z-10">Learn More..</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
