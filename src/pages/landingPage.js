import { Navbar } from "../components/interface/Navbar";
import { Hero } from "../components/interface/Hero";
import { AboutUs } from "../components/interface/AboutUs";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
        <Hero />
      </div>
      <div className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24 rounded-3xl">
        <AboutUs />
      </div>
    </div>
  );
}

export { LandingPage };
