import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPreviousMatches } from "../../../redux/features/apiFetch/apiFetch";
import Loading from "../ipl/Loading";

const International = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPreviousMatches());
  }, [dispatch]);

  const { previousMatches } = useSelector((state) => state.matches);

  function formatOvers(overs) {
    const fullOvers = Math.floor(overs);
    const balls = Math.round((overs - fullOvers) * 10);
    if (balls >= 6) {
      return `${fullOvers + 1}.0`;
    }
    return `${fullOvers}.${balls}`;
  }

  function formatTimestamp(timestamp) {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
    });
  }
  const seriesMatches =
    previousMatches?.typeMatches?.find((match) => match.matchType === "Women")
      ?.seriesMatches || [];

  const seriesWithMatches = seriesMatches.reduce((acc, seriesMatch) => {
    const wrapper = seriesMatch?.seriesAdWrapper;
    if (wrapper?.seriesName && wrapper?.matches?.length > 0) {
      acc.push({
        seriesName: wrapper.seriesName,
        matches: wrapper.matches,
      });
    }
    return acc;
  }, []);

  const images = useSelector((state) => state.images.images);

  const teamImageGenerator = (teamName) => {
    if (typeof teamName !== "string") return null;

    const team = images.response.find(
      (item) =>
        typeof item.title === "string" &&
        item.title.trim().toLowerCase() === teamName.trim().toLowerCase()
    );

    return team ? team.image : null;
  };

  if (!seriesWithMatches || seriesWithMatches.length === 0) {
    return (
      <div className="h-[80vh] text-center flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center text-xl font-medium text-blue-800 mt-8">
        WOMEN
      </h2>

      {seriesWithMatches.map((series, sIndex) => (
        <div
          key={sIndex}
          className="nig flex flex-col justify-center items-center py-4 border dark:border-gray-700 border-gray-300 my-12 rounded-lg mx-3"
        >
          <p className="dark:text-white text-black text-lg font-medium text-center px-2">
            {series.seriesName}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 gap-3 py-3 box-border">
            {series.matches.map((match, index) => (
              <div
                key={index}
                className="p-6 px-6 border border-gray-300 dark:border-gray-700 sm:my-3 mx-3 rounded-2xl"
              >
                <div className="flex justify-between text-gray-500 text-sm">
                  <p>
                    {match.matchInfo?.startDate
                      ? formatTimestamp(match.matchInfo.startDate)
                      : "-"}
                  </p>
                </div>

                <div className="w-full text-black dark:text-white">
                  <div className="flex justify-between items-center py-6 text-sm font-medium">
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={teamImageGenerator(
                          match.matchInfo?.team1?.teamName
                        )}
                        alt="team1"
                        className="w-10"
                      />
                      <div className="px-1 flex flex-col items-center gap-2">
                        <p>{match.matchInfo?.team1?.teamSName || "-"}</p>
                        <div className="text-center">
                          <p>
                            {match.matchScore?.team1Score?.inngs1
                              ? `${match.matchScore.team1Score.inngs1.runs}/${match.matchScore.team1Score.inngs1.wickets}`
                              : "-"}
                          </p>
                          <p className="text-xs font-light dark:text-gray-300 text-gray-500">
                            (
                            {match.matchScore?.team1Score?.inngs1?.overs
                              ? formatOvers(
                                  match.matchScore.team1Score.inngs1.overs
                                )
                              : "-"}
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <p>vs</p>
                      <p className="text-xs font-light text-center p-4">
                        {match.matchInfo?.status || "Match Ongoing"}
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={teamImageGenerator(
                          match.matchInfo?.team2?.teamName
                        )}
                        alt="team1"
                        className="w-10"
                      />
                      <div className="px-1 flex flex-col items-center gap-2">
                        <p>{match.matchInfo?.team2?.teamSName || "-"}</p>
                        <div className="text-center">
                          <p>
                            {match.matchScore?.team2Score?.inngs1
                              ? `${match.matchScore.team2Score.inngs1.runs}/${match.matchScore.team2Score.inngs1.wickets}`
                              : "-"}
                          </p>
                          <p className="text-xs font-light dark:text-gray-300 text-gray-500">
                            (
                            {match.matchScore?.team2Score?.inngs1?.overs
                              ? formatOvers(
                                  match.matchScore.team2Score.inngs1.overs
                                )
                              : "-"}
                            )
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="border-b border-gray-300 dark:border-gray-700 text-sm text-blue-700 pb-1">
                    <span className="text-gray-500 dark:text-gray-400">
                      Venue :{" "}
                    </span>
                    {match.matchInfo?.venueInfo?.ground || "-"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(International);
