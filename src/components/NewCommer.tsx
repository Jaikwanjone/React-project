const NewCommer = () => {
  return (
    <div className="w-full text-white">
      <div className=" max-w-[1240] py-16 px-14 md:grid md:grid-cols-2 flex flex-col ">
        <div className="py-4">
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold text-[#00df9a]">
            Want tips && tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter & stay up to date</p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center my-3">
            <input
              type="text"
              placeholder="Enter your Email"
              className=" rounded-md w-full h-[40px] text-xl py-4 px-2 text-black outline-blue-600"
            />
            <button className="transition w-[50%] py-3 md:mt-0 mt-3 px-2 ml-3 rounded-md ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150">
              Notice me
            </button>
          </div>
          <div className="flex ">
            <p>We care about the protection of your data. Read our</p>

            <a href="https://google.com" className="text-[#00df9a] underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCommer;
