import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTvSeries = createAsyncThunk("getTvSeries", async () => {
    const response=await fetch("https://api.themoviedb.org/3/tv/popular?api_key=602a34398e4e0c990bd35d6ef3231da0&language=en-US");
    return response.json();
  });
  
  
  export const getSimilarMovies = createAsyncThunk("getSimilarMovies", async () => {
    const response=await fetch("https://api.themoviedb.org/3/movie/980078/similar?api_key=602a34398e4e0c990bd35d6ef3231da0");
    return response.json();
  });
  export const getPopularMovies = createAsyncThunk("getPopularMovies",async()=>{
    const response=await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=602a34398e4e0c990bd35d6ef3231da0");
    return response.json();
  });

  export const getMoviesByGenre = createAsyncThunk("getMoviesByGenre",async(genre_id)=>{
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=602a34398e4e0c990bd35d6ef3231da0&with_genres=${genre_id}`);
      return response.json(); 
    
  });

  export const getMoviesByQueries = createAsyncThunk("getMoviesByQueries",async(query)=>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=602a34398e4e0c990bd35d6ef3231da0&query=${query}`);
      return response.json(); 
  })

 