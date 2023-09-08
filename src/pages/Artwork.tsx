import SearchInput from '../components/Search/SearchInput';
import Accordion from '../components/Accordion/Accordion';
import Pagination from '../components/Pagination/Pagination';
import Footer from '../components/Footer/Footer';
import ArtGrid from '../components/ArtGrid/ArtGrid';
import { useState } from 'react';
import useArtWork, { SortType, ArtworkType } from '../hooks/useArtWork';

function Artwork() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortType, setSortType] = useState<SortType>(null);
  const [artworkType, setArtworkType] = useState<ArtworkType>(null);
  const { data, isLoading, isError, error } = useArtWork(searchTerm, 20, sortType, artworkType);

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
  };

  const handleSortByDate = (isChecked: boolean) => {
    setSortType(isChecked ? 'date' : null);
  };

  const handleSortByTitle = (isChecked: boolean) => {
    setSortType(isChecked ? 'title' : null);
  };

  const handleSortByArtist = (isChecked: boolean) => {
    setSortType(isChecked ? 'artist' : null);
  };

  const handleFilterByPainting = (isChecked: boolean) => {
    setArtworkType(isChecked ? 'Painting' : null);
  };

  const handleFilterBySculpture = (isChecked: boolean) => {
    setArtworkType(isChecked ? 'Sculpture' : null);
  };

  const handleFilterByBook = (isChecked: boolean) => {
    setArtworkType(isChecked ? 'Book' : null);
  };
  console.log(data);

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <Accordion
        defaultPanel="Sort"
        defaultPanelOption1="By Date"
        onSortByDate={handleSortByDate}
        defaultPanelOption2="By Title"
        onSortByTitle={handleSortByTitle}
        defaultPanelOption3="By Artist"
        onSortByArtist={handleSortByArtist}
        secondPanel="Artwork Types"
        secondPanelOption1="Painting"
        onFilterByPainting={handleFilterByPainting}
        secondPanelOption2="Sculpture"
        onFilterBySculpture={handleFilterBySculpture}
        secondPanelOption3="Book"
        onFilterByBook={handleFilterByBook}
      />
      <ArtGrid arts={data} loading={isLoading} />
      <Pagination totalPage={100} postPerPage={10} />
      <Footer
        firstPara="This is front-end project using React and Typescripts."
        secondPara="Images are obtained from Chicago Art Institute's public API."
      />
    </div>
  );
}

export default Artwork;
