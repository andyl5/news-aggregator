import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

// This function takes in a query string and returns a Promise that resolves to the API response data
export const searchArticles = async (query) => {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
