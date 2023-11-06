import '../SearchFunction/SearchFunction.scss';
import { useState, useEffect, useRef } from 'react';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb'; // Import your dummyDb data

function SearchFunction() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
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
    const query = event.target.value;
    setSearchQuery(query);
    const results = performSearch(query);
    setSearchResults(results);
  };

  // Perform search and return matching items from the dummyDb arrays
  const performSearch = (query) => {
    const allData = [
      ...plannedArrayDb,
      ...inProgressArrayDb,
      ...completeArrayDb,
    ];

    return allData.filter((item) => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();

      return title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery);
    });
  };

  return (
    <div>
      {isInputVisible ? (
        <div className="search-input">
          <div className="input-container">
          <input
  type="text"
  value={searchQuery}
  onChange={handleInputChange}
  placeholder="Search..."
  className={`search-input ${isInputVisible ? 'active' : ''} ${isInputVisible ? 'no-border' : ''}`}
  ref={inputRef}
/>
            <span className="input-icon"></span> {/* This is a placeholder for the icon */}
          </div>
        </div>
      ) : (
        <button onClick={toggleInput} className="search-function-btn">
          Search...
          <span className="search-function-btn__icon"></span> {/* This is a placeholder for the icon */}
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
