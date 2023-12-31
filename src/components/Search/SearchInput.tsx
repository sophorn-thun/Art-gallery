import styles from './SearchInput.module.css';
import { useState } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className={styles['search-box']} role="search">
      <input
        aria-label="Search artworks"
        className={styles['search']}
        type="search"
        placeholder="Search by keyword, artist..."
        onKeyDown={handleKeyDown}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          onClick={handleClearSearch}
          className={styles['clear-search']}
          aria-label="Clear search"
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchInput;
