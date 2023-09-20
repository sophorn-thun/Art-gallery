import SearchInput from '../../components/Search/SearchInput';
import Pagination from '../../components/Pagination/Pagination';
import ArtGrid from '../../components/ArtGrid/ArtGrid';
import { useState } from 'react';
import useArtWork, { SortType, ArtworkType } from '../../hooks/useArtWork';
import { useSearchParams } from 'react-router-dom';

import styles from './ArtworkPage.module.css';

function ArtworkMember() {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const page = Number(searchParams.get('page') || 1);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortType, setSortType] = useState<SortType>(null);
  const [artworkType, setArtworkType] = useState<ArtworkType>(null);
  const { data, info, isLoading, error } = useArtWork(searchTerm, 12, sortType, artworkType, page);

  return (
    <div>
      <ArtGrid arts={data} loading={isLoading} />
      <Pagination
        totalPage={100}
        postPerPage={10}
        page={page}
        info={info}
        onSetSearchParam={setSearchParams}
      />
    </div>
  );
}

export default ArtworkMember;
