import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ArtProps } from '../../hooks/useArtWork';
import { GlobalStateContext } from '../../context/GlobalState';
import styles from './ArtCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

interface ArtCardProps extends ArtProps {
  iiifBaseUrl?: string;
  artist_title?: string | undefined;
}

function ArtCard({ id, title, image_id, artist_title, iiifBaseUrl }: ArtCardProps) {
  if (typeof id === 'undefined') {
    return null;
  }

  const globalState = useContext(GlobalStateContext);
  if (!globalState) {
    throw new Error('ArtCard must be used within a GlobalStateProvider');
  }

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
      <div className={styles['art-card']}>
        {image_id && (
          <img
            src={`${iiifBaseUrl}${image_id}/full/843,/0/default.jpg`}
            alt={title}
            className={styles['art-card img']}
            key={id}
          />
        )}
        <div className={styles['title-container']}>
          <p>Title: {title}</p>
          {state.loggedIn && (
            <span onClick={handleSaveImage} className={styles['icon']}>
              <FontAwesomeIcon
                icon={faHeart}
                className={isImageSaved ? styles['heart-icon-red'] : styles['heart-icon']}
              />
            </span>
          )}
        </div>
        <p>Artist Name: {artist_title}</p>
      </div>
    </Link>
  );
}

export default ArtCard;
