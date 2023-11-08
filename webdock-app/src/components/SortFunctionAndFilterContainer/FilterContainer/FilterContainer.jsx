import { useEffect,useState, useRef } from 'react';
import '../FilterContainer/FilterContainer.scss';

import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';

export default function FilterContainer() {
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [dataToSort, setDataToSort] = useState([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]);
  const sortRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef(null);
  const [isCategorySelected, setCategorySelected] = useState(false); // New state variable


  const [isInputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const closeInput = () => {
    setInputVisible(false);
    setSearchQuery(''); // Clear the search query
  };

  useEffect(() => {
    if (isInputVisible) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Trigger the search as the user types
  };

  const handleIconClick = () => {
    // Trigger the search with the current searchQuery value
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Trigger the search when the Enter key is pressed
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortDropdownOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setCategoryDropdownOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSortDropdown = () => {
    setSortDropdownOpen(!isSortDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
    setSortDropdownOpen(false);

    let sortedData;

    switch (sortOption) {
      case 'Trending':
        sortedData = [...dataToSort].sort((a, b) => {
          return b.numberOfComments - a.numberOfComments;
        });
        break;
      case 'Top':
        sortedData = [...dataToSort].sort((a, b) => {
          return b.numberOfUpvotes - a.numberOfUpvotes;
        });
        break;
      case 'New':
        sortedData = [...dataToSort].sort((a, b) => {
          return b.createdAt - a.createdAt;
        });
        break;
      default:
        sortedData = dataToSort;
    }

    setDataToSort(sortedData);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    if (category === selectedCategory && isCategorySelected) {
      // If the same category is selected again and it's already selected, do nothing.
      return;
    }
  
    setSelectedCategory(category);
    setCategorySelected(true);
    setCategoryDropdownOpen(false);
  };

  const handleClearCategory = () => {
    setSelectedCategory('All Categories');
    setCategorySelected(false);
    setCategoryDropdownOpen(false);
  };

  const handleSearch = () => {
    const filteredData = dataToSort.filter((item) => {
      if (
        (selectedCategory === 'All Categories' || item.category === selectedCategory) &&
        (searchQuery === '' || item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });
    return filteredData;
  };

  const sortOptions = ['Trending', 'Top', 'New'];

  const categoryOptions = [
    'All Categories',
    'Dashboard Features',
    'Documentation',
    'Billing Features',
    'Networking',
    'Hardware and Products',
    'Perfect Server Stacks',
    'Mobile App',
    'Webdock API',
    'Competition',
  ];

  const filteredData = handleSearch();

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        <div ref={sortRef} className="sort-function">
          <button className={`sort-function-btn ${isSortDropdownOpen ? 'active' : ''}`} onClick={toggleSortDropdown}>
            {selectedSortOption ? selectedSortOption : 'Top'}
            <span className="sort-function-btn__icon"></span>
          </button>
          {isSortDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                {sortOptions.map((option) => (
                  <li className="dropdown-menu__list-item" key={option} onClick={() => handleSortChange(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div ref={categoryDropdownRef} className="category-filter">
          <div className="category-filter-btn-container">
            <button onClick={toggleCategoryDropdown} className={`category-filter-btn ${isCategoryDropdownOpen ? 'active' : ''}`}>
              {selectedCategory}
              <span className={`category-filter-btn__icon ${isCategorySelected ? 'close-icon' : ''}`} onClick={handleClearCategory}></span>
            </button>
            {isCategoryDropdownOpen && (
              <div className="category-list">
                <ul>
                  {categoryOptions.map((category) => (
                    <li key={category}>
                      <button onClick={() => handleCategoryChange(category)}>{category}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {isInputVisible ? (
        <div className="search-input">
          <div className="input-container">
            <span className="input-icon" onClick={handleIconClick}></span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={onKeyDown}
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
      </div>
      
      <div className="filtered-posts">
        {filteredData.map((item) => (
          <div key={item.title}>
            <RoadmapChildren
              title={item.title}
              numberOfComments={item.numberOfComments}
              totalUpvotes={item.numberOfUpvotes}
              category={item.category}
              status={item.status}
              statusColor={item.statusColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
