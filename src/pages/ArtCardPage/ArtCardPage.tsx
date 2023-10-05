import { useNavigate, useParams } from 'react-router-dom';
import ArtCard from '../../components/ArtCard/ArtCard';
import { useArtworkById } from '../../hooks/useArtworkById';
import Loading from '../../components/Loading/Loading';

import styles from './ArtCardPage.module.css';

function ArtCardPage() {
  const { id } = useParams();

  const { artwork, isLoading, error } = id
    ? useArtworkById(id)
    : { artwork: undefined, isLoading: false, error: undefined };

  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';

  const navigate = useNavigate();
  return (
    <div className={styles['art-card-page']}>
      <h1>Selected Artwork</h1>
      {isLoading && <Loading />}
      <div className={styles['art-card-component']}>
        <div className={styles['art-card']}>
          <ArtCard
            id={artwork?.id}
            title={artwork?.title}
            artist_title={artwork?.artist_title}
            image_id={artwork?.image_id}
            artist_display={artwork?.artist_display}
            iiifBaseUrl={iiifBaseUrl}
          />
        </div>
        <h3 className={styles['detail-title']}>Details of selected artwork</h3>
        <p className={styles['description']}>
          Style:
          <span className={styles['description-text']}>{artwork?.style_title}</span>
        </p>
        <p className={styles['description']}>
          Classification:
          <span className={styles['description-text']}>{artwork?.classification_title}</span>
        </p>
        <p className={styles['description']}>
          Place of origin:
          <span className={styles['description-text']}>{artwork?.place_of_origin}</span>
        </p>
        <p className={styles['description']}>
          Description of creator:
          <span className={styles['description-text']}>{artwork?.artist_display}</span>
        </p>
        <p className={styles['description']}>
          Materials used:
          <span className={styles['description-text']}>{artwork?.medium_display}</span>
        </p>
        <p className={styles['description']}>
          Publication history:
          <span className={styles['description-text']}>{artwork?.publication_history}</span>
        </p>
      </div>
      <button className={styles['back-button']} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default ArtCardPage;
