import { Link } from 'react-router-dom';
import { ArtProps } from '../../hooks/useArtWork';
import useSaveImage from '../../hooks/useSavedImage';
import styles from './ArtCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useGlobalState from '../../context/UseGlobalState';

interface ArtCardProps extends ArtProps {
  iiifBaseUrl?: string;
  artist_title?: string | undefined;
  className?: string;
}

function ArtCard({ id, title, image_id, artist_title, iiifBaseUrl, className }: ArtCardProps) {
  if (!id) {
    return null;
  }

  const { isImageSaved, handleSaveImage } = useSaveImage(id);

  const globalState = useGlobalState();
  const { state } = globalState;

  return (
    <Link to={`/Artwork/${id}`}>
      <div className={`${styles['art-card']} ${className || ''}`}>
        {image_id && (
          <img
            src={`${iiifBaseUrl}${image_id}/full/843,/0/default.jpg`}
            alt={title}
            className={styles['art-card img']}
            key={id}
          />
        )}
        <div className={styles['title-container']}>
          <h5>Title: {title}</h5>
          {state.loggedIn && (
            <span onClick={handleSaveImage} className={styles['icon']}>
              <FontAwesomeIcon
                icon={faHeart}
                className={isImageSaved ? styles['heart-icon-red'] : styles['heart-icon']}
              />
            </span>
          )}
        </div>
        <h5>Artist Name: {artist_title}</h5>
      </div>
    </Link>
  );
}

export default ArtCard;
