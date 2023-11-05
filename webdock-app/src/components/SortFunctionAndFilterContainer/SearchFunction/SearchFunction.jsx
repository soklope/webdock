import '../SearchFunction/SearchFunction.scss';
import { useState, useEffect, useRef } from 'react';

function SearchFunction() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  useEffect(() => {
    if (isInputVisible) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

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
          placeholder="Search..."
          className={`search-input ${isInputVisible ? 'active' : ''}`}
          ref={inputRef}
        />
      ) : (
        <button onClick={toggleInput} className="search-function-btn">
          Search...
          <span className="search-function-btn__icon"></span>
        </button>
      )}
    </div>
  );
}

export default SearchFunction;

