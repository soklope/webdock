import { useEffect,useState, useRef } from 'react';
import '../FilterContainer/FilterContainer.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';

// Defining the main FilterContainer component
export default function FilterContainer() {
   // State variables for sorting
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Sort');
  const [dataToSort, setDataToSort] = useState([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]);
  const sortRef = useRef(null);

// State variables for category filtering
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef(null);
  const [isCategorySelected, setCategorySelected] = useState(false); // New state variable

// State variables for search input
  const [isInputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

// Function to toggle visibility of the search input
  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

// Function to close the search input
  const closeInput = () => {
    setInputVisible(false);
    setSearchQuery(''); // Clear the search query
  };

// useEffect to focus on the search input when it becomes visible
  useEffect(() => {
    if (isInputVisible) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

// Event handler for input change (search query)
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Trigger the search as the user types
  };

// Event handler for the search-icon click (search)
  const handleIconClick = () => {
    // Trigger the search with the current searchQuery value
  };

// Event handler for Enter key press (search)
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Trigger the search when the Enter key is pressed
    }
  };

// useEffect to handle clicks outside the dropdowns to close them
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

// Function to toggle visibility of the sort dropdown
  const toggleSortDropdown = () => {
    setSortDropdownOpen(!isSortDropdownOpen);
  };

// Event handler for changing the sort option
  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
    setSortDropdownOpen(false);

  // Sorting the data based on the selected sort option
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

// Array of sort options
  const sortOptions = ['Trending', 'Top', 'New'];
 
// Function to toggle visibility of the category dropdown
  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  
// Event handler for changing the selected category
  const handleCategoryChange = (category) => {
    if (category === selectedCategory && isCategorySelected) {
      // If the same category is selected again and it's already selected, do nothing.
      return;
    }
    setSelectedCategory(category);
    setCategorySelected(true);
    setCategoryDropdownOpen(false);
  };

// Event handler for clearing the selected category
  const handleClearCategory = (event) => {
    event.stopPropagation();
    setSelectedCategory('All Categories');
    setCategorySelected(false);
    setCategoryDropdownOpen(false); 
  };

// Function to filter data based on category and search query
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

// Array of category options
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

// Get the filtered data based on category and search query
  const filteredData = handleSearch();

// Rendering the FilterContainer component
  return (
    <div className="filter-container">
    {/* Sorting and category filtering buttons */}
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

      {/* Category filtering dropdown */}

      <div ref={categoryDropdownRef} className="category-filter">
  <div className="category-filter-btn-container">
    {/* Button to toggle category dropdown */}
    <button
      onClick={toggleCategoryDropdown}
      className={`category-filter-btn ${isCategoryDropdownOpen ? 'active' : ''} ${isCategorySelected && selectedCategory !== 'All Categories' ? 'category-selected' : ''}`}
    >
      {/* Text container with ellipsis properties */}
      <span className="category-filter-btn__text text-container">
        {selectedCategory}
      </span>
      {/* Close-icon can clear selected category and close dropdown menu */}
      <span
        className={`category-filter-btn__icon ${isCategorySelected && selectedCategory !== 'All Categories' ? 'close-icon' : ''}`}
        onClick={(event) => {
          event.stopPropagation();
          if (isCategorySelected && selectedCategory !== 'All Categories') {
            handleClearCategory(event);
          } else {
            toggleCategoryDropdown();
          }
        }}
      ></span>
    </button>
    {/* Render category dropdown if open */}
    {isCategoryDropdownOpen && (
      <div className="category-list">
        <ul>
          {/* Render each category option */}
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
      {/* Render search input or button based on visibility */}
        {isInputVisible ? (
        <div className="search-input">
          <div className="input-container">
          {/* Input-icon for search */}
            <span className="input-icon" onClick={handleIconClick}></span>
          {/* Input field for search */}           
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={onKeyDown}
              placeholder="Search..."
              className={`search-input ${isInputVisible ? 'active' : ''} ${isInputVisible ? 'no-border' : ''}`}
              ref={inputRef}
            />
          {/* Close-icon to close search input */}
            <span className="close-icon" onClick={closeInput}></span>
          </div>
        </div>
      ) : (
      // Button to toggle search input
        <button onClick={toggleInput} className="search-function-btn">
          <p>Search... </p>
          <span className="search-function-btn__icon"></span>
        </button>
      )}
      </div>
      
    {/* Render the filtered posts using RoadmapChildren component */}
      {/* <div className="filtered-posts">
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
  {filteredData.length === 0 && <p>No results</p>}
  </div> */}
</div>
)
}