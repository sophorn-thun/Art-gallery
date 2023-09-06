export interface ArtProps {
  id: number;
  title: string;
  image_id: string;
  date_start?: number;
}

export interface ApiResponse {
  data: ArtProps[];
}

export const fetchArtworks = async (
  searchTerm: string = '',
  size: number = 20,
): Promise<ApiResponse> => {
  const endpoint = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(
    searchTerm,
  )}&size=${size}&fields=id,title,image_id, date_start`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    console.error(await response.text());
    throw new Error('Network response was not ok.');
  }
  const data: ApiResponse = await response.json();
  return data;
};
