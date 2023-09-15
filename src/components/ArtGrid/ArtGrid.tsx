import ArtCard from '../ArtCard/ArtCard';
import styles from './ArtGrid.module.css';
import { ArtProps } from '../../hooks/useArtWork';
import Loading from '../Loading/Loading';

interface ArtGridProps {
  arts: ArtProps[];
  loading: boolean;
}

function ArtGrid({ arts, loading }: ArtGridProps) {
  const iiifBaseUrl = 'https://www.artic.edu/iiif/2/';

  if (loading) return <Loading />;

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
          artist_title={art.artist_title}
          image_id={art.image_id}
          iiifBaseUrl={iiifBaseUrl}
        />
      ))}
    </div>
  );
}

export default ArtGrid;
