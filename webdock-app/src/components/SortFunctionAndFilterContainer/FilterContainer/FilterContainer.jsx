import '../FilterContainer/FilterContainer.scss';
import '../SortFunction/SortFunction.scss'
import '../CategoryFilter/CategoryFilter.scss'

import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';
import { useEffect,useState, useRef } from 'react';

export default function FilterContainer() {
    const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [dataToSort, setDataToSort] = useState([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]);
    const sortRef = useRef(null);
  
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const categoryDropdownRef = useRef(null);
  
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
      setSelectedCategory(category);
      setCategoryDropdownOpen(false);
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
  
    const filteredData = dataToSort.filter((item) => {
      if (selectedCategory === 'All Categories' || item.category === selectedCategory) {
        return true;
      }
      return false;
    });
  
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
                <button
                  onClick={toggleCategoryDropdown}
                  className={`category-filter-btn ${isCategoryDropdownOpen ? 'active' : ''}`}
                >
                  {selectedCategory}
                  <span className="category-filter-btn__icon"></span>
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