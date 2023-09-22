import { useNavigate, useParams } from 'react-router-dom';
import ArtCard from '../../components/ArtCard/ArtCard';
import { useArtworkById } from '../../hooks/useArtworkById';
import { ArtProps } from '../../hooks/useArtWork';
import Loading from '../../components/Loading/Loading';

import styles from './ArtCardPage.module.css';

interface ArtCardProps {
  data: ArtProps;
}

function ArtCardPage() {
  const { id } = useParams();

  const { artwork, isLoading, error } = id
    ? useArtworkById(id)
    : { artwork: undefined, isLoading: false, error: undefined };

  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';

  const navigate = useNavigate();
  return (
    <>
      <div className={styles['art-card-page']}>
        <h1>Selected Artwork</h1>
        {isLoading && <Loading />}
        <div className={styles['art-card-component']}>
          <ArtCard
            id={artwork?.id}
            title={artwork?.title}
            artist_title={artwork?.artist_title}
            image_id={artwork?.image_id}
            iiifBaseUrl={iiifBaseUrl}
          />
          <p className={styles['description']}>
            Style:
            <span>{artwork?.style_title}</span>
          </p>
          <p className={styles['description']}>
            Classification:
            <span>{artwork?.classification_title}</span>
          </p>
          <p className={styles['description']}>
            Place of origin:
            <span>{artwork?.place_of_origin}</span>
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
