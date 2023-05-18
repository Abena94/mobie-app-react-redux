import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGenreMovies = createAsyncThunk("getGenreMovies",async()=>{
    const response=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=602a34398e4e0c990bd35d6ef3231da0&language=en-US");
    return response.json();
    
  });

 