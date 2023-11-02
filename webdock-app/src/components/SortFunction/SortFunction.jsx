import { useState } from 'react';
import './SortFunction.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

export default function SortFunction() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="sort-function">
        <button
          className={`sort-function-btn ${isDropdownOpen ? 'active' : ''}`}
          onClick={toggleDropdown}
        >
          <p>Sort</p>
          <span className="sort-function-btn__icon"></span>
        </button>
        {isDropdownOpen && <DropdownMenu />}
      </div>
    );
  }
