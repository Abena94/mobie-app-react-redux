import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { getMoviesByQueries } from '../../features/movies/MoviesAPI';
export default function Footer(props) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }
  const search = searchValue => {
    dispatch(getMoviesByQueries(searchValue));
    };
  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
    <Container>
      <Navbar.Brand href="#home">Movie App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/"}>Trending</Nav.Link>
          <Nav.Link as={NavLink} to={"/movies"}>Movies</Nav.Link>
          <Nav.Link as={NavLink} to={"/tv"}>TV Series</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
          onChange={handleSearchInputChanges}
            />
            <Button variant="outline-success" onClick={callSearchFunction} type="submit" value="SEARCH"  as={NavLink} to={"/search"}>Search</Button>
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
