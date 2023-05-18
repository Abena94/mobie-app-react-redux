import { createSlice } from "@reduxjs/toolkit";
import { getGenreMovies } from "./GenreAPI";

const genreSlice=createSlice({
    name:"genres",
    initialState:{
      data:null,
      isLoading:false,
      isError:false,
    },
    extraReducers:(builder) =>{
      builder.addCase(getGenreMovies.pending,(state,action)=>{
        state.isLoading=true;
      });
    builder.addCase(getGenreMovies.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.data=action.payload;
    });
    builder.addCase(getGenreMovies.rejected,(state,action)=>{
      console.log('error',action.payload);
      state.isError=true;
    });
    }
  });

  export default genreSlice.reducer;