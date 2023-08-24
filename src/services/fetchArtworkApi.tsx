export interface ArtGridProps {
  id: number;
  title: string;
  image_id: string;
}

export interface ApiResponse {
  data: ArtGridProps[];
}

export const fetchArtworks = async (): Promise<ApiResponse> => {
  const response = await fetch(
    'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=20&fields=id,title,image_id',
  );

  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data: ApiResponse = await response.json();
  return data;
};
