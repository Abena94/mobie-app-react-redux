import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './app/Components/Footer';
import Footer from './app/Components/Header';
import Trending from './app/Pages/Trending';
import Movies from './app/Pages/Movies';
import TV from './app/Pages/TV';
import Search from './app/Pages/Search';


function App() {

  return (
    <div style={{ background: "linear-gradient( #403943,#9D9B9F)" }}>
        <BrowserRouter>
    
    <Footer />
    <Routes>
      <Route path="/" element={<Trending />} exact />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv" element={<TV />} exact />
      <Route path="/search" element={<Search />} exact />
    </Routes>
    <Header />
    </BrowserRouter>
    </div>
  
  );
}

export default App;
