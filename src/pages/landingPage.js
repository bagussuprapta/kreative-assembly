import { Navbar } from "../components/interface/Navbar";
import { Hero } from "../components/interface/Hero";
import { AboutUs } from "../components/interface/AboutUs";
import { OurSolution } from "../components/interface/OurSolution";
import { WhyBugBug } from "../components/interface/WhyBugBug";
import { Review } from "../components/interface/Review";
import { InsightsAndInnovations } from "../components/interface/InsightsAndInnovations";
import { GetInTouch } from "../components/interface/GetInTouch";
import { Footer } from "../components/interface/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-y-12">
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
          <Hero />
        </div>
        <div className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24 rounded-3xl">
          <AboutUs />
        </div>
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
          <OurSolution />
        </div>
        <div className="bg-bugbug-150 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
          <WhyBugBug />
        </div>
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
          <Review />
        </div>
        <div className="bg-white px-2 py-11 sm:px-4 md:px-6 lg:px-8 xl:px-24">
          <InsightsAndInnovations />
        </div>
      </div>
      <div className="bg-bugbug-150 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
        <GetInTouch />
      </div>
      <div className="bg-bugbug-600 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
        <Footer />
      </div>
    </div>
  );
}

export { LandingPage };
