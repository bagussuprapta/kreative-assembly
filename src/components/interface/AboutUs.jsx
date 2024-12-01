function AboutUs() {
  return (
    <div className="flex flex-col gap-y-5 pt-8 pb-2 sm:pb-4 md:flex md:flex-row md:gap-x-20 md:py-10 xl:py-24">
      <div className="order-2 mt-4 place-self-center md:w-1/2">
        <img className="rounded-2xl w-full object-cover" src="AboutUs.jpg" alt="" />
      </div>
      <div className="order-1 flex flex-col gap-y-5 md:w-1/2 justify-between">
        <h2 className="text-4xl lg:text-4xl xl:text-5xl xl:leading-tight text-center md:text-left">About US</h2>
        <p className="text-center px-3 text-base md:text-left md:px-0">
          Bug Bug Consulting pioneers eco-conscious, AI-driven solutions for insect monitoring in agriculture. Our cutting-edge tools blend sophisticated artificial intelligence with an organic,
          earth-inspired approach, creating sustainable practices that benefit both crop yields and the environment. With a minimalist, eco-modern design philosophy, our tools are crafted to simplify
          complex challenges, making data accessible, actionable, and aligned with nature’s rhythms.
        </p>
        <div className="flex gap-x-3 place-self-center md:place-self-start">
          <button className="px-5 py-3 text-sm bg-bugbug-600 text-bugbug-50 rounded-lg focus:outline-none lg:px-7 lg:py-4">LEARN MORE ABOUT OUR VISION</button>
        </div>
      </div>
    </div>
  );
}

export { AboutUs };
