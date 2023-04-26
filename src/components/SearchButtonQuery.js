import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchButtonQuery() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Enter a search term"
          className="me-2"
          aria-label="Search"
          onChange={(event) => setQuery(event.target.value)}
        />

        <Link to={`/search?q=${query}`}>
          <Button variant="outline-success">Search</Button>
        </Link>
      </Form>
    </div>
  );
}

export default SearchButtonQuery;
