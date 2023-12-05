import React, { useEffect } from 'react';

async function GetSingleActor(id) {
  const API_KEY = "94efbb958c3750928aa5e84dbe4193bf";
  const BASE_URL = "https://api.themoviedb.org/3";
  const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGVmYmI5NThjMzc1MDkyOGFhNWU4NGRiZTQxOTNiZiIsInN1YiI6IjY1Njg4YWQ0OWFmZmMwMDBlYmNmNTcyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oRkdxyjYiIN4Iqw5lmAUu43JCkC2ujJcjzNsnc2B1rA";

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': AUTH_TOKEN
    }
  };

  const res = await fetch(`${BASE_URL}/person/${id}?language=en-US`, options);

  console.log(res.status);  // Log the HTTP status code

  if (!res.ok) {
    const errorText = await res.text();  // Log the response text for more details
    console.error(errorText);
    throw new Error(`Error fetching actor with ID ${id}`);
  }

  const data = await res.json();
  return data;
}

async function GetSingleActorImage(id) {
  const API_KEY = "94efbb958c3750928aa5e84dbe4193bf";
  const BASE_URL = "https://api.themoviedb.org/3";

  const res = await fetch(`${BASE_URL}/person/${id}/images?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`Error fetching actor images with ID ${id}`);
  }

  const data = await res.json();
  return data;
}

async function displayActorDetails(actorId) {
  try {
    const actorInfo = await GetSingleActor(actorId);
    const actorImage = await GetSingleActorImage(actorId);

    // Display actor details
    document.getElementById("actorName").innerText = `Actor Name: ${actorInfo.name}`;
    document.getElementById("gender").innerText = `Gender: ${actorInfo.gender}`;
    document.getElementById("popularity").innerText = `Popularity: ${actorInfo.popularity}`;
    document.getElementById("birthday").innerText = `Birthday: ${actorInfo.birthday}`;
    document.getElementById("biography").innerText = `Biography: ${actorInfo.biography}`;

    // Display actor image
    const element = document.getElementById("actorImage");
    if (actorImage.profiles && actorImage.profiles.length > 0) {
      const imagePath = actorImage.profiles[0].file_path;
      const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
      element.src = imageUrl;
    } else {
      console.log("No profiles found for the actor.");
    }

  } catch (error) {
    console.error(error);
  }
}

const ActorDetailsPage = () => {
  useEffect(() => {
    // Call the function with the actor ID you want to display
    displayActorDetails(500);
  }, []);

  return (
    <div>
      <h1></h1>
      <div id="actorDetails" style={styles.actorDetailsContainer}>
        <div style={styles.imageContainer}>
          <img id="actorImage" alt="Actor Image" style={styles.actorImage} />
        </div>
        <div id="actorInfo" style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td id="actorName"></td>
              </tr>
              <tr>
                <td></td>
                <td id="gender"></td>
              </tr>
              <tr>
                <td></td>
                <td id="popularity"></td>
              </tr>
              <tr>
                <td></td>
                <td id="birthday"></td>
              </tr>
              <tr>
                <td></td>
                <td id="biography"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  actorDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    textAlign: 'center',
  },
  actorImage: {
    maxWidth: '300px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  tableContainer: {
    width: '70%',
    margin: '20px 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};

export default ActorDetailsPage;
