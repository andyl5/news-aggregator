import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchButtonQuery() {
  const [query, setQuery] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById("search-btn").click();
    }
  };

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Enter a search term"
          className="me-2"
          aria-label="Search"
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Link to={`/search?q=${query}`}>
          <Button id="search-btn" variant="outline-success">Search</Button>
        </Link>
      </Form>
    </div>
  );
}

export default SearchButtonQuery;
