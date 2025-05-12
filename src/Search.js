import React, { useState } from 'react';
import './Search.css';
import searchImg from './img/search.png';

function Search({ isVisible }) {
  const [inputValue, setInputValue] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    if (inputValue.trim() === '') return;
    setSearchHistory(prev => [inputValue, ...prev]);
    setInputValue('');
  };

  const handleDelete = (indexToDelete) => {
    setSearchHistory(prev => prev.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className={`search ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="searching">
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <div className="search-button" onClick={handleSearch}>
          <img
            src={searchImg}
            alt="search-button-img"
            className="search-button-img"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="search-history">
        {searchHistory.map((item, index) => (
          <div key={index} className="history-item">
            <span>{item}</span>
            <button className="delete-button" onClick={() => handleDelete(index)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
