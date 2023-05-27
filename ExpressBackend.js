const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

app.get('/api', (req, res) => {
  res.json({ content: "test yooo kinda working" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
