import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import SearchButtonQuery from './SearchButtonQuery';


function NavbarLayout() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >News Aggregator</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className="me-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/search?c=business" activeClassName="active">Business</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search?c=technology" activeClassName="active">Technology</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search?c=science" activeClassName="active">Science</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search?c=health" activeClassName="active">Health</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search?c=sports" activeClassName="active">Sports</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search?c=entertainment" activeClassName="active">Entertainment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search?c=general" activeClassName="active">Other</Nav.Link>
          </Nav.Item>
        </Nav>

          <SearchButtonQuery/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;