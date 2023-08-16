import React, { useState, useEffect } from 'react';

interface Artwork {
  id: number;
  title: string;
}

function ArtGrid() {
  const [arts, setArts] = useState<Artwork[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=100&fields=id,title,image_id',
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArts(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error.message || 'An error occurred');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Art Gallery</h1>
      <ul>
        {arts.map((art) => (
          <li key={art.id}>
            <h2>{art.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtGrid;
