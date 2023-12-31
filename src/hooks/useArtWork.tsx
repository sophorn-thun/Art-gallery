import { useMemo } from 'react';
import useRouteGlobalData from './useRouteGlobalData';

export interface ArtProps {
  id?: number;
  title?: string;
  image_id?: string;
  date_start?: number;
  artist_id?: number;
  artist_title?: string;
  artwork_type_title?: string;
  style_title?: string;
  classification_title?: string;
  place_of_origin?: string;
  artist_display?: string;
  medium_display?: string;
  publication_history?: string;
}

export interface ApiResponse {
  data: ArtProps[];
}

export type SortType = 'date' | 'title' | 'artist' | null;
export type ArtworkType = 'Painting' | 'Sculpture' | 'Print' | null;

export default function useArtWork(
  searchTerm: string = '',
  size: number = 12,
  sortType: SortType = null,
  artworkType: ArtworkType = null,
  page: number = 1,
) {
  let combinedSearchTerm = searchTerm;

  if (artworkType) {
    combinedSearchTerm = `${searchTerm} ${artworkType}`.trim();
  }

  const baseEndpoint = `https://api.artic.edu/api/v1/artworks/search`;

  const fields = [
    'id',
    'title',
    'image_id',
    'date_start',
    'artist_id',
    'artist_title',
    'artwork_type_title',
    'style_title',
    'classification_title',
    'artist_display',
    'medium_display',
    'publication_history',
  ].join(',');

  const endpoint = `${baseEndpoint}?q=${encodeURIComponent(
    combinedSearchTerm,
  )}&size=${size}&page=${page}&fields=${fields}`;

  const { data, isLoading, error } = useRouteGlobalData<ApiResponse>(endpoint);

  const sortedData = useMemo(() => {
    if (!data) return [];

    let processedData = [...data.data];

    switch (sortType) {
      case 'date':
        processedData.sort((a, b) => (b.date_start || -Infinity) - (a.date_start || -Infinity));
        break;
      case 'title':
        processedData.sort((a, b) => a.title?.localeCompare(b.title || '') || 0);
        break;
      case 'artist':
        processedData.sort((a, b) => a.artist_title?.localeCompare(b.artist_title || '') || 0);
        break;
      default:
        break;
    }
    return processedData;
  }, [data, sortType]);

  return { data: sortedData, isLoading, error };
}
