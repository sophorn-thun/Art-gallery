import SearchInput from '../../components/Search/SearchInput';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';
import ArtGrid from '../../components/ArtGrid/ArtGrid';
import { useState } from 'react';
import useArtWork, { SortType, ArtworkType } from '../../hooks/useArtWork';
import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import { useSearchParams } from 'react-router-dom';

import styles from './ArtworkPage.module.css';

function Artwork() {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const page = Number(searchParams.get('page') || 1);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortType, setSortType] = useState<SortType>(null);
  const [artworkType, setArtworkType] = useState<ArtworkType>(null);
  const { data, info, isLoading } = useArtWork(searchTerm, 12, sortType, artworkType, page);

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

  const handleFilterByPrint = (isChecked: boolean) => {
    setArtworkType(isChecked ? 'Print' : null);
  };

  console.log(page);

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <div className={styles['sort-filter-container']}>
        <Sort
          defaultPanel="Sort Artwork"
          defaultPanelOption1="By Date"
          onSortByDate={handleSortByDate}
          defaultPanelOption2="By Title"
          onSortByTitle={handleSortByTitle}
          defaultPanelOption3="By Artist"
          onSortByArtist={handleSortByArtist}
        />
        <Filter
          secondPanel="Filter Artwork"
          secondPanelOption1="Painting"
          onFilterByPainting={handleFilterByPainting}
          secondPanelOption2="Sculpture"
          onFilterBySculpture={handleFilterBySculpture}
          secondPanelOption3="Print"
          onFilterByPrint={handleFilterByPrint}
        />
      </div>
      <ArtGrid arts={data} loading={isLoading} />
      <Pagination
        totalPage={100}
        postPerPage={10}
        page={page}
        info={info}
        onSetSearchParam={setSearchParams}
      />
      <Footer
        firstPara="This is front-end project using React and Typescripts."
        secondPara="Images are obtained from Chicago Art Institute's public API."
      />
    </div>
  );
}

export default Artwork;
