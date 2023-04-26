// Import libraries
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Import components
import ArticleCard from "./ArticleCard"

// Import component functions
import { searchArticles } from './Api';

function ArticleResultsList() {

  // Gets the URL
  const location = useLocation();
  // Stores the user's query
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  // Makes a promise to retrieve the data from the API
  useEffect(() => {
    async function fetchArticles() {
      const data = await searchArticles(query);
      // Sets the JSON data to appropriate state variables
      setArticles(data.articles || []);      
      setTotalResults(data.totalResults || 0);
    }
    fetchArticles();
  }, [query]);

  return (
    <div>
      <h1>News Headlines</h1>
      <p>{totalResults} total results</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {articles.map(article => (
          <div key={article.url}>
            <ArticleCard 
              title={article.title} 
              image={article.urlToImage} 
              description={article.description} 
              url={article.url} 
              publish={article.publishedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleResultsList;
