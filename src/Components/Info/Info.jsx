import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Info() {
  const navLinkClass = ({ isActive }) =>
    `py-0 cursor-pointer transition-all duration-200 border-b-4 dark:hover:text-white hover:text-black ${
      isActive
        ? "border-blue-900 dark:text-white text-black"
        : "border-transparent hover:border-gray-500"
    }`;
  return (
    <div className="w-screen flex flex-col items-center mt-10">
      <div className="text-gray-500 mt-20 w-[90%] md:w-8/12 text-lg font-medium">
        <div className="flex justify-between w-full text-sm">
          <NavLink to="/info/leagueteam" className={navLinkClass}>
            LEAGUE
          </NavLink>
          <NavLink to="/info/team" className={navLinkClass}>
            INTERNATIONAL
          </NavLink>
          <NavLink to="/info/domesticteam" className={navLinkClass}>
            DOMESTIC
          </NavLink>
          <NavLink to="/info/womenteam" className={navLinkClass}>
            WOMEN
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
