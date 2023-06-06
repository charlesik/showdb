import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ShowDetails(props) {
    const {id}=useParams()
    const [movies,setMovies]=useState([]);

    useEffect(() => {
        fetch(
            "  https://api.tvmaze.com/search/shows?q=all"
        )
          .then((res) => res.json())
          .then((data) => setMovies(data));
      }, []);


      const showDetails=movies.filter(movie=> movie.show.name===id).map((movie,index)=>{
        return(
            <div key={index} className="border w-[70%] m-auto text-center flex justify-between">
                <img src={movie.show.image.medium} className="w-[50%]" alt="" />
                <div className="text-center border w-[50%] p-5">
                <p className="font-black text-3xl">{movie.show.name}</p>
                <p>{movie.show.summary}</p></div>
            </div>
        )
      } )
    return (
        <div>
            {showDetails}
            
        </div>
    );
}

export default ShowDetails;