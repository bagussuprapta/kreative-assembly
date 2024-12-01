import React, { useState, useEffect, Fragment } from "react";
import { Popover, PopoverButton, PopoverPanel, Button, Dialog, DialogPanel, DialogTitle, Transition, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

import { BugBugIcon } from "../icons/BugBugIcon";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { HamburgerIcon } from "../icons/HamburgerIcon";

function PopoverMenuMobile() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div onClick={open}>
        <HamburgerIcon />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={close}>
          <div className="fixed inset-0 flex items-center justify-center">
            <DialogPanel className="relative w-full h-full bg-bugbug-600 overflow-hidden">
              <button onClick={close} className="absolute top-4 right-4 px-4 py-2 text-bugbug-25 bg-bugbug-700 rounded-full hover:bg-bugbug-800">
                ✕
              </button>
              <div className="flex flex-col gap-y-5 items-center justify-center w-full h-full text-bugbug-150">
                <a href="#">ABOUT US</a>
                <Disclosure>
                  <DisclosureButton>
                    <p>SOLUTIONS</p>
                  </DisclosureButton>
                  <DisclosurePanel className={"flex flex-col gap-y-2 text-bugbug-100"}>
                    <a href="#">SOLUTION 1</a>
                    <a href="#">SOLUTION 2</a>
                    <a href="#">SOLUTION 3</a>
                  </DisclosurePanel>
                </Disclosure>
                <a href="#">GRANTS & COLLABORATIONS</a>
                <a href="#">IN THE NEWS</a>
                <button className="px-7 py-4 bg-bugbug-50 text-bugbug-600 rounded-lg focus:outline-none hover:bg-bugbug-100">CONTACT US</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

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
        }, 1000);
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
                  className="divide-y z-50 w-36 mt-6 rounded-xl bg-bugbug-100 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
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
          <div className="xl:hidden cursor-pointer">
            <PopoverMenuMobile />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
