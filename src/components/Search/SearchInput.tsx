import styles from './SearchInput.module.css';
import { useState } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

function SearchInput({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };
  return (
    <div className={styles['search-box']}>
      <i className={styles['fas fa-search spotlight-icon']}></i>
      <input
        className={styles['search']}
        type="search"
        placeholder="Search by keyword, artist..."
        onKeyDown={handleKeyDown}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
