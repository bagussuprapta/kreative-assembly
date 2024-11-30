function AboutUs() {
  return (
    <div className="mt-14 flex flex-col gap-y-5 py-12 md:flex md:flex-row md:gap-x-20 md:py-28">
      <div className="w-60 place-self-center md:w-1/2 xl:">
        <img className="rounded-3xl w-full" src="AboutUs.jpg" alt="" />
      </div>
      <div className=" flex flex-col gap-y-5 md:w-1/2 justify-between">
        <h2 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight text-center md:text-left">About US</h2>
        <p className="text-center text-lg md:text-left">
          Bug Bug Consulting pioneers eco-conscious, AI-driven solutions for insect monitoring in agriculture. Our cutting-edge tools blend sophisticated artificial intelligence with an organic,
          earth-inspired approach, creating sustainable practices that benefit both crop yields and the environment. With a minimalist, eco-modern design philosophy, our tools are crafted to simplify
          complex challenges, making data accessible, actionable, and aligned with nature’s rhythms.
        </p>
        <div className="flex gap-x-3 place-self-center md:place-self-start">
          <button className="px-7 py-4 bg-bugbug-600 text-bugbug-50 rounded-lg focus:outline-none">Learn More About Our Vision</button>
        </div>
      </div>
    </div>
  );
}

export { AboutUs };
