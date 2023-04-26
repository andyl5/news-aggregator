import axios from 'axios'
import { useState, createContext } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ArticleCard from './ArticleCard';
import ArticleResultsList from './ArticleResultsList';

import { searchArticles } from './Api';

// This is the API where a user inputs a query into the API
// This function should only call the API
// Returns: response.data
// should pass this data into some SearchHomepage (idk what to call this)

function SearchApi(props) {

    const [query, setQuery] = useState("");
    const [responseData, setResponseData] = useState(null);

    const handleSearch = async () => {
      const data = await searchArticles(query);
      

      setResponseData(data);
      console.log(data)
      
    };

    
    return (
      <div>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter a search term"
              className="me-2"
              aria-label="Search"
              onChange = {(event) => setQuery(event.target.value)}
            />

            {/* The button should Nav.Link to another page on the website. The page will be ArticleResultsList. */}
            {/* JSON data will be passed to the ArticleResultsList component */}
            <Link to={"/results"}>
              <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            </Link>
          </Form>
        

        {/* REMOVE WHEN YOU HAVE INTERNET AND GOOGLE'D A BIT. This line is supposed to pass the JSON data to the next component */}
        <ArticleResultsList data={responseData}/>


      </div>
    )
}

export default SearchApi