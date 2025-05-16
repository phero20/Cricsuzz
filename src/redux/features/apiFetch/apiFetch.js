import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://sports-backend-pcf6.onrender.com/api/scores"
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchPointsTable = createAsyncThunk(
  "matches/fetchPointsTable",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://sports-backend-pcf6.onrender.com/api/points-table"
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchPlayers = createAsyncThunk(
  "matches/fetchPlayers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://sports-backend-pcf6.onrender.com/api/players"
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchPreviousMatches = createAsyncThunk(
  "matches/fetchPreviousMatches",
  async (_, { rejectWithValue }) => {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent";
    const apiKeys = [
      "73bdf95549mshef9acf5750702abp102124jsn9dcc9be9e2ac",
      "0ce6c19b5cmsh745281674507dc1p19c7aajsn972189d87d01",
      "eb1dd8c8bemsh9d4a79a1b8ee204p1014fejsn6fb2d2d98933",
      "225de374aamshae091e8b45f42aap159aa5jsna9afa85d0339",
    ];

    try {
      for (const key of apiKeys) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
          },
        });
        if (response.ok) return await response.json();
      }
      throw new Error("All API keys failed");
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchScoreCad = createAsyncThunk(
  "matches/fetchScoreCad",
  async (_, { rejectWithValue }) => {
    const url =
      "https://cricket-api-free-data.p.rapidapi.com/cricket-livescores";
    const apiKeys = [
      "73bdf95549mshef9acf5750702abp102124jsn9dcc9be9e2ac",
      "0ce6c19b5cmsh745281674507dc1p19c7aajsn972189d87d01",
      "eb1dd8c8bemsh9d4a79a1b8ee204p1014fejsn6fb2d2d98933",
      "225de374aamshae091e8b45f42aap159aa5jsna9afa85d0339",
    ];
    try {
      for (const key of apiKeys) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "cricket-api-free-data.p.rapidapi.com",
          },
        });
        if (response.ok) {
          return await response.json();
        }
      }
      throw new Error("All API keys failed");
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchTeam = createAsyncThunk(
  "matches/fetchTeam",
  async (_, { rejectWithValue }) => {
    const url = "https://cricket-api-free-data.p.rapidapi.com/cricket-teams";
    const apiKeys = [
      "73bdf95549mshef9acf5750702abp102124jsn9dcc9be9e2ac",
      "0ce6c19b5cmsh745281674507dc1p19c7aajsn972189d87d01",
      "eb1dd8c8bemsh9d4a79a1b8ee204p1014fejsn6fb2d2d98933",
      "225de374aamshae091e8b45f42aap159aa5jsna9afa85d0339",
    ];
    try {
      for (const key of apiKeys) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "cricket-api-free-data.p.rapidapi.com",
          },
        });
        if (response.ok) {
          return await response.json();
        }
      }
      throw new Error("All API keys failed");
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchPlayer = createAsyncThunk(
  "matches/fetchPlayer",
  async (id, { rejectWithValue }) => {
    const url = `https://cricket-api-free-data.p.rapidapi.com/cricket-players?teamid=${id}`;
    const apiKeys = [
      "73bdf95549mshef9acf5750702abp102124jsn9dcc9be9e2ac",
      "0ce6c19b5cmsh745281674507dc1p19c7aajsn972189d87d01",
      "eb1dd8c8bemsh9d4a79a1b8ee204p1014fejsn6fb2d2d98933",
      "225de374aamshae091e8b45f42aap159aa5jsna9afa85d0339",
    ];
    try {
      for (const key of apiKeys) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "cricket-api-free-data.p.rapidapi.com",
          },
        });
        if (response.ok) {
          return await response.json();
        }
      }
      throw new Error("All API keys failed");
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  matches: [],
  pointsTable: [],
  previousMatches: [],
  players: [],
  scoreCad: [],
  winners: [],
  teams: [],
  player: [],
  loading: false,
  error: null,
};

const scoreSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.matches = action.payload || [];
        state.loading = false;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchPointsTable.fulfilled, (state, action) => {
        state.pointsTable = action.payload || [];
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.players = action.payload || [];
      })
      .addCase(fetchPreviousMatches.fulfilled, (state, action) => {
        state.previousMatches = action.payload || [];
      })
      .addCase(fetchScoreCad.fulfilled, (state, action) => {
        state.scoreCad = action.payload || [];
      })
      .addCase(fetchTeam.fulfilled, (state, action) => {
        state.teams = action.payload || [];
      })

      .addCase(fetchPlayer.fulfilled, (state, action) => {
        state.player = action.payload || [];
      });
  },
});

export default scoreSlice.reducer;
