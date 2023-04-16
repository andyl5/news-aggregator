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

      <button onClick={getQuery}>Test Request</button>

{responseData  ? (
    <div>
          <h1>News Headlines</h1>
            <p>{responseData.totalResults} total results</p>
          <div 
            style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',}}>
            {responseData.articles.map(article => (
              <div key={article.url}>
                <ArticleCard 
                    title={article.title} 
                    image={article.urlToImage}
                    description={article.description}
                    url={article.url}
                     />
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

