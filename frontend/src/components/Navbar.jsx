import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 px-4 bg-black/80 fixed w-full top-0 z-[5000]">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
            className="h-8"
            alt="Persist Logo"
          />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-[#7a56d6] rounded-sm md:bg-transparent md:text-[#7a56d6] md:p-0 dark:text-white md:dark:text-[#7a56d6]"
              >
                Ongoing Startup
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7a56d6] md:p-0 dark:text-white md:dark:hover:text-[#7a56d6]"
              >
                Completed Startupathon
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7a56d6] md:p-0 dark:text-white md:dark:hover:text-[#7a56d6]"
              >
                Startupathon Guide
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7a56d6] md:p-0 dark:text-white md:dark:hover:text-[#7a56d6]"
              >
                How to Win
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7a56d6] md:p-0 dark:text-white md:dark:hover:text-[#7a56d6]"
              >
                Mentor Network
              </a>
            </li>
            <li>
              <button
                type="button"
                className="text-white font-medium rounded-lg text-sm px-4 py-2 bg-gradient-to-r from-[#3f2d6d] via-[#7a56d6] to-[#9077ce] hover:bg-[#7a56d6] focus:ring-4 focus:outline-none focus:ring-[#7a56d6]"
              >
                Apply For Fellowship
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
