import "./App.css";
import React, { memo, useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Ipl from "./Components/Cricket/ipl/Ipl";
import Matches from "./Components/Cricket/ipl/Matches";
import Table from "./Components/Cricket/ipl/Table";
import Winners from "./Components/Cricket/ipl/Winners";
import Players from "./Components/Cricket/ipl/Players";
import Cricket from "./Components/Cricket/Cricket";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import International from "./Components/Cricket/OtherCrick/International";
import Domestic from "./Components/Cricket/OtherCrick/Domestic";
import Women from "./Components/Cricket/OtherCrick/Women";
import Live from "./Components/Cricket/OtherCrick/Live";
import Info from "./Components/Info/Info";
import Player from "./Components/Info/Player";
import Team from "./Components/Info/Team";
import MainLoading from "./Components/Mainloading";
import DomesticTeam from "./Components/Info/DomesticTeam";
import WomenTeam from "./Components/Info/WomenTeam";
import Leagueteam from "./Components/Info/Leagueteam";

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false),4500);
    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <MainLoading />;
  }

  return (
    <div>
      <BrowserRouter>
        <MemoizedNav />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/cricket/ipl/matches" replace />}
          />

          <Route path="/cricket" element={<Cricket />}>
            <Route index element={<Navigate to="ipl/matches" replace />} />
            <Route path="ipl" element={<Ipl />}>
              <Route index element={<Navigate to="matches" replace />} />
              <Route path="matches" element={<Matches />} />
              <Route path="table" element={<Table />} />
              <Route path="winners" element={<Winners />} />
              <Route path="players" element={<Players />} />
            </Route>
            <Route path="international" element={<International />}></Route>
            <Route path="domestic" element={<Domestic />}></Route>
            <Route path="women" element={<Women />}></Route>
            <Route path="live" element={<Live />}></Route>
          </Route>
          <Route path="/info" element={<Info />}>
            <Route index element={<Navigate to="team" replace />} />
            <Route path="player/:id/:name" element={<Player />} />
            <Route path="team" element={<Team />} />
            <Route path="domesticteam" element={<DomesticTeam />} />
            <Route path="Womenteam" element={<WomenTeam />} />
             <Route path="leagueteam" element={<Leagueteam />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const MemoizedNav = memo(Nav);

export default App;
