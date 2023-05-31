import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

// This function takes in a query string and returns a Promise that resolves to the API response data
export const searchArticlesByQuery = async (query) => {
  // search EVERYTHING
  // const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
  // search TOP ARTICLES
  const url = `https://newsapi.org/v2/top-headlines?q=${query}&sources=abc-news,al-jazeera-english,ars-technica,associated-press,axios,bleacher-report,bloomberg,breitbart-news,business-insider,buzzfeed,cbs-news,cnn,cnn-es,crypto-coins-news,engadget,entertainment-weekly,espn,fortune,fox-news,fox-sports,google-news,hacker-news,ign,mashable,medical-news-today,msnbc,mtv-news,national-geographic,national-review,nbc-news,new-scientist,newsweek,new-york-magazine,next-big-future,nfl-news,nhl-news,politico,polygon,recode,reddit-r-all,reuters,techcrunch,techradar,the-american-conservative,the-hill,the-huffington-post,the-next-web,the-verge,the-wall-street-journal,the-washington-post,the-washington-times,time,usa-today,vice-news,wired&apiKey=${apiKey}`;
  const response = await axios.get(url);
  console.log(response.data)
  return response.data;
};

export const searchArticlesByCategory = async (category) => {
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;
  const response = await axios.get(url);
  console.log(response.data)
  return response.data;
};
