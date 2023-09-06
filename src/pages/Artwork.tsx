import SearchInput from '../components/Search/SearchInput';
import Accordion from '../components/Accordion/Accordion';
import Pagination from '../components/Pagination/Pagination';
import Footer from '../components/Footer/Footer';
import ArtGrid from '../components/ArtGrid/ArtGrid';
import { useState, useEffect } from 'react';
import { ArtProps } from '../services/fetchArtworkApi';
import { fetchArtworks } from '../services/fetchArtworkApi';

function Artwork() {
  const [arts, setArts] = useState<ArtProps[]>([]);
  const [unsortedArts, setUnsortedArts] = useState<ArtProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDefaultArtworks = async () => {
      try {
        const data = await fetchArtworks();
        setArts(data.data);
        setUnsortedArts(data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch default artworks.');
        setLoading(false);
      }
    };
    fetchDefaultArtworks();
  }, []);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const data = await fetchArtworks(query);
      setArts(data.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching artworks');
      setLoading(false);
    }
  };

  const handleSortByDate = (isChecked: boolean) => {
    if (isChecked) {
      setArts((arts) => {
        const nullDatesArts = arts.filter(
          (art) => art.date_start === null || art.date_start === undefined,
        );
        console.log('Artworks with null or missing date_start:', nullDatesArts);
        const sortedArts = [...arts].sort((a, b) => {
          return (b.date_start || -Infinity) - (a.date_start || -Infinity);
        });
        return sortedArts;
      });
    } else {
      setArts(unsortedArts);
    }
  };
  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <Accordion
        defaultPanel="Sort"
        defaultPanelOption1="By Date"
        onSortByDate={handleSortByDate}
        defaultPanelOption2="By Artist"
        defaultPanelOption3="By Title"
        secondPanel="Artwork Types"
        secondPanelOption1="Cityscape"
        secondPanelOption2="Animals"
        secondPanelOption3="Essentials"
      />
      <ArtGrid arts={arts} loading={loading} error={error} />
      <Pagination totalPage={100} postPerPage={10} />
      <Footer
        firstPara="This is front-end project using React and Typescripts."
        secondPara="Images are obtained from Chicago Art Institute's public API."
      />
    </div>
  );
}

export default Artwork;
