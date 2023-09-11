import { useNavigate, useParams } from 'react-router-dom';
import ArtCard from '../../components/ArtCard/ArtCard';
import { useFetch } from '../../hooks/useFetch';
import { ArtProps } from '../../hooks/useArtWork';

import styles from './ArtCardPage.module.css';

interface ArtCardProps {
  data: ArtProps;
}
function ArtCardPage() {
  const { id } = useParams();

  const {
    data: artwork,
    isLoading,
    isError,
    error,
  } = useFetch<ArtCardProps>(`https://api.artic.edu/api/v1/artworks/${id}`);
  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';
  return (
    <div className={styles['art-card-page']}>
      <h1>Selected Artwork</h1>
      {isError && <div>{error?.message}</div>}
      {isLoading && (
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
      )}
      <div className={styles['art-card-component']}>
        <ArtCard
          title={artwork?.data.title}
          artist_title={artwork?.data.artist_title}
          image_id={artwork?.data.image_id}
          iiifBaseUrl={iiifBaseUrl}
        />
      </div>
    </div>
  );
}

export default ArtCardPage;
