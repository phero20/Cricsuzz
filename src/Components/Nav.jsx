import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 border-gray-200 dark:bg-gray-950 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 pl-0">
        <div className="flex items-end text-blue-700 text-lg font-bold">
          <img src={logo} alt="LOGO" className="w-16" />
          <h1 className="text-xl pb-4 relative -mt-2 -ml-2">CRICSUZZ</h1>
        </div>

        <div className="w-full flex justify-end md:justify-center">
          <ul className="flex flex-row font-semibold space-x-0 md:space-x-6 rtl:space-x-reverse p-0 mt-0 border-0 bg-transparent dark:bg-transparent">
            <li>
              <NavLink
                to="/cricket"
                className={({ isActive }) =>
                  `block pt-2 px-3 font-semibold hover:text-blue-700 transition-all duration-100 ${
                    isActive
                      ? "text-blue-700 font-semibold border-b-4 border-blue-900"
                      : "text-black dark:text-white hover:border-b-4 hover:border-gray-500"
                  }`
                }
              >
                CRICKET
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  `block pt-2  px-3 font-semibold hover:text-blue-700 transition-all duration-100 ${
                    isActive
                      ? "text-blue-700 font-semibold border-b-4 border-blue-900"
                      : "text-black dark:text-white hover:border-b-4 hover:border-gray-500"
                  }`
                }
              >
                INFO
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
