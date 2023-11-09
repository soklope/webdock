import { useState, useEffect, useRef } from 'react';
import '../CategoryFilter/CategoryFilter.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef(null);
  const [isCategorySelected, setCategorySelected] = useState(false); // New state variable
  const [dataToSort] = useState([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]);


  useEffect(() => {
    function handleClickOutside(event) {

      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setCategoryDropdownOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


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
    console.log('isCategorySelected:', isCategorySelected); 
  };

  const handleSearch = () => {
    const filteredData = dataToSort.filter((item) => {
      if (
        (selectedCategory === 'All Categories' || item.category === selectedCategory)) {
        return true;
      }
      return false;
    });
    return filteredData;
  };

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
    <div className="category-filter">
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
  );
}