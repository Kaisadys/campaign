// src/components/SearchBar.tsx
import { Button } from 'antd';
import React, { useState } from 'react';
import Modal from './Modal';


interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    
    <div>
    
      <div className='filter-section'>
      <input
        className='search'
        type="text"
        placeholder="Search customer log by customer name, email address & phone number"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='search-button' onClick={handleSearch}>Search</button>
      <Button onClick={openModal} className='create-campaign-button'>Create a Campaign</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>

    </div>
    
  );
};

export default SearchBar;
