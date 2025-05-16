import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchScoreCad } from "../../../redux/features/apiFetch/apiFetch";
import Loading from "../ipl/Loading";

export default function Live() {
  const dispatch = useDispatch();
  const [polling, setPolling] = useState(null);

  useEffect(() => {
    dispatch(fetchScoreCad());
  }, [dispatch]);

  const { scoreCad } = useSelector((state) => state.matches);
  const newArray = scoreCad?.response?.reduce((acc, item) => {
    if (item?.seriesName && item?.matchList?.length > 0) {
      acc.push({
        seriesName: item.seriesName,
        matches: item.matchList,
      });
    }
    return acc;
  }, []);

  const formatMatchTime = (timeString = "") => {
    const match = timeString.match(/\b\d{1,2}:\d{2}\s*[AP]M\b/i);
    return match ? match[0] : timeString;
  };

  const parseScore = (scoreString = "") => {
    const scoreMatch = scoreString.match(/^([\d\-]+)\s*\(([\d.]+)\s*Ovs\)/);
    if (scoreMatch) {
      return {
        score: scoreMatch[1],
        overs: `(${scoreMatch[2]})`,
      };
    }
    return {
      score: scoreString || "-",
      overs: "",
    };
  };

  if (!newArray || newArray.length === 0) {
    return (
      <div className="h-[80vh] text-center flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const images = useSelector((state) => state.images.images);
  const teamImageGenerator = (teamName) => {
    if (typeof teamName !== "string") return null;

    const teams = teamName.split("vs").map((t) => t.trim().toLowerCase());

    if (teams.length !== 2) return null;

    const [team1, team2] = teams;

    const team1Image = images.response.find(
      (item) =>
        typeof item.title === "string" &&
        item.title.trim().toLowerCase() === team1
    )?.image;

    const team2Image = images.response.find(
      (item) =>
        typeof item.title === "string" &&
        item.title.trim().toLowerCase() === team2
    )?.image;

    return {
      team1Image: team1Image || null,
      team2Image: team2Image || null,
    };
  };

  useEffect(() => {
    const hasLiveMatch = newArray.length > 0;

    if (hasLiveMatch && !polling) {
      const intervalId = setInterval(() => {
        dispatch(fetchScoreCad());
      }, 15000);
      setPolling(intervalId);
    } else if (!hasLiveMatch && polling) {
      clearInterval(polling);
      setPolling(null);
    }

    return () => {
      if (polling) {
        clearInterval(polling);
        setPolling(null);
      }
    };
  }, [newArray, dispatch]);

  return (
    <div>
      <h2 className="text-center text-xl font-medium text-blue-800 mt-8">
        LIVE
      </h2>

      {newArray.map((series, sIndex) => (
        <div
          key={sIndex}
          className="flex flex-col justify-center items-center py-4 border dark:border-gray-700 border-gray-300 my-12 mt-8 rounded-lg mx-3"
        >
          <p className="dark:text-white text-black text-lg font-medium text-center px-2">
            {series.seriesName}
          </p>

          <div
            className={`grid gap-6 py-3 box-border place-items-center w-full max-w-screen-lg mx-auto ${
              series.length > 1 ? "lg:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {series.matches.map((match, index) => (
              <div
                key={index}
                className="p-6 px-6 border border-gray-300 dark:border-gray-700 sm:my-3 mx-3 rounded-2xl"
              >
                <div className="flex justify-between flex-col text-gray-500 text-sm">
                  <p className="text-center pb-4 text-gray-400">
                    {match.matchTitle}
                  </p>
                  <p>
                    {match.matchDate}, {formatMatchTime(match.matchTime)}
                  </p>
                </div>

                <div className="w-full text-black dark:text-white">
                  <div className="flex justify-between items-center py-6 text-sm font-medium">
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={teamImageGenerator(match.matchTitle)?.team1Image}
                        alt="team1"
                        className="w-10"
                      />
                      <div className="px-1 flex flex-col items-center gap-2">
                        <p>{match.teamOne.name || "-"}</p>
                        <div className="text-center">
                          <p>{parseScore(match.teamOne.score).score || "-"}</p>
                          <p className="text-xs font-light dark:text-gray-300 text-gray-500">
                            {parseScore(match.teamOne.score).overs || "-"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <p>vs</p>
                      <p className="text-xs font-light text-center p-4">
                        {match.matchStatus}
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={teamImageGenerator(match.matchTitle)?.team2Image}
                        alt="team1"
                        className="w-10"
                      />
                      <div className="px-1 flex flex-col items-center gap-2">
                        <p>{match.teamTwo.name || "-"}</p>
                        <div className="text-center">
                          <p>{parseScore(match.teamTwo.score).score || "-"}</p>
                          <p className="text-xs font-light dark:text-gray-300 text-gray-500">
                            {parseScore(match.teamTwo.score).overs || "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="border-b border-gray-300 dark:border-gray-700 text-sm text-blue-700 pb-1">
                    <span className="text-gray-500 dark:text-gray-400">
                      Venue :{" "}
                    </span>
                    {match.matchVenue || "-"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
