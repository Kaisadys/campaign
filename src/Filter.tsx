// src/App.tsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Filter: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (searchTerm: string) => {
    // Implement your search logic here.
    // For this example, we'll just filter some dummy data.
    const dummyData = ['apple', 'banana', 'cherry', 'date'];
    const filteredResults = dummyData.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    
    <div>
      <h1>Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
