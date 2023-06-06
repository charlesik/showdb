import React, { useState } from 'react'
import { useEffect } from 'react';
import MovieList from './MovieList';
import { Link } from 'react-router-dom';

export default function Movies() {
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        fetch(
          "  https://api.tvmaze.com/search/shows?q=all"
        )
          .then((res) => res.json())
          .then((data) => setMovies(data));
      }, []);

      const currentMovies= movies.map((movie,index)=>{
       return (
         <div className='h-3h w-3h  mx-3 min-w-[300px]' key={index}>
           <img src={movie.show.image.medium} alt="" className='rounded-2xl w-full max-h-full h-full' />
           <p className='font-black'>{movie.show.name}</p>
           <Link to={ `/details/${movie.show.name}`} > <button className='rounded-lg bg-red-600 text-white h-10 w-30 p-2 '> View Details</button></Link>
         </div>
       );
        
      })
      

  return (
    <div>
     <MovieList list={currentMovies} name='Shows'/>
     
    </div>
  );
}
