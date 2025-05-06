const express = require('express');
const cors = require('cors');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors({ origin: '*' }));

// Route 1: Fetch IPL 2025 Schedule
app.get('/api/scores', async (req, res) => {
  try {
    const response = await fetch('https://ipl-okn0.onrender.com/ipl-2025-schedule');
    if (!response.ok) {
      console.error(`[BACKEND] IPL API error: ${response.status}`);
      return res.status(500).json({ error: 'Failed to fetch IPL scores' });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('[BACKEND ERROR] /api/scores', error);
    res.status(500).json({ error: 'Error fetching IPL data' });
  }
});

// Route 2: Fetch live IPL matches using CricAPI
app.get('/api/ipl-live', async (req, res) => {
  try {
   // cc0adedd-3464-4b43-9087-42125bd95b19  
    const apiKey = 'c56a8ca6-0882-42c3-bc61-e2d39080b026';
    const response = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=${apiKey}`);
    if (!response.ok) {
      console.error(`[BACKEND] CricAPI error: ${response.status}`);
      return res.status(500).json({ error: 'Failed to fetch live scores' });
    }
    const data = await response.json();
    const matchesList = data.data || [];
    const iplMatches = matchesList.filter(
      match =>
        match.series &&
        (match.series.toLowerCase().includes('ipl') ||
         match.series.toLowerCase().includes('indian premier league'))
    );
    res.json({ matches: iplMatches });
  } catch (error) {
    console.error('[BACKEND ERROR] /api/ipl-live', error);
    res.status(500).json({ error: 'Error fetching live IPL data' });
  }
});

// ✅ New Route 3: Fetch IPL 2025 Points Table
app.get('/api/points-table', async (req, res) => {
  try {
    const response = await fetch('https://ipl-okn0.onrender.com/ipl-2025-points-table');
    if (!response.ok) {
      console.error(`[BACKEND] Points Table API error: ${response.status}`);
      return res.status(500).json({ error: 'Failed to fetch points table' });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('[BACKEND ERROR] /api/points-table', error);
    res.status(500).json({ error: 'Error fetching points table data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
