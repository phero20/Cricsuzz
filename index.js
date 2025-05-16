const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));

app.get("/api/scores", async (req, res) => {
  try {
    const response = await fetch(
      "https://ipl-okn0.onrender.com/ipl-2025-schedule"
    );
    if (!response.ok) {
      console.error(`[BACKEND] IPL API error: ${response.status}`);
      return res.status(500).json({ error: "Failed to fetch IPL scores" });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("[BACKEND ERROR] /api/scores", error);
    res.status(500).json({ error: "Error fetching IPL data" });
  }
});

app.get("/api/points-table", async (req, res) => {
  try {
    const response = await fetch(
      "https://ipl-okn0.onrender.com/ipl-2025-points-table"
    );
    if (!response.ok) {
      console.error(`[BACKEND] Points Table API error: ${response.status}`);
      return res.status(500).json({ error: "Failed to fetch points table" });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("[BACKEND ERROR] /api/points-table", error);
    res.status(500).json({ error: "Error fetching points table data" });
  }
});

app.get("/api/players", async (req, res) => {
  try {
    const teamCodes = [
      "rcb",
      "csk",
      "mi",
      "srh",
      "kkr",
      "rr",
      "dc",
      "pk",
      "gt",
      "lsg",
    ];
    const baseUrl = "https://ipl-okn0.onrender.com/squad/";

    const playerDataPromises = teamCodes.map(async (teamCode) => {
      const response = await fetch(`${baseUrl}${teamCode}`);
      if (!response.ok) {
        console.warn(`[BACKEND] Failed to fetch players for ${teamCode}`);
        return { team: teamCode.toUpperCase(), players: [], error: true };
      }
      const data = await response.json();
      return { team: teamCode.toUpperCase(), players: data, error: false };
    });
    const allPlayers = await Promise.all(playerDataPromises);
    res.json(allPlayers);
  } catch (error) {
    console.error("[BACKEND ERROR] /api/players", error);
    res.status(500).json({ error: "Error fetching player data for all teams" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
