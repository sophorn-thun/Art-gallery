import React, { useState, useEffect } from 'react';
import ArtCard from '../ArtCard/ArtCard';
import styles from './ArtGrid.module.css';

export interface ArtGridProps {
  id: number;
  title: string;
  image_id: string;
}

export interface ApiResponse {
  data: ArtGridProps[];
}

function ArtGrid() {
  const [arts, setArts] = useState<ArtGridProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';

  useEffect(() => {
    fetch(
      'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=20&fields=id,title,image_id',
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
    <div className={styles['art-grid']}>
      {arts.map((art) => (
        <ArtCard id={art.id} title={art.title} image_id={art.image_id} iiifBaseUrl={iiifBaseUrl} />
      ))}
    </div>
  );
}

export default ArtGrid;
