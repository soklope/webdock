import { useState, useEffect, useRef } from 'react';
import '../CategoryFilter/CategoryFilter.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';
import RoadmapChildren from '../../RoadmapChildren/RoadmapChildren';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const filterPosts = (data) => {
    if (selectedCategory === 'All Categories') {
      return data; // Return all posts if no category is selected.
    }

    return data.filter((post) => post.category === selectedCategory);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    setShowDropdown(!showDropdown);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
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

  return (
    <div className="category-filter">
      <div className="category-filter-btn-container">
        <button
          onClick={toggleDropdown}
          className={`category-filter-btn ${showDropdown ? 'active' : ''}`}
        >
          {selectedCategory}
          <span className="category-filter-btn__icon"></span>
        </button>
        {showDropdown && (
          <div ref={dropdownRef} className="category-list">
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
      <div className="filtered-posts">
        {filterPosts([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]).map((item) => (
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