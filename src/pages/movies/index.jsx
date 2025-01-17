import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/index';
import Footer from  '../../components/Footer/index';
import { ChakraProvider } from '@chakra-ui/react';
import Link from "next/link";

function Movies(){
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

    return( 

      <div>
      <ChakraProvider>
      <Navbar/>
   <div className="bg-gray-100 min-h-screen">
     <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
       {
        movies.map((movie) => (
         <li key={movie.id} className="rounded overflow-hidden shadow-lg">
           {/* <Link href={`/movies/${movie.id}`} > */}
           <Link href={`/movies/${encodeURIComponent(movie.id)}`} className="hover:underline">
               <img className="w-full" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
               <div className="px-6 py-4">
                 <div className="font-bold text-xl mb-2">{movie.title}</div>
               </div>
           </Link>
           
      
         </li>
         
       ))}
     </ul>
     </div>
     <Footer/>
      </ChakraProvider>
   </div>


      );
}
export default Movies;
