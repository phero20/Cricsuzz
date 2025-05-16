import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeam } from "../../redux/features/apiFetch/apiFetch";
import Loading from "../Cricket/ipl/Loading";

const Team = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  const teams = useSelector((state) => state.images.domestic);

  if (!teams || teams.length === 0) {
    return (
      <div className="h-[80vh] text-center flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-full flex items-center flex-col justify-center my-12 px-4">
      <h2 className="text-center text-xl font-medium text-blue-800 mb-5">
        DOMESTIC TEAMS
      </h2>
      <div className="bg-gray-100 dark:bg-gray-950 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-center items-center">
          {teams.response.map((team, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-300 dark:border-gray-700 rounded-lg py-4 px-3 w-full sm:w-5/6 md:w-auto overflow-clip hover:bg-blue-900 transition duration-500 hover:scale-110 cursor-pointer"
            >
              <img
                src={team.image}
                alt={team}
                className="w-20 h-14 object-contain mb-2 rounded-lg"
              />
              <p className="text-base font-medium text-black dark:text-white hover:text-white text-center w-11/12 break-words whitespace-normal">
                {team.title.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Team);
