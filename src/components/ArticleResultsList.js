// Import libraries
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Import components
import ArticleCard from "./ArticleCard"

// Import JS functions
import { searchArticlesByQuery, searchArticlesByCategory } from './Api';
import { FormatTime } from './FormatTime';

function ArticleResultsList() {

  // Gets the URL
  const location = useLocation();
  console.log(location)
  // Stores the user's query
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  const category = searchParams.get('c')

  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function fetchArticles() {
      console.log(query)
      console.log(category)
      let data = null
      if (query) {
        data = await searchArticlesByQuery(query);
      } else if (category) {
        data = await searchArticlesByCategory(category);
      }
      // Sets the JSON data to appropriate state variables
      setArticles(data.articles || []);      
      setTotalResults(data.totalResults || 0);
    }
    fetchArticles();
  }, [query, category]);


  return (
    <div>
      <h1>News Headlines</h1>
      <p>{totalResults} total results</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {articles.map(article => (
          <div key={article.url}>
            <ArticleCard 
              title={article.title} 
              source={article.source.name}
              image={article.urlToImage} 
              description={article.description} 
              url={article.url}              
              publish={FormatTime(article.publishedAt)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleResultsList;