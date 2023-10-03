import Loading from '../../components/Loading/Loading';
import styles from './MemberPage.module.css';
import useGlobalState from '../../context/UseGlobalState';
import ArtCard from '../../components/ArtCard/ArtCard';
import { useArtworkById } from '../../hooks/useArtworkById';
import { NavLink } from 'react-router-dom';

interface Props {
  imageId: number;
}
function SavedArtworkItem({ imageId }: Props) {
  const { artwork, isLoading, error } = useArtworkById(imageId.toString());

  if (isLoading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>Error loading artwork</p>;

  return (
    <>
      <ArtCard
        key={artwork?.id}
        id={artwork?.id}
        title={artwork?.title}
        artist_title={artwork?.artist_title}
        image_id={artwork?.image_id}
        iiifBaseUrl={artwork?.iiif_url}
        className={styles['member-artcard']}
      />
    </>
  );
}

function MemberPage() {
  const globalState = useGlobalState();
  const { state } = globalState;
  const savedImages = state.savedImages;
  console.log('saved images: ', savedImages);

  return (
    <>
      {savedImages && savedImages.length > 0 ? (
        <>
          <h2 className={styles['welcome']}>Hello there! Here's your saved artwork collection:</h2>
          <div className={styles['saved-collection']}>
            {savedImages.map((imageId) => (
              <SavedArtworkItem key={`artwork-${imageId}`} imageId={imageId} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className={styles['welcome']}>
            Hello there, your artwork collection is empty.
            <span></span>
            <NavLink to={'/Artwork'}>Customize your collection</NavLink> by clicking on heart icon!
          </h2>
        </div>
      )}
    </>
  );
}

export default MemberPage;
