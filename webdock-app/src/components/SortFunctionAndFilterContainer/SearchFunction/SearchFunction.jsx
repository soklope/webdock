import '../SearchFunction/SearchFunction.scss';

import { useState } from 'react';

function SearchFunction() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {isInputVisible ? (
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter your search query"
        />
      ) : (
        <button 
        onClick={toggleInput}
        className={"search-function-btn"}>Search...
        <span className="search-function-btn__icon"></span>
        </button>

      )}
    </div>
  );
}

export default SearchFunction;






