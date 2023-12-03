const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const GetSingleActor = async (id) => {
  const res = await fetch(`${BASE_URL}/person/${id}?language=en-US&api_key=${API_KEY}`);
  
  if (!res.ok) {
    throw new Error(`Error fetching actor with ID ${id}`);
  }

  const data = await res.json();
  return data;
};


export const GetSingleActorImage = async (id) => {
    const res = await fetch(`${BASE_URL}/person/${id}/images?api_key=${API_KEY}`);
    
    if (!res.ok) {
        throw new Error(`Error fetching actor images with ID ${id}`);
    }

    const data = await res.json();
    return data;
};
  
