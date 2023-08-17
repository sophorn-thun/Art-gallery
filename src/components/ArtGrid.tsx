import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard';

export interface Artwork {
  id: number;
  title: string;
  image_id: string;
}

export interface ApiResponse {
  data: Artwork[];
}

function ArtGrid() {
  const [arts, setArts] = useState<Artwork[]>([]);
  const [error, setError] = useState<string | null>(null);
  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';

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
    <div className="art-grid">
      {arts.map((art) => (
        <ArtCard key={art.id} art={art} iiifBaseUrl={iiifBaseUrl} />
      ))}
    </div>
  );
}

export default ArtGrid;
