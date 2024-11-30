import { Navbar } from "../components/interface/Navbar";
import { Hero } from '../components/interface/Hero';

function LandingPage() {
  return (
    <div className='px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24'>
      <Navbar />
      <Hero />
    </div>
  );
}

export { LandingPage };
