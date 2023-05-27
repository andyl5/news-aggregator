const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

const app = express();
const port = 3001; // Choose a port number for your backend server

app.use(express.json());

// Define a route to handle the scraping operation
app.post('/scrape', async (req, res) => {
  try {
    const { url } = req.body;

    // Make the request to fetch the article HTML
    const response = await axios.get(url);

    // Convert the HTML into a DOM object using JSDOM
    const dom = new JSDOM(response.data, {
      url: url
    });

    // Parse the article content using Readability
    const article = new Readability(dom.window.document).parse();

    // Send the scraped data back as the response
    res.json({ content: article.textContent });
  } catch (error) {
    console.error('Error scraping article:', error);
    res.status(500).json({ error: 'An error occurred while scraping the article.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
