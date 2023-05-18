import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlice';
import genreReducer from '../features/genres/genreSlice'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    genres:genreReducer,
  },
});
