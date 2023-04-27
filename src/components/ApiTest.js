// DON'T NEED THIS FILE ANYMORE
// DELETE

import axios from 'axios'
import { useState } from 'react'

import ArticleCard from './ArticleCard'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// calls the API to return articles based on DEFAULT parameters (add a search bar to accomodate query searches)

// THIS IS JUST A TEST FUNCTION, and result is that it works

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
      console.log(response.data)
    };

    
    return (
        <div>
          <Form className="d-flex">
            <p>ApiTest.js</p>
            <Form.Control
              type="search"
              placeholder="Enter a search term"
              className="me-2"
              aria-label="Search"
              onChange = {(event) => setQuery(event.target.value)}
            />
            <Button variant="outline-success" onClick={searchArticles}>Search</Button>
          </Form>


{responseData  ? (
    <div>
          <h1>News Headlines</h1>
            <p>{responseData.totalResults} total results</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {responseData.articles.map(article => (
              <div key={article.url}>
                <ArticleCard 
                title={article.title} 
                image={article.urlToImage} 
                description={article.description} 
                url={article.url} 
                publish={article.publishedAt}/>
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

