function Hero() {
  return (
    <div className="mt-32 flex flex-col gap-y-5 sm:flex sm:flex-row">
      <div className=" flex flex-col gap-y-5 justify-between sm:w-2/3 md:w-2/3">
        <p className="text-base text-center text-gray-500 md:text-left md:text-lg xl:text-xl">AI-powered insect monitoring tools</p>
        <h1 className="text-4xl  md:text-5xl lg:text-6xl text-center md:text-left xl:text-7xl">
          Empowering <br /> Sustainable Growth <br /> Through Precision <br /> Insect Monitoring
        </h1>
        <div className="flex gap-x-3 place-self-center md:place-self-start">
          <button className="px-5 py-3 text-sm bg-bugbug-600 text-bugbug-50 rounded-lg focus:outline-none lg:px-7 lg:py-4 xl:px-10 xl:py-5">LEARN MORE</button>
          <button className="px-5 py-3 text-sm border border-bugbug-600 text-bugbug-600 rounded-lg focus:outline-none lg:px-7 lg:py-4 xl:px-10 xl:py-5">GET STARTED</button>
        </div>
      </div>
      <div className="w-full place-self-center sm:w-1/3 md:w-1/3 xl:">
        <img className="rounded-2xl w-full h-64 object-cover object-center sm:h-full" src="Hero.png" alt="" />
      </div>
    </div>
  );
}

export { Hero };
