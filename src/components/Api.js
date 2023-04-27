import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

// This function takes in a query string and returns a Promise that resolves to the API response data
export const searchArticlesByQuery = async (query) => {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  const response = await axios.get(url);
  console.log(response.data)
  return response.data;
};


export const searchArticlesByCategory = async (category) => {
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
  const response = await axios.get(url);
  console.log(response.data)
  return response.data;
};
