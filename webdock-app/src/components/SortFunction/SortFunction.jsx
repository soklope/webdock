import { useState } from 'react';
import './SortFunction.scss';
import DropdownMenu from './DropdownMenu/DropdownMenu';

export default function SortFunction() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(''); // To store the selected sort option
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleSortChange = (sortOption) => {
      setSelectedSortOption(sortOption); // Set the selected sort option as-is
      // Implement your sorting logic here based on the selected sort option
    };
  
    return (
      <div className="sort-function">
        <button
          className={`sort-function-btn ${isDropdownOpen ? 'active' : ''}`}
          onClick={toggleDropdown}
        >
          {selectedSortOption ? selectedSortOption : 'Sort'} {/* Update the button text */}
          <span className="sort-function-btn__icon"></span>
        </button>
        {isDropdownOpen && <DropdownMenu onSortChange={handleSortChange} />}
        {/* Display the selected sort option or perform sorting based on selectedSortOption */}
        {selectedSortOption && <p>Selected Sort: {selectedSortOption}</p>}
      </div>
    );
  }