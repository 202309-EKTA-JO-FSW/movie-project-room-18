import React, { useEffect, useState } from 'react';
import Card from '@/components/Cards';
import Navbar from '@/components/Navbar';
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
  }, []);

  return (
     <div className='container mx-auto px-0 pt-0 bg-white text-black text-center'>
     <Navbar/>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {actors.map(actor => (
          <Card key={actor.id} actor={actor} className="transform hover:scale-125 transition duration-700" />
        ))}
        </div>
    </div>
  );
};

export default ActorsPage;
