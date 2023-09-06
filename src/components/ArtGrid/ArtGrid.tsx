import React, { useState, useEffect } from 'react';
import ArtCard from '../ArtCard/ArtCard';
import styles from './ArtGrid.module.css';
import { ArtProps } from '../../services/fetchArtworkApi';

interface ArtGridProps {
  arts: ArtProps[];
  loading: boolean;
  error: string | null;
}

function ArtGrid({ arts, loading, error }: ArtGridProps) {
  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';

  if (loading)
    return (
      <div className={styles['spinner']}>
        <h3>Content is loading...</h3>
        <div className={styles['lds-spinner']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!arts.length) {
    return <div>No artworks found!</div>;
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
