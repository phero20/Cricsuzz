import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Cricket() {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const navLinkClass = ({ isActive }) =>
    `py-0 cursor-pointer transition-all duration-200 border-b-4 dark:hover:text-white hover:text-black ${
      isActive
        ? "border-blue-900 dark:text-white text-black"
        : "border-transparent hover:border-gray-500"
    }`;

  const isMoreActive = [
    "/cricket/international",
    "/cricket/Domestic",
    "/cricket/women",
  ].includes(location.pathname);

  return (
    <div className="w-screen flex flex-col items-center mt-5">
      <div className="text-gray-500 mt-20 w-[90%] md:w-8/12 text-lg font-medium">
        <div className="hidden md:flex justify-between w-full">
          <NavLink to="/cricket/ipl" className={navLinkClass}>
            IPL
          </NavLink>
          <NavLink to="/cricket/live" className={navLinkClass}>
            LIVE
          </NavLink>
          <NavLink to="/cricket/international" className={navLinkClass}>
            INTERNATIONAL
          </NavLink>
          <NavLink to="/cricket/domestic" className={navLinkClass}>
            DOMESTIC
          </NavLink>
          <NavLink to="/cricket/women" className={navLinkClass}>
            WOMEN
          </NavLink>
        </div>

        <div className="flex justify-evenly md:hidden w-full relative">
          <NavLink to="/cricket/ipl" className={navLinkClass}>
            IPL
          </NavLink>
          <NavLink to="/cricket/live" className={navLinkClass}>
            LIVE
          </NavLink>

          <div className="relative">
            <button
              className={`transition-all duration-200 py-0 cursor-pointer border-b-4 flex items-center ${
                isMoreActive
                  ? "border-blue-900 dark:text-white text-black"
                  : "border-transparent hover:border-gray-500"
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              MORE{" "}
              {!showDropdown ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronUp size={20} />
              )}
            </button>
            {showDropdown && (
              <div className="absolute top-full -right-16 mt-2 w-40 flex flex-col dark:border-gray-700 border border-gray-300 rounded-lg p-2 gap-2 dark:bg-gray-950 z-10 bg-gray-100">
                <NavLink to="/cricket/international" className={navLinkClass}>
                  INTERNATIONAL
                </NavLink>
                <NavLink to="/cricket/domestic" className={navLinkClass}>
                  DOMESTIC
                </NavLink>
                <NavLink to="/cricket/women" className={navLinkClass}>
                  WOMEN
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
