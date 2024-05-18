import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

import ArticleCard from "./ArticleCard"

// Import JS functions
import { FormatTime } from './FormatTime';

import placeholder from '../images/placeholder.jpg'

function ArticleResultsList() {
  // Gets the project URL
  const location = useLocation();
  // Stores the user's query
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  const category = searchParams.get('c')

  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  // Calls the API function to retrieve the articles from the query
  useEffect(() => {
    async function fetchArticles() {
      let data
      if (query) {
        data = await axios.get(`https://news-aggregator-server-mu.vercel.app/${query}`)
      } else if (category) {
        data = await axios.get(`https://news-aggregator-server-mu.vercel.app/${category}`)
      }
      // Sets the JSON data to appropriate state variables
      setArticles(data.data.articles || []);      
      setTotalResults(data.data.totalResults || 0);
    }
    fetchArticles();
  }, [query, category]);

  return (
    <div className='container-fluid'>
    <h1>News Headlines</h1>
      <p>{totalResults} results for '<strong>{query}</strong>'</p>
      <div className='row'>
          {articles.map(article => (
            <div key={article.url} className='col-md-3'>
              <ArticleCard 
                title={article.title} 
                source={article.source.name}
                image={article.urlToImage ? article.urlToImage : placeholder}
                description={article.description} 
                url={article.url}              
                publish={FormatTime(article.publishedAt)}
                author={article.author}
                />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ArticleResultsList;