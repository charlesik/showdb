import React from 'react'
import { useState, useEffect } from 'react'

export default function Search() {
  const[search,setSearch]=useState(0);
  const[searchInput,setSearchInput]=useState('');
  useEffect(() => {
    fetch(
      ` https://www.omdbapi.com/?t=${searchInput}&type=movie&apikey=bfaccdb0`
    )
      .then((res) => res.json())
      .then((data) => setSearch(data));
  }, [searchInput]);

  function searchHandler(e){
    
  }
  function submitHandler(e){
    e.preventDefault()
    setSearchInput(e.target.elements.search.value)
  }
 
  

  return (
    <div>
      <div className="w-90 m-auto mt-10">
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="search">Search</label>
          <br />
          <input
            type="search"
            name="search"
            className="border border-black h-8 w-full "
            onChange={searchHandler}
          />
        </form>
      </div>
      {/* {search.Title} */}

      {search.Title && (
        <div className='flex justify-center mt-5 '>
          <div className="h-3h w-3h  mx-2 min-w-[300px]">
            <img
              src={search.Poster}
              alt=""
              className="rounded-2xl w-full max-h-full h-full"
            />
          </div>
          <div className='h-3h w-3h  mx-2 min-w-[300px] text-white bg-black text-center hidden lg:block md:block'>
            <p className='text-xl font-black mb-4'>{search.Title}</p>
            <p className='font-bold mb-4'>Actors: {search.Actors}</p>
            <p className='font-bold mb-4'>Country: {search.Country}</p>
            <p className='font-bold mb-4'>Genre: {search.Genre}</p>
            <p className='font-bold mb-4'>Writer: {search.Writer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
