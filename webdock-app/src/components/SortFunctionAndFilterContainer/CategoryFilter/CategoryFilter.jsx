import { useState } from 'react';
import '../CategoryFilter/CategoryFilter.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showDropdown, setShowDropdown] = useState(false);

  const filterPosts = (data) => {
    if (selectedCategory === 'All Categories') {
      return data; // Return all posts if no category is selected.
    }
  
    return data.filter((post) => post.category === selectedCategory);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false); // Close the list when a category is selected
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
      <button onClick={toggleDropdown} className="category-filter-btn">
        {selectedCategory}
        <span className="category-filter-btn__icon"></span>
      </button>
      {showDropdown && (
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
      <div className="filtered-posts">
        {filterPosts([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]).map((post) => (
          <div key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Category: {post.category}</p>
            {/* Add more post information here */}
          </div>
        ))}
      </div>
    </div>
  );
}






