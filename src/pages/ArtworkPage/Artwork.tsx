import SearchInput from '../../components/Search/SearchInput';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';
import ArtGrid from '../../components/ArtGrid/ArtGrid';
import { useState, useEffect } from 'react';
import useArtWork, { SortType, ArtworkType } from '../../hooks/useArtWork';
import { useSearchParams } from 'react-router-dom';
import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';

import styles from './ArtworkPage.module.css';

function Artwork() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const searchTermFromUrl = searchParams.get('searchTerm') || '';
  const artworkTypeFromUrl = searchParams.get('artworkType') as ArtworkType;

  const [sortType, setSortType] = useState<SortType>(null);
  const [searchTerm, setSearchTerm] = useState<string>(searchTermFromUrl);
  const [artworkType, setArtworkType] = useState<ArtworkType | null>(artworkTypeFromUrl || null);

  const { data, info, isLoading } = useArtWork(searchTerm, 12, sortType, artworkType, page);

  const updateSearchParams = () => {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    if (searchTerm) params.set('searchTerm', searchTerm);
    if (artworkType) params.set('artworkType', artworkType);
    setSearchParams(params);
  };

  useEffect(() => {
    updateSearchParams();
  }, [searchTerm, page, artworkType]);

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
    updateSearchParams();
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

  // Filtering handlers
  const handleFilterByPainting = (isChecked: boolean) => {
    setArtworkType(isChecked ? 'Painting' : null);
  };

  const handleFilterBySculpture = (isChecked: boolean) => {
    setArtworkType(isChecked ? 'Sculpture' : null);
  };

  const handleFilterByPrint = (isChecked: boolean) => {
    setArtworkType(isChecked ? 'Print' : null);
  };

  return (
    <div className={styles['artwork-page']}>
      <div className={styles['search']}>
        <SearchInput onSearch={handleSearch} />
      </div>
      <div className={styles['sort-filter-container']}>
        <Sort
          title="Sort"
          option1="By date"
          onSortByDate={handleSortByDate}
          option2="By title"
          onSortByTitle={handleSortByTitle}
          option3="By artist"
          onSortByArtist={handleSortByArtist}
        />
        <Filter
          title="Filter"
          option1="Painting"
          onFilterByPainting={handleFilterByPainting}
          option2="Sculpture"
          onFilterBySculpture={handleFilterBySculpture}
          option3="Print"
          onFilterByPrint={handleFilterByPrint}
        />
      </div>
      <div className={styles['art-grid']}>
        <ArtGrid arts={data} loading={isLoading} />
      </div>
      <div className={styles['pagination']}>
        <Pagination
          totalPage={100}
          postPerPage={10}
          page={page}
          info={info}
          onSetSearchParam={setSearchParams}
        />
      </div>
      <div className={styles['footer']}>
        <Footer
          firstPara="React and Typescript project by Sophorn THUN."
          secondPara="Credited to the Chicago Art Institute's public API."
        />
      </div>
    </div>
  );
}

export default Artwork;
