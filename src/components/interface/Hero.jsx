function Hero() {
  return (
    <div className="mt-32 mb-[1000px] flex flex-col gap-y-5 md:flex md:flex-row ">
      <div className=" flex flex-col gap-y-5 md:w-2/3 justify-between">
        <p className="text-sm text-center text-gray-500 md:text-left">AI-powered insect monitoring tools</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-tight text-center md:text-left">
          Empowering <br /> Sustainable Growth <br /> Through Precision <br /> Insect Monitoring
        </h1>
        <div className="flex gap-x-3 place-self-center md:place-self-start">
          <button className="px-7 py-4 bg-bugbug-600 text-bugbug-50 rounded-lg focus:outline-none">LEARN MORE</button>
          <button className="px-7 py-4 border border-bugbug-600 text-bugbug-600 rounded-lg focus:outline-none">GET STARTED</button>
        </div>
      </div>
      <div className="w-60 place-self-center md:w-1/3 xl:">
        <img className="rounded-3xl w-full" src="Hero.png" alt="" />
      </div>
    </div>
  );
}

export { Hero };
