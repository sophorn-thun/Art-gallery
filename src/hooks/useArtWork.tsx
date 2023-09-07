import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

export interface ArtProps {
  id: number;
  title: string;
  image_id: string;
  date_start?: number;
  artist_id?: number;
  artist_title?: string;
}

export interface ApiResponse {
  data: ArtProps[];
}

export type SortType = 'date' | 'title' | 'artist' | null;

function useArtWork(searchTerm: string = '', size: number = 20, sortType: SortType = null) {
  const endpoint = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(
    searchTerm,
  )}&size=${size}&fields=id,title,image_id,date_start`;

  const { data, isLoading, isError, error } = useFetch<ApiResponse>(endpoint);

  const [sortedData, setSortedData] = useState<ArtProps[]>([]);

  useEffect(() => {
    if (data) {
      let sorted = [...data.data];
      switch (sortType) {
        case 'date':
          sorted.sort((a, b) => (b.date_start || -Infinity) - (a.date_start || -Infinity));
          break;
        case 'title':
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'artist':
          sorted.sort((a, b) => a.artist_title?.localeCompare(b.artist_title || '') || 0);
          break;
        default:
          break;
      }
      setSortedData(sorted);
    }
  }, [data, sortType]);

  return { data: sortedData, isLoading, isError, error };
}

export default useArtWork;
