import { BugBugIcon } from "../icons/BugBugIcon";

function Footer() {
  return (
    <div className="text-white py-8 px-3">
      <div className="flex flex-col pt-3 pb-7 gap-y-6 border-bugbug-150 border-b-2 lg:flex-row lg:gap-x-10">
        <div className="flex flex-col gap-y-6 lg:w-1/3">
          <BugBugIcon />
          <p>At Bug Bug Consulting, we’re shaping the future of sustainable agriculture with AI-powered tools that bring balance between innovation and nature.</p>
        </div>
        <div className="flex flex-col gap-y-6 sm:flex sm:flex-row sm:gap-x-4 sm:justify-between lg:w-2/3 lg:gap-x-20">
          <div className="sm:w-1/3">
            <p className="text-bugbug-150 border-bugbug-150 border-b-2 py-3 text-lg">Our Solutions</p>
            <div className="flex flex-col gap-y-4 mt-5">
              <a href="#">SOLUTION 1</a>
              <a href="#">SOLUTION 2</a>
              <a href="#">SOLUTION 3</a>
            </div>
          </div>
          <div className="sm:w-2/3">
            <p className="text-bugbug-150 border-bugbug-150 border-b-2 py-3 text-lg">Contact Us</p>
            <div className="flex flex-col gap-y-4 mt-5">
              <p>456 Innovation Drive, Suite 300, San Francisco, CA 94105</p>
              <p>HELLO@BUGBUG.COM</p>
              <p>+1 234 567 8901</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 mt-5 text-xs md:flex-row md:justify-between">
        <p className="flex gap-2">
          <a href="">TERMS OF SERVICE</a> <span className="text-bugbug-150">●</span>
          <a href="">PRIVACY POLICY</a> <span className="text-bugbug-150">●</span>
          <a href="">SITEMAP</a>
        </p>
        <p className="flex gap-2">
          <a href="">LINKEDIN</a> <span className="text-bugbug-150">●</span>
          <a href="">INSTAGRAM</a> <span className="text-bugbug-150">●</span>
          <a href="">FACEBOOK</a>
        </p>
      </div>
    </div>
  );
}

export { Footer };
