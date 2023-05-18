import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Components/Pagination";
import Movie from "../Components/Movie";
import { Row,Col } from "react-bootstrap";
import {  getPopularMovies } from "../../features/movies/MoviesAPI";

export default function Search() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = state.movies.data.results.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
useEffect(()=>{
  dispatch(getPopularMovies());
},[dispatch]);



  const nPages = Math.ceil(state.movies.data.results.length / recordsPerPage);
  const renderedListItems = currentRecords.map((movie) => {
    return (
      <Col ey={movie.id}>
        <Movie key={movie.id} movie={movie} />
      </Col>
    );
  });
  return (
    <>
    <Row className="g-4 m-4">{renderedListItems}</Row>

    <Pagination
      nPages={nPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  </>
  )
}
