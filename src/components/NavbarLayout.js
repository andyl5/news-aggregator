import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// import SearchApi from './SearchApi'
import ArticleResultsList from './ArticleResultsList';
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
          </Nav>

          <SearchButtonQuery/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;