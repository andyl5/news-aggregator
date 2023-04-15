import axios from 'axios'
import { useState } from 'react'

import ArticleCard from './ArticleCard'

function ApiTest(){
    const apiKey = process.env.REACT_APP_API_KEY;

    const [responseData, setResponseData] = useState(null)

    const getQuery = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(response => {
            console.log(response.data)
            setResponseData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>

{responseData  ? (
    <div>
          <h1>News Headlines</h1>
            <p>{responseData.totalResults} total results</p>
          <ul style={{listStyleType:'none'}}>
            {responseData.articles.map(article => (
              <li key={article.url}>
                {/* <h2>{article.title}</h2>
                <p>Author: {article.author || 'N/A'}</p>
                <p>{article.description}</p>
                <p>Content: {article.content || 'N/A'}</p>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a> */}
                <ArticleCard 
                    title={article.title} 
                    image={article.urlToImage}
                    description={article.description}
                    // url={}
                     />
              </li>
            ))}
          </ul>
        </div>
      ) : 
      <button onClick={getQuery}>Test Request</button>

      }
        </div>
    )
}
export default ApiTest

