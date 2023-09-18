import { useFetch } from './useFetch';

interface Artist {
  artist_id: number;
  artist_title: string;
}
function useArtist() {
  const { data, isLoading, error } = useFetch<Artist>(
    ' https://api.artic.edu/api/v1/artists?limit=20',
  );
  return { artists: data, isLoading, error };
}

export default useArtist;
