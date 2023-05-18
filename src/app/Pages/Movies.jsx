import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Movie from "../Components/Movie";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../Components/Pagination";
import { getGenreMovies } from "../../features/genres/GenreAPI";
import Button from "react-bootstrap/Button";
import { getMoviesByGenre } from "../../features/movies/MoviesAPI";

const Movies = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const [genreURL, setGenreUrl] = useState("28");

  const addCategory = (id) => {

    setGenreUrl(id);
    console.log(id);
  };

  useEffect(() => {
    dispatch(getGenreMovies());
    dispatch(getMoviesByGenre(genreURL));
    console.log(genreURL);
  }, [dispatch, genreURL]);
  const state = useSelector((state) => state);

  if (state.movies.isLoading) {
    return <h1>isLoading...</h1>;
  }
  if (state.movies.data === null) {
    return <h1>theres nothing in there</h1>;
  }

  if (state.genres.isLoading) {
    return <h1>isLoading...</h1>;
  }
  if (state.genres.data === null) {
    return <h1>theres nothing in there</h1>;
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = state.movies.data.results.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(state.movies.data.results.length / recordsPerPage);
  const renderedListItems = currentRecords.map((movie) => {
    return (
      <Col key={movie.id}>
        <Movie  movie={movie} />
      </Col>
    );
  });
  const rendredGenreItems = state.genres.data.genres.map((genre) => {
    return (
      <Col key={genre.id} className="m-1">
        <Button
          variant="secondary"
          onClick={() => {
            addCategory(genre.id);
          }}
        >
          {genre.name}
        </Button>
      </Col>
    );
  });

  return (
    <>
      <Container fluid>
        <Row className="m-1" xs="auto">
          {rendredGenreItems}
        </Row>
      </Container>

      <Row className="g-4 m-4">{renderedListItems}</Row>

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Movies;
