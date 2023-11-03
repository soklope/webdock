import { useState } from 'react';
import '../../SortFunctionAndFilterContainer/SortFunction/SortFunction.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';

export default function SortFunction() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [dataToSort, setDataToSort] = useState([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
    setDropdownOpen(false);

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
              <li className="dropdown-menu__list-item" key={option} onClick={() => handleSortChange(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}

      {dataToSort.map((item) => (
        // Render each item from the sorted data here
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {/* Add more properties as needed */}
        </div>
      ))}
    </div>
  );
}