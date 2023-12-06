import React, { useEffect, useState } from "react";
import Link from 'next/link';
//import "./styles.css";

function MovieDetails(){

    const [movieDetails, setMovieDetails] = useState({
        moviePoster: "",
        movieTitle: "",
        releaseDate: "",
        runtime: 0,
        language: "",
        rating: 0,
        votes: 0,
        director: "",
        overview: "",
        mainActors: [],
        relatedMovies: [],
        trailer: "",
        productionCompany: [{
            name: "",
            logo_path: "",
        }],
    });

    const movieId = 901362;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQzOTMyYWM3NGY4YTRmNmMzYzZiNTllMGUzMzg1MiIsInN1YiI6IjY1NjYyMTY5M2Q3NDU0MDEwYmUwZjc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZfDZO-J9xxD0WLyHVESEU5w79-xq7sEKN-EsyjGTjE'
        }
      };
      useEffect (()=>{
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => {console.log(response)
        setMovieDetails({
        moviePoster:response.poster_path,
        movieTitle:response.title,
        releaseDate: response.release_date,
        runtime: response.runtime,
        language: response.original_language,
        rating: response.popularity,
        votes: response.vote_count,
        director: response.original_title,
        overview: response.overview,
        mainActors: [],
        relatedMovies: [],
        trailer: "",
        productionCompany: response.production_companies,
          })})
        .catch(err => console.error(err));
    },[]);

    return(
     <div className="container mx-auto p-4">
        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.moviePoster}`} width={400} />
        <p className="text-2xl font-bold mb-2">{movieDetails.movieTitle}</p>
        <p className="text-black-500 mb-2"><b>Release Date: </b>{movieDetails.releaseDate}</p>
        <p className="mb-2"><b>Runtime: </b>{movieDetails.runtime}</p>
        <p className="mb-2"><b>Language: </b>{movieDetails.language}</p>
        <p className="mb-2"><b>Rating: </b>{movieDetails.rating}</p>
        <p className="mb-2"><b>Votes: </b>{movieDetails.votes}</p>
        <p className="mb-2"><b>Director: </b>{movieDetails.director}</p>
        <p className="mb-4"><b>Overview: </b>{movieDetails.overview}</p>
        <div className="flex items-center">
        <p className="mr-2">{movieDetails.productionCompany[0].name}</p>
        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.productionCompany[0].logo_path}`}
        className="h-8"
        alt="Production Company Logo"
        />
        </div>
    </div>
            );
}

export default MovieDetails;