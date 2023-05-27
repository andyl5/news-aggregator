// NOTES
// REWRITE THIS WITHOUT THE R1 FUNCTION TO SEE IF THE ARTICLE SCRAPING STILL WORKS. ONCE THAT IS DONE, THEN WE KNOW THAT THIS BACKEND CODE IS CORRECT.
// THEN THE LAST THING TO DO IS CONNECT THE BACKEND TO THE FRONTEND AND PASS DATA AND SUCH

// we need axios to make HTTP requests
const axios = require('axios');

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

// First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let url = 'https://www.cnbc.com/2023/05/25/directv-nfl-sunday-ticket-bars-restaurants.html';

axios.get(url)
  .then(function(response) {
    let dom = new JSDOM(response.data, { url: url });
    let article = new Readability(dom.window.document).parse();
    console.log(article.textContent);
  })
  .catch(function(error) {
    console.error(error);
  });
// // Make the request with axios' get() function
// axios.get(url).then(function(r1) {

//   // At this point we will have some search results from the API. Take the first search result...
//   let firstResult = r1.data.articles[0];

//   // ...and download the HTML for it, again with axios
//   axios.get(firstResult.url).then(function(r2) {

//     // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
//     let dom = new JSDOM(r2.data, {
//       url: firstResult.url
//     });

//     // now pass the DOM document into readability to parse
//     let article = new Readability(dom.window.document).parse();

//     // Done! The article content is in the textContent property
//     console.log(article.textContent);
//   })
// })