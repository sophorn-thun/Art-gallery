import { useContext } from 'react';
import Loading from '../../components/Loading/Loading';
import styles from './MemberPage.module.css';
import { GlobalStateContext } from '../../context/GlobalState';
import ArtCard from '../../components/ArtCard/ArtCard';
import { useArtworkById } from '../../hooks/useArtworkById';

function MemberPage() {
  const globalState = useContext(GlobalStateContext);
  if (!globalState) {
    throw new Error('MemberPage must be used within a GlobalStateProvider');
  }

  const { state } = globalState;
  const savedImages = state.savedImages;

  return (
    <>
      {savedImages && savedImages.length > 0 ? (
        <>
          <h2 className={styles['welcome']}>Hello there! Here's your saved artwork collection:</h2>
          <div className={styles['saved-collection']}>
            {savedImages.map((imageId) => {
              const { artwork, isLoading, error } = useArtworkById(imageId.toString());

              console.log('ImageId: ', imageId);

              if (isLoading)
                return (
                  <p key={imageId}>
                    <Loading />
                  </p>
                );
              if (error) return <p key={imageId}>Error loading artwork</p>;

              return (
                <ArtCard
                  key={artwork?.id}
                  id={artwork?.id}
                  title={artwork?.title}
                  artist_title={artwork?.artist_title}
                  image_id={artwork?.image_id}
                  iiifBaseUrl={artwork?.iiif_url}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h2 className={styles['welcome']}>Hello there! Your artwork collection is empty!</h2>
      )}
    </>
  );
}

export default MemberPage;
