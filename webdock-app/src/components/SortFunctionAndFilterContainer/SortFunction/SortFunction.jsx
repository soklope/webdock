import { useState } from 'react';
import '../../SortFunctionAndFilterContainer/SortFunction/SortFunction.scss';

export default function SortFunction() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
    setDropdownOpen(false);
    // Implement your sorting logic here based on the selected sort option
  };

  const handleSortClick = (sortOption) => {
    handleSortChange(sortOption);
  };

  const sortOptions = ['Trending', 'Top', 'New'];

  return (
    <div className="sort-function">
      <button
        className={`sort-function-btn ${isDropdownOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        {selectedSortOption ? selectedSortOption : 'Sort'}
        <span className="sort-function-btn__icon"></span>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            {sortOptions.map((option) => (
              <li key={option} onClick={() => handleSortClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedSortOption && <p>Selected Sort: {selectedSortOption}</p>}
    </div>
  );
}