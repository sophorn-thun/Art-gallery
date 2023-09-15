import { Link } from 'react-router-dom';
import { ArtProps } from '../../hooks/useArtWork';
import styles from './ArtCard.module.css';

interface ArtCardProps extends ArtProps {
  iiifBaseUrl?: string;
  artist_title?: string | undefined;
}

function ArtCard({ id, title, image_id, artist_title, iiifBaseUrl }: ArtCardProps) {
  return (
    <Link to={`/Artwork/${id}`}>
      <div className={styles['art-card']}>
        {image_id && (
          <img
            src={`${iiifBaseUrl}${image_id}/full/843,/0/default.jpg`}
            alt={title}
            className={styles['art-card img']}
            key={id}
          />
        )}
        <p>Title: {title}</p>
        <p>Artist Name: {artist_title}</p>
      </div>
    </Link>
  );
}

export default ArtCard;
