import { Artwork } from './ArtGrid';

interface Props {
  art: Artwork;
  iiifBaseUrl: string;
}
function ArtCard({ art, iiifBaseUrl }: Props) {
  return (
    <div className="art-card">
      {/* <h2>{art.title}</h2> */}
      {art.image_id && (
        <img
          src={`${iiifBaseUrl}${art.image_id}/full/843,/0/default.jpg`}
          alt={art.title}
          className="art-image"
        />
      )}
    </div>
  );
}

export default ArtCard;
