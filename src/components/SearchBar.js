import { useState } from 'react';

export default function SearchBar({onSearchTermChange}) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(input) {
    setSearchTerm(input);
    onSearchTermChange(input);
  }

  return (
    <div className="search-bar">
      <input 
          value={searchTerm}
          onChange={(event) => handleInputChange(event.target.value)}
        />
    </div>
  );
}