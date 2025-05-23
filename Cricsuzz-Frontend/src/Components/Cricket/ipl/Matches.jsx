import React, { useState, memo, useCallback } from "react";
import ScoreCard from "./ScoreCard";
import NextIplMatches from "./NextIplMatches";
import PreviousMatches from "./PreviousMatches";

const Matches = () => {
  const [prevActive, setPrevActive] = useState(false);

  const handleToggle = useCallback((isPrev) => {
    setPrevActive(isPrev);
  }, []);

  return (
    <>
      <ScoreCard />

      <ul className="flex text-sm font-medium text-gray-500 dark:text-gray-400 mb-5 mx-5 gap-7 cursor-pointer">
        <li
          onClick={() => handleToggle(false)}
          className={`border-b-4 px-3 py-1 transition-all dark:hover:text-white hover:text-black hover:border-gray-600 ${
            !prevActive
              ? "font-medium dark:text-white text-black border-blue-900"
              : "dark:text-gray-400 text-gray-500 border-transparent"
          }`}
        >
          Next Matches
        </li>
        <li
          onClick={() => handleToggle(true)}
          className={`border-b-4 px-3 py-1 transition-all dark:hover:text-white hover:text-black hover:border-gray-600 ${
            prevActive
              ? "font-medium dark:text-white text-black border-blue-900"
              : "dark:text-gray-400 text-gray-500 border-transparent"
          }`}
        >
          Previous Matches
        </li>
      </ul>

      {prevActive ? <PreviousMatches /> : <NextIplMatches />}
    </>
  );
};
export default memo(Matches);
