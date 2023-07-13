import React from "react";

import logo from "./img/logo2.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font bg-gradient-to-r mb-3 from-blue-300 to-green-300">
        <div className="container mx-10 flex flex-wrap p-5 flex-col md:flex-row items-center justify-end">
          <a
            href="/"
            target="_blank"
            className="order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src={logo} className="h-16 w-36"></img>
          </a>
          <nav className="flex lg:w-2/5 flex-wrap items-center justify-around text-xl md:ml-auto ">
            <a
              href="https://olympics.com/en/"
              target="_blank"
              className="mr-5 hover:text-gray-900"
            >
              Olympics
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer ">Athletes</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer ">Sports</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer ">Stats</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer ">News</a>
            <a href="/signertype" className="mr-5 hover:text-gray-900">
              Sign Up
            </a>
            <a href="/login" className="mr-5 hover:text-gray-900">
              Login
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
