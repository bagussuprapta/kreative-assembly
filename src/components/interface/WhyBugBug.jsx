function WhyBugBug() {
  return (
    <div className="flex flex-col py-8 gap-y-5 md:flex md:flex-row md:gap-x-20 md:py-20 lg:py-32">
      <div className="w-full place-self-center md:w-1/2">
        <img className="rounded-3xl w-full h-64 object-cover md:h-96" src="Bee.jpg" alt="" />
      </div>
      <div className=" flex flex-col gap-y-5 md:w-1/2 justify-between">
        <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight text-center md:text-left">Why Choose Bug Bug?</h2>
        <p className="text-center px-3 md:px-0 md:text-left">
          At Bug Bug, we prioritize sustainable growth. By merging AI with a respect for natural ecosystems, we provide solutions that enhance agricultural productivity without compromising the
          earth’s resources. Our commitment to environmental stewardship ensures that every Bug Bug tool not only meets today’s needs but also adapts to tomorrow’s challenges.
        </p>
        <div className="flex gap-x-3 place-self-center md:place-self-start">
          <button className="px-5 py-3 text-sm bg-bugbug-600 text-bugbug-150 rounded-lg focus:outline-none lg:px-7 lg:py-4">LEARN HOW WE MAKE A DIFFERENCE</button>
        </div>
      </div>
    </div>
  );
}

export { WhyBugBug };
