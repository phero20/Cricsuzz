import React, { useEffect, memo, useMemo } from "react";
import lsg from "../../../assets/LSG.png";
import gt from "../../../assets/GT.png";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import logoIpl from "../../../assets/iplLogo.svg";
import { fetchMatches } from "../../../redux/features/apiFetch/apiFetch";
import Loading from "./Loading";
import Confetti from "react-confetti";

const NextIplMatches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const { matches } = useSelector((state) => state.matches, shallowEqual);

  const filteredMatches = useMemo(() => {
    if (!matches || Object.keys(matches).length === 0) return [];

    return Object.values(matches)
      .filter((match) => match.Date?.toLowerCase() !== "today")
      .sort((a, b) => {
        if (a.Date === "tomorrow") return -1;
        if (b.Date === "tomorrow") return 1;
        return Date.parse(a.Date) - Date.parse(b.Date);
      })
      .map((match) => ({
        ...match,
        teams:
          match.Rival?.split(/\s+/).filter((w) => w.toLowerCase() !== "vs") ||
          [],
      }));
  }, [matches]);

  const teamImageGenerator = (teamName) => {
    const teamLogos = {
      RCB: "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
      CSK: "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
      DC: "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png",
      SRH: "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png",
      KKR: "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png",
      MI: "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
      RR: "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
      PBKS: "https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png",
      GT: gt,
      LSG: lsg,
    };
    return teamLogos[teamName] || logoIpl;
  };

  const winners = useSelector((state) => state.images.winners);
  const winner = winners.find((item) => item.year == new Date().getFullYear());

if (winner != undefined) {
  return (
    <div className="w-full flex flex-col items-center gap-1 p-4" style={{ position: "relative" }}>
      <Confetti /> 
      <h1 className="text-lg font-bold dark:text-white my-5">WINNER {winner.year}</h1>
      <img src={winner.image_url} alt="" className="w-20" />
      <div className="mt-5 text-center">
        <p className="text-lg font-bold dark:text-white">{winner.team}</p>
        <p className="text-sm text-gray-500">against {winner.rival}</p>
      </div>
    </div>
  );
}

  
  if (!matches || Object.keys(matches).length === 0) {
    return (
      <div className="text-center flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 gap-3 py-3 box-border">
        {filteredMatches.map((match, index) => (
          <div
            key={index}
            className="p-6 px-6 border border-gray-300 dark:border-gray-700 sm:my-3 mx-3 rounded-2xl"
          >
            <div className="flex justify-between text-gray-500 text-sm">
              <p>IPL · {match.Date}</p>
              <p>{match.Time}</p>
            </div>

            <div className="w-full text-black dark:text-white">
              <div className="flex justify-between items-center py-6 text-sm font-medium">
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={teamImageGenerator(match.teams[0])}
                    alt="team1"
                    className="w-10"
                  />
                  <p className="px-1">{match.teams[0]}</p>
                </div>

                <div>VS</div>

                <div className="flex flex-col items-center gap-2">
                  <img
                    src={teamImageGenerator(match.teams[1])}
                    alt="team2"
                    className="w-10"
                  />
                  <p className="px-1">{match.teams[1]}</p>
                </div>
              </div>

              <p className="border-b border-gray-300 dark:border-gray-700 text-sm text-blue-700 pb-1">
                <span className="text-gray-500 dark:text-gray-400">
                  Venue:{" "}
                </span>
                {match.Location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(NextIplMatches);
