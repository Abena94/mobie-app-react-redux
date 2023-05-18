import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Movie from '../Components/Movie'
import { getPopularMovies } from '../../features/movies/MoviesAPI.js';
import { Row,Col} from 'react-bootstrap';
import Pagination from '../Components/Pagination'

const Trending = () => {
  const dispatch=useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  const state=useSelector((state)=>state);

  useEffect (()=>{
    dispatch(getPopularMovies());
  },[dispatch]);
  if(state.movies.isLoading){
    return<h1>isLoading...</h1>
  }
  if(state.movies.data===null){
    return<h1>theres nothing in there</h1>
  }
  
 
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = state.movies.data.results.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(state.movies.data.results.length / recordsPerPage);
  const renderedListItems = currentRecords.map((movie) => {
    return (
      <Col key={movie.id}>
        <Movie  movie={movie} />
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

export default Trending;