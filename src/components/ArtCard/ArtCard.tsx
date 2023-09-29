import { Link } from 'react-router-dom';
import { ArtProps } from '../../hooks/useArtWork';
import useGlobalState from '../../context/UseGlobalState';
import styles from './ArtCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface ArtCardProps extends ArtProps {
  iiifBaseUrl?: string;
  artist_title?: string | undefined;
  className?: string;
}

function ArtCard({ id, title, image_id, artist_title, iiifBaseUrl, className }: ArtCardProps) {
  if (typeof id === 'undefined') {
    return null;
  }

  const globalState = useGlobalState();

  const { state, setState } = globalState;
  const isImageSaved = state.savedImages && state.savedImages.includes(id);

  const handleSaveImage = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isImageSaved) {
      setState({
        ...state,
        savedImages: state.savedImages?.filter((imageId) => imageId !== id),
      });
    } else {
      const currentSavedImages = state.savedImages || [];
      setState({
        ...state,
        savedImages: [...currentSavedImages, id],
      });
    }
  };

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
          <h4>Title: {title}</h4>
          {state.loggedIn && (
            <span onClick={handleSaveImage} className={styles['icon']}>
              <FontAwesomeIcon
                icon={faHeart}
                className={isImageSaved ? styles['heart-icon-red'] : styles['heart-icon']}
              />
            </span>
          )}
        </div>
        <h4>Artist Name: {artist_title}</h4>
      </div>
    </Link>
  );
}

export default ArtCard;
