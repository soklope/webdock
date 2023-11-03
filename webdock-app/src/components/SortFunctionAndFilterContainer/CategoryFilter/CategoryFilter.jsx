import { useState } from 'react';
import '../CategoryFilter/CategoryFilter.scss';
import { plannedArrayDb, inProgressArrayDb, completeArrayDb } from '../../../dummyDb';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const filterPosts = (data) => {
    if (selectedCategory === 'All Categories') {
      return data; // Return all posts if no category is selected.
    }

    return data.filter(post => post.category === selectedCategory);
  };

  return (
    <div className="category-filter">
      <button onClick={toggleDropdown} className="category-filter-btn">
        {selectedCategory}
        <span className="category-filter-btn__icon"></span>
      </button>
      {showDropdown && (
        <div className="category-dropdown">
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All Categories">All Categories</option>
            <option value="Dashboard Features">Dashboard Features</option>
            <option value="Documentation">Documentation</option>
            <option value="Billing Features">Billing Features</option>
            <option value="Networking">Networking</option>
            <option value="Hardware and Products">Hardware and Products</option>
            <option value="Perfect Server Stacks">Perfect Server Stacks</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Webdock API">Webdock API</option>
            <option value="Competition">Competition</option>
          </select>
        </div>
      )}
      <div className="filtered-posts">
        {filterPosts([...plannedArrayDb, ...inProgressArrayDb, ...completeArrayDb]).map(post => (
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





