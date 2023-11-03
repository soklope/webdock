import { useState } from 'react';
import '../../SortFunctionAndFilterContainer/SortFunction/SortFunction.scss';

export default function SortFunction({ onSortChange }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
    setDropdownOpen(false);
    onSortChange(sortOption); // Pass the selected sort option to the parent component
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
              <li key={option} onClick={() => handleSortChange(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// To do after code review
// - Delete onSortChange prop since it is not being used