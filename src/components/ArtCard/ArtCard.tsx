import { ArtProps } from '../../hooks/useArtWork';
import styles from './ArtCard.module.css';

interface ArtCardProps extends ArtProps {
  iiifBaseUrl: string;
}

function ArtCard({ id, title, image_id, iiifBaseUrl }: ArtCardProps) {
  return (
    <div className={styles['art-card']}>
      {image_id && (
        <img
          src={`${iiifBaseUrl}${image_id}/full/843,/0/default.jpg`}
          alt={title}
          className={styles['art-card img']}
          key={id}
        />
      )}
      <p>{title}</p>
    </div>
  );
}

export default ArtCard;
