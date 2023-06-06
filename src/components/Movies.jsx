import React, { useState } from 'react'
import { useEffect } from 'react';
import MovieList from './MovieList';

export default function Movies() {
    const [movies,setMovies]=useState([]);
    const [series,setSeries]=useState([]);
    useEffect(() => {
        fetch(
          "  https://api.tvmaze.com/search/shows?q=all"
        )
          .then((res) => res.json())
          .then((data) => setMovies(data));
      }, []);
      useEffect(() => {
        fetch(
          " https://www.omdbapi.com/?s=action&type=series&apikey=bfaccdb0"
        )
          .then((res) => res.json())
          .then((data) => setSeries(data.Search));
      }, []);  

      const currentMovies= movies.map((movie,index)=>{
       return (
         <div className='h-3h w-3h  mx-3 min-w-[300px]' key={index}>
           <img src={movie.show.image.medium} alt="" className='rounded-2xl w-full max-h-full h-full' />
           <p className='font-black'>{movie.show.name}</p>
           <button className='rounded-lg bg-red-600 text-white h-10 w-30 p-2'>View Details</button>
         </div>
       );
        
      })
      const currentSeries= series.map((serie,index)=>{
        return (
          <div className='h-3h w-3h  mx-2 min-w-[300px]' key={index}>
            <img src={serie.Poster} alt="" className='rounded-2xl w-full max-h-full h-full' />
          </div>
        );
         
       })
      

  return (
    <div>
     <MovieList list={currentMovies} name='Shows'/>
     
    </div>
  );
}
