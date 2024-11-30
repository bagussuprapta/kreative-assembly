import React, { useState, useEffect } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import { BugBugIcon } from "../icons/BugBugIcon";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { HamburgerIcon } from "../icons/HamburgerIcon";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setShowNavbar(true);
        }, 2000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header
      className={`bg-bugbug-600 fixed left-2 right-2 top-2 sm:left-4 sm:right-4 sm:top-4 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:left-24 xl:right-24 px-6 rounded-[16px] transition-all duration-500 z-50 ease-in-out ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-300px opacity-0"
      }`}
    >
      <nav>
        <ul className="flex flex-wrap justify-between items-center relative py-[20px] px-5">
          <button>
            <BugBugIcon />
          </button>
          <span className="items-center text-sm font-light text-bugbug-50 menu flex [&>li]:pl-7">
            <li>
              <button>ABOUT US</button>
            </li>
            <li>
              <Popover>
                <PopoverButton className={"focus:outline-none"}>
                  <button href="https://www.example.com" className="flex items-center">
                    SOLUTIONS
                    <ArrowDownIcon />
                  </button>
                </PopoverButton>
                <PopoverPanel
                  transition
                  anchor="bottom"
                  className="divide-y w-36 mt-6 rounded-xl bg-bugbug-100 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                >
                  <div className="p-3 text-bugbug-600 text-center">
                    <a href="http://www.sample.com" className="block rounded-lg py-2 px-3 transition cursor-pointer hover:bg-bugbug-600 hover:text-bugbug-50">
                      <p>SOLUTION 1</p>
                    </a>
                    <a href="http://www.sample.com" className="block rounded-lg py-2 px-3 transition cursor-pointer hover:bg-bugbug-600 hover:text-bugbug-50">
                      <p>SOLUTION 2</p>
                    </a>
                    <a href="http://www.sample.com" className="block rounded-lg py-2 px-3 transition cursor-pointer hover:bg-bugbug-600 hover:text-bugbug-50">
                      <p>SOLUTION 3</p>
                    </a>
                  </div>
                </PopoverPanel>
              </Popover>
            </li>
            <li>
              <button>GRANTS & COLLABORATIONS</button>
            </li>
            <li>
              <button>IN THE NEWS</button>
            </li>
            <li>
              <button className="px-7 py-4 bg-bugbug-50 text-bugbug-600 rounded-lg focus:outline-none hover:bg-bugbug-100">CONTACT US</button>
            </li>
          </span>
          <label className="xl:hidden">
            <HamburgerIcon />
          </label>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
