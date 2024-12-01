function OurSolution() {
  return (
    <div className="flex flex-col gap-y-5 md:flex md:flex-row md:gap-x-10 md:py-10">
      <div className=" flex flex-col gap-y-5 justify-center md:w-1/3 lg:w-1/2">
        <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight text-center md:text-left">Our Solutions</h2>
        <p className="text-center px-3 md:px-0 md:text-left">
          Bringing precision, simplicity, and sustainability to pest management with advanced AI and eco-friendly design principles for a healthier planet and productive crops.
        </p>
        <div className="flex gap-x-3 place-self-center md:place-self-start">
          <button className="px-5 py-3 text-sm bg-bugbug-600 text-bugbug-50 rounded-lg focus:outline-none">DISCOVER OUR SOLUTIONS</button>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 md:gap-y-4 md:w-2/3 lg:w-1/2">
        <div className="px-5 h-48 flex flex-col justify-center bg-white rounded-xl sm:h-40">
          <p className="text-2xl">AI-driven Monitoring</p>
          <p className="mt-2">Our AI tools deliver real-time, data-driven insights to track and manage insect activity with unparalleled accuracy, helping farmers make informed, timely decisions.</p>
        </div>
        <div className="px-5 h-48 flex flex-col justify-center bg-white rounded-xl sm:h-40">
          <p className="text-2xl">Eco-modern Design</p>
          <p className="mt-2">Seamlessly integrating technology with natural elements, our tools respect both the environment and the farming process, maintaining a low ecological footprint.</p>
        </div>
        <div className="px-5 h-48 flex flex-col justify-center bg-white rounded-xl sm:h-40">
          <p className="text-2xl">Future-ready Agriculture</p>
          <p className="mt-2">Built for long-term innovation, Bug Bug tools evolve with agricultural trends, ensuring our clients stay ahead in sustainable pest management.</p>
        </div>
      </div>
    </div>
  );
}

export { OurSolution };
