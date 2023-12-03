import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import{
ColorModeScript, // Import ColorModeScript from Chakra UI
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';


import Hero from '@/components/Hero';
const Home = () => {
  const[movies,SetMovies]=useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQzOTMyYWM3NGY4YTRmNmMzYzZiNTllMGUzMzg1MiIsInN1YiI6IjY1NjYyMTY5M2Q3NDU0MDEwYmUwZjc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZfDZO-J9xxD0WLyHVESEU5w79-xq7sEKN-EsyjGTjE'
    }
  };
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {console.log(response.results);
    SetMovies(response.results)})
    .catch(err => console.error(err));

  },[]);

  return (
    <div>
       <ChakraProvider>
       <Nav/> 
       <Hero/>
       </ChakraProvider>
        
       
      
      <ul>
        { 
         
         movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
