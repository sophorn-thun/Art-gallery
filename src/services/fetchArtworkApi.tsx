export interface ArtGridProps {
  id: number;
  title: string;
  image_id: string;
}

export interface ApiResponse {
  data: ArtGridProps[];
}

export const fetchArtworks = async (searchTerm?: string): Promise<ApiResponse> => {
  let baseURL =
    'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=20&fields=id,title,image_id';

  const searchURL = searchTerm
    ? `${baseURL}&query[term][keyword]=${encodeURIComponent(searchTerm)}`
    : baseURL;

  const response = await fetch(searchURL);

  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data: ApiResponse = await response.json();
  return data;
};
