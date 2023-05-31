const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

app.use(cors());
app.use(express.json());

app.get('/read', (req, res) => {
  const url = req.query.url;
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
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
