const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4 ">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-2xl flex flex-col p-4 my-2 rounded-md hover:scale-105 duration-150">
          <img
            src="./man1.png"
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl text-center font-bold py-3">Single User</h2>
          <p className="text-4xl text-center font-bold">129$</p>
          <div className="text-center text-[#00df9a] py-2 font-medium">
            <p className="py-2  mx-8">500GB Storage</p>
            <p className="py-2  mx-8">1 Gramted user</p>
            <p className="py-2  mx-8">Send up to 2GB</p>
          </div>
          <button className="transition w-fit px-3 py-2 font-medium text-white rounded-md ease-in-out delay-150 mx-auto bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-2xl flex flex-col p-4 my-2 rounded-md hover:scale-105 duration-150">
          <img
            src="./man2.png"
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl text-center font-bold py-3">Partner User</h2>
          <p className="text-4xl text-center font-bold">449$</p>
          <div className="text-center text-[#00df9a] py-2 font-medium">
            <p className="py-2  mx-8">2TB Storage</p>
            <p className="py-2  mx-8">10 Gramted user</p>
            <p className="py-2  mx-8">Send up to 6GB</p>
          </div>
          <button className="transition w-fit px-3 py-2 font-medium rounded-md text-white ease-in-out delay-150 mx-auto bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-2xl flex flex-col p-4 my-2 rounded-md hover:scale-105 duration-150">
          <img
            src="./man3.png"
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl text-center font-bold py-3">Team User</h2>
          <p className="text-4xl text-center font-bold">799$</p>
          <div className="text-center text-[#00df9a] py-2 font-medium">
            <p className="py-2  mx-8">5TB Storage</p>
            <p className="py-2  mx-8">10 Gramted user</p>
            <p className="py-2  mx-8">Send up to 10GB</p>
          </div>
          <button className="transition w-fit  font-medium text-white px-3 py-2 rounded-md ease-in-out delay-150 mx-auto bg-pink-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
