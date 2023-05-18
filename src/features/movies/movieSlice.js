import { createSlice } from "@reduxjs/toolkit";
import { getSimilarMovies,getPopularMovies,getTvSeries,getMoviesByGenre,getMoviesByQueries } from "./MoviesAPI";




const movieSlice =createSlice ({
  name:"movies",
  initialState:{
    data:null,
    isLoading:false,
    isError:false,
  },
  extraReducers:(builder) =>{
    builder.addCase(getSimilarMovies.pending,(state,action)=>{
      state.isLoading=true;
    });
  builder.addCase(getSimilarMovies.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.data=action.payload;
  });
  builder.addCase(getSimilarMovies.rejected,(state,action)=>{
    console.log('error',action.payload);
    state.isError=true;
  });
  builder.addCase(getPopularMovies.pending,(state,action)=>{
    state.isLoading=true;
  });
builder.addCase(getPopularMovies.fulfilled,(state,action)=>{
  state.isLoading=false;
  state.data=action.payload;
});
builder.addCase(getPopularMovies.rejected,(state,action)=>{
  console.log('error',action.payload);
  state.isError=true;
});
builder.addCase(getTvSeries.pending,(state,action)=>{
  state.isLoading=true;
});
builder.addCase(getTvSeries.fulfilled,(state,action)=>{
state.isLoading=false;
state.data=action.payload;
});
builder.addCase(getTvSeries.rejected,(state,action)=>{
console.log('error',action.payload);
state.isError=true;
});
builder.addCase(getMoviesByGenre.pending,(state,action)=>{
  state.isLoading=true;
});
builder.addCase(getMoviesByGenre.fulfilled,(state,action)=>{
state.isLoading=false;
state.data=action.payload;

});
builder.addCase(getMoviesByGenre.rejected,(state,action)=>{
console.log('error',action.payload);
state.isError=true;
});
builder.addCase(getMoviesByQueries.pending,(state,action)=>{
  state.isLoading=true;
});
builder.addCase(getMoviesByQueries.fulfilled,(state,action)=>{
state.isLoading=false;
state.data=action.payload;

});
builder.addCase(getMoviesByQueries.rejected,(state,action)=>{
console.log('error',action.payload);
state.isError=true;
});

  },
});

export default movieSlice.reducer;
