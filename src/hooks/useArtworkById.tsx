import { useFetch } from './useFetch';

interface ArtworkResponse {
  data: {
    id: number;
    title: string;
    image_id: string;
    artist_title: string;
    iiif_url: string;
  };
}

const BASE_API_URL = 'https://api.artic.edu/api/v1/artworks/';
const BASE_IIIF_URL = 'https://www.artic.edu/iiif/2/';

export const useArtworkById = (id: string) => {
  if (!id) {
    return {
      artwork: null,
      error: null,
      isLoading: false,
    };
  }

  const apiUrl = `${BASE_API_URL}${id}`;
  const { data, error, isLoading } = useFetch<ArtworkResponse>(apiUrl);

  const artwork = data?.data;

  if (artwork) {
    artwork.iiif_url = BASE_IIIF_URL;
  }

  console.log(apiUrl);
  console.log(artwork?.iiif_url);

  return {
    artwork,
    error,
    isLoading,
  };
};
