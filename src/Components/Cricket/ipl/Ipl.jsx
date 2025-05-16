import React, { memo } from "react";
import logo from "../../../assets/iplLogo.svg";
import { NavLink, Outlet } from "react-router-dom";

const tabs = ["MATCHES", "TABLE", "WINNERS", "PLAYERS"];

const Ipl = () => {
  return (
    <div className="w-screen flex justify-center my-5">
      <div className="w-[96%] md:w-9/12 bg-gray-100 dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <div className="w-full bg-blue-900 px-6 pt-3 text-white text-xl font-bold flex flex-col">
          <div className="flex items-center mb-8">
            <div className="bg-white px-1 rounded-xl mr-3">
              <img src={logo} alt="Ipl" className="h-12 w-12" />
            </div>
            <div>
              <p>IPL</p>
              <p className="text-xs text-gray-300 font-medium">
                {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <ul className="flex justify-between text-base font-medium pb-1 w-full">
            {tabs.map((tab) => {
              const tabPath = tab.toLowerCase();
              return (
                <li key={tab}>
                  <NavLink
                    to={tabPath}
                    className={({ isActive }) =>
                      ` py-0 cursor-pointer transition-all duration-200 border-b-4 ${
                        isActive
                          ? "border-gray-100 dark:border-black text-white"
                          : "border-transparent hover:border-gray-500 text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {tab}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:p-6 p-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default memo(Ipl);
