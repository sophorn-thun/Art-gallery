import { useNavigate, useParams } from 'react-router-dom';
import ArtCard from '../../components/ArtCard/ArtCard';
import { useFetch } from '../../hooks/useFetch';
import { ArtProps } from '../../hooks/useArtWork';
import Loading from '../../components/Loading/Loading';

import styles from './ArtCardPage.module.css';

interface ArtCardProps {
  data: ArtProps;
}

function ArtCardPage() {
  const { id } = useParams();

  const {
    data: artwork,
    isLoading,
    error,
  } = useFetch<ArtCardProps>(`https://api.artic.edu/api/v1/artworks/${id}`);

  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';
  const navigate = useNavigate();
  return (
    <>
      <div className={styles['art-card-page']}>
        <h1>Selected Artwork</h1>
        {isLoading && <Loading />}
        <div className={styles['art-card-component']}>
          <ArtCard
            id={artwork?.data.id}
            title={artwork?.data.title}
            artist_title={artwork?.data.artist_title}
            image_id={artwork?.data.image_id}
            iiifBaseUrl={iiifBaseUrl}
          />
          <p className={styles['description']}>
            Style:
            <span>{artwork?.data.style_title}</span>
          </p>
          <p className={styles['description']}>
            Classification:
            <span>{artwork?.data.classification_title}</span>
          </p>
          <p className={styles['description']}>
            Place of origin:
            <span>{artwork?.data.place_of_origin}</span>
          </p>
        </div>
        <div className={styles['container']}>
          <button className={styles['back-button']} onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default ArtCardPage;
