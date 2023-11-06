import '../SearchFunction/SearchFunction.scss';
import { useState, useEffect, useRef } from 'react';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';

function SearchFunction() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const closeInput = () => {
    setInputVisible(false);
  };

  useEffect(() => {
    if (isInputVisible) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleIconClick = () => {
    // Trigger the search when the icon is clicked
    performSearch(searchQuery);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Trigger the search when the Enter key is pressed
      performSearch(searchQuery);
    }
  };

  // Perform search and return matching items from the dummyDb arrays
  const performSearch = (query) => {
    const allData = [
      ...plannedArrayDb,
      ...inProgressArrayDb,
      ...completeArrayDb,
    ];

    const results = allData.filter((item) => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();

      return title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery);
    });

    setSearchResults(results);
  };

  return (
    <div>
      {isInputVisible ? (
        <div className="search-input">
          <div className="input-container">
            <span className="input-icon" onClick={handleIconClick}></span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleEnterPress}
              placeholder="Search..."
              className={`search-input ${isInputVisible ? 'active' : ''} ${isInputVisible ? 'no-border' : ''}`}
              ref={inputRef}
            />
            <span className="close-icon" onClick={closeInput}></span>
          </div>
        </div>
      ) : (
        <button onClick={toggleInput} className="search-function-btn">
          Search...
          <span className="search-function-btn__icon"></span>
        </button>
      )}

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((item, index) => (
              <li key={index}>
                {item.title} - {item.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchFunction;

