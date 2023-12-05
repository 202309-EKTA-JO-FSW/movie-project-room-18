import React, { useEffect, useState } from 'react';
import Card from '@/components/Cards';
import Image from 'next/image';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f75440014fddc5b0ea00553326c49c15';

const ActorsPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/person/popular?language=en-US&page=1&api_key=${API_KEY}`
        );
        const data = await res.json();
        setActors(data.results);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    fetchActors();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='container my-7'>
      <h1 className="bg-gray-100 p-2 rounded mt-2 container my-7 flex items-center justify-center" style={{height: "60px", width: "150px"}}>Actors</h1>
      <div className='d-flex flex-wrap gap-3'>
        {actors.map(actor => {
           return <Card key={actor.id} actor={actor}/>
        })}
        </div>
    </div>
  );
};

export default ActorsPage;
// key={actor.id}>{actor.name}