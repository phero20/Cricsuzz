import React, { useEffect, useRef, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayer } from "../../redux/features/apiFetch/apiFetch";
import Loading from "../Cricket/ipl/Loading";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Player = () => {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (id) {
      setLoading(true);
      dispatch(fetchPlayer(id)).finally(() => {
        if (isMounted) setLoading(false);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(`/info/team`);
  };

  const player = useSelector((state) => state.matches.player);

  if (loading) {
    return (
      <div className="h-[80vh] text-center flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!player || player.length === 0) {
    return (
      <div className="h-[80vh] text-center flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center my-12 px-2">
      <div className="w-full max-w-screen-lg relative flex items-center mb-5">
        <div
          className="flex items-center text-black dark:text-white cursor-pointer"
          onClick={handleBack}
        >
          <ChevronLeft size={25} />
          <span className="cursor-pointer">Back</span>
        </div>

        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-medium text-blue-800">
          PLAYERS
        </h2>
      </div>

      <div className="bg-gray-100 dark:bg-gray-950 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 p-6 px-3">
        <h2 className="text-center text-xl font-medium text-blue-800 mb-5">
          {name.toUpperCase()}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center">
          {player.response.map((player, index) => (
            <div
              className="flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 dark:border-gray-700 p-4  w-full sm:w-5/6 md:w-auto"
              key={index}
            >
              <img
                src={player.image}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 text-center">
                {player.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {player.Role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Player);
