import Image from 'next/image'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main>
//      <div>
//       <button className='btn btn-primary'>Button</button>
//      </div>
//     </main>
//   )
// }

// import React, { useEffect, useState } from 'react';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = 'f75440014fddc5b0ea00553326c49c15';

// const ActorsPage = () => {
//   const [actors, setActors] = useState([]);

//   useEffect(() => {
//     const fetchActors = async () => {
//       try {
//         const res = await fetch(
//           `${BASE_URL}/person/popular?language=en-US&page=1&api_key=${API_KEY}`
//         );
//         const data = await res.json();
//         setActors(data.results);
//       } catch (error) {
//         console.error('Error fetching actors:', error);
//       }
//     };

//     fetchActors();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div>
//       <h1>Popular Actors</h1>
//       <ul>
//         {actors.map(actor => (
//           <li key={actor.id}>{actor.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ActorsPage;

