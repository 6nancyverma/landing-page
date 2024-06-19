import React from "react";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-[90%] py-2 md:p-4 mx-auto px-4 sm:px-6 lg:px-8 xl:w-[85%] 2xl:w-[70%]">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={50}
            quality={100}
          />
        </div>

        <div className="hidden sm:flex sm:items-center">
          <Button variant="secondary" size="large">
            ENQUIRE NOW
          </Button>
        </div>

        <div className="-mr-2 flex items-center sm:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none "
            aria-expanded="false"
          >
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
