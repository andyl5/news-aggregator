import axios from 'axios'
import { useState } from 'react'

import ArticleCard from './ArticleCard'


// calls the API to return articles based on DEFAULT parameters (add a search bar to accomodate query searches)

function ApiTest(){
    const apiKey = process.env.REACT_APP_API_KEY;

    // const [responseData, setResponseData] = useState(null)

    // const getQuery = () => {
    //     axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    //     .then(response => {
    //         console.log(response.data)
    //         setResponseData(response.data)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }


    const [query, setQuery] = useState("");
    const [responseData, setArticles] = useState(null);
  
    const searchArticles = async () => {
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
      const response = await axios.get(url);
      setArticles(response.data);
    };

    
    return (
        <div>

      {/* <button onClick={setQuery}>Test Request</button> */}

      {/* <button onClick={getQuery}>Test Request</button> */}
      <input
        type="text"
        placeholder="Enter a search term"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={searchArticles}>Search</button>


{responseData  ? (
    <div>
          <h1>News Headlines</h1>
            <p>{responseData.totalResults} total results</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {responseData.articles.map(article => (
              <div key={article.url}>
                <ArticleCard title={article.title} image={article.urlToImage} description={article.description} url={article.url}/>
              </div>
            ))}
          </div>
        </div>
      ) : 
      // <button onClick={getQuery}>Test Request</button>
      null

      }
        </div>
    )
}
export default ApiTest

