import Pagination from '../../components/Pagination/Pagination';
import ArtGrid from '../../components/ArtGrid/ArtGrid';
import useArtWork, { SortType, ArtworkType } from '../../hooks/useArtWork';
import { useSearchParams } from 'react-router-dom';

function ArtworkMember() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');

  const searchTerm: string = '';
  const sortType: SortType | null = null;
  const artworkType: ArtworkType | null = null;
  const { data, info, isLoading } = useArtWork(searchTerm, 12, sortType, artworkType, page);

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
