import React, { useState, useEffect } from 'react';
import ArtCard from '../ArtCard/ArtCard';
import styles from './ArtGrid.module.css';
import { ArtGridProps, fetchArtworks } from '../../services/fetchArtworkApi';

function ArtGrid() {
  const [arts, setArts] = useState<ArtGridProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';

  useEffect(() => {
    setLoading(true);
    fetchArtworks()
      .then((data) => {
        setArts(data.data);
      })
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error.message || 'An error occurred');
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles['art-grid']}>
      {arts.map((art) => (
        <ArtCard
          key={art.id}
          id={art.id}
          title={art.title}
          image_id={art.image_id}
          iiifBaseUrl={iiifBaseUrl}
        />
      ))}
    </div>
  );
}

export default ArtGrid;
