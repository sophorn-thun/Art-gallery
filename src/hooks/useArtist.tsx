import useData from './useData';

interface Artist {
  artist_id: number;
  artist_title: string;
}
function useArtist(additionalParams = 'limit=20') {
  const endPoint = 'artists/search?';
  const { data, error, isLoading } = useData<Artist>(endPoint, additionalParams);
  return { artists: data, error, isLoading };
}

export default useArtist;
