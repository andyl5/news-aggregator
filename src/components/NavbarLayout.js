import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import SearchButtonQuery from './SearchButtonQuery';


function NavbarLayout() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">News Aggregator
          {/* <Link to="/">News Aggregator</Link> */}
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className="me-auto">
          {/* Add to="" and figure out what to put here */}
            {/* <Nav.Link >Business</Nav.Link> */}
            <Link to={"/search?c=business"}>Business</Link>

            <Link to={"/search?c=technology"}>Technology</Link>
            <Link to={"/search?c=science"}>Science</Link>
            <Link to={"/search?c=health"}>Health</Link>
            <Link to={"/search?c=sports"}>Sports</Link>
            <Link to={"/search?c=entertainment"}>Entertainment</Link>
            <Link to={"/search?c=general"}>Other</Link>


            {/* <Nav.Link>Technology</Nav.Link>
            <Nav.Link>Science</Nav.Link>
            <Nav.Link>Health</Nav.Link>
            <Nav.Link>Sports</Nav.Link>
            <Nav.Link>Entertainment</Nav.Link>
            <Nav.Link>Miscellaneous</Nav.Link> */}
          </Nav>

          <SearchButtonQuery/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;