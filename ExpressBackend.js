const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');


app.use(cors()); // Enable CORS for all routes


// TODO

// TRY THIS APPROACH
// oh and it needs to be able to take in the url from the frontend. try the 2nd approach, putting it in the Request Body
// frontend portion
// const articleUrl = "https://example.com/article";
// fetch('/api', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ url: articleUrl })
// })
//   .then((res) => res.json())
//   .then((data) => {
//     // Handle response
//   });

// backend portion
// app.use(express.json()); // Middleware to parse request body

// app.post('/api', (req, res) => {
//   const articleUrl = req.body.url;
//   // Process the article URL and fetch the content
//   // ...
// });



// add the article scrape logic. it should display the article content on the read route
// possible solution below
app.use(express.json()); // Middleware to parse request body

// app.get('/api', (req, res) => {
app.post('/api', (req, res) => {

  let url = req.body.url;
  

  // axios get request to article url, then the code from the snippet, then set that articlecontent which comes from (usestate) like this, content: articleContent

  // WIP code to see if parsing article content works
  // let url = 'https://www.cnbc.com/2023/05/25/directv-nfl-sunday-ticket-bars-restaurants.html';
  axios.get(url)
    .then(function(response) {
      let dom = new JSDOM(response.data, { url: url });
      let article = new Readability(dom.window.document).parse();
      console.log(article.textContent);
      res.json({content: article.textContent});
    })
    // .catch(function(error) {
    //   console.error(error);
    // });



  // res.json({ content: "test yooo kinda working" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
