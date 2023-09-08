import { useFetch } from './useFetch';

interface Artist {
  artist_id: number;
  artist_title: string;
}
function useArtist() {
  const { data, isLoading, isError, error } = useFetch<Artist>(
    ' https://api.artic.edu/api/v1/artists?limit=20',
  );
  return { artists: data, isLoading, isError, error };
}

export default useArtist;
