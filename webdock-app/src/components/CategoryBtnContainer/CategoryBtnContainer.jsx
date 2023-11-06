// Import the 'CategoryBtn' component and the associated SCSS file.
import CategoryBtn from '../categoryBtn/CategoryBtn';
import './CategoryBtnContainer.scss';
import React, { useState, useEffect } from 'react';

// Define the 'CategoryBtnContainer' component, which serves as a container for category buttons.
export default function CategoryBtnContainer() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [posts, setPosts] = useState([]);
  const [postsInCategory, setPostsInCategory] = useState([]);

  //Fetch Get posts and adds the value to both posts and postsInCategory
  //because type is not set on first load
  useEffect(() => {
    // Define the API URL you want to request
    const apiUrl = 'https://jsonplaceholder.org/posts';

    // Make a GET request when the component mounts
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((responseData) => {
        setPosts(responseData); // Set the data in your component's state
        setPostsInCategory(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleCategorySelect = (categoryIndicationColor) => {
    
    if (selectedCategory !== null && selectedCategory === categoryIndicationColor) {
      // Deselect the selected category
      setSelectedCategory(null);
    } else {
      // Update the selected category
      setSelectedCategory(categoryIndicationColor);
    }

    //Filters the posts on category asuming that postes.category is a list of strings
    setPostsInCategory(posts.filter(x => x.category.includes(categoryIndicationColor)));
  };

  return (
    // Create a container div with the 'flex-container' class.
    <div>
      <div className="flex-container">
        {/* Render 'CategoryBtn' components for different categories */}
        <CategoryBtn
          indicationColor={"MyPost"}
          borderColor={"MyPost-border-color"}
          backgroundColor={"MyPost-background-color"}
          title="My Post"
          isSelected={selectedCategory === "MyPost"}
          onSelect={handleCategorySelect}
        />
        <CategoryBtn
          indicationColor={"Review"}
          borderColor={"Review-border-color"}
          backgroundColor={"Review-background-color"}
          title='Review'
          isSelected={selectedCategory === "Review"}
          onSelect={handleCategorySelect}
        />
        <CategoryBtn
          indicationColor={"Planned"}
          borderColor={"Planned-border-color"}
          backgroundColor={"Planned-background-color"}
          title="Planned"
          isSelected={selectedCategory === "Planned"}
          onSelect={handleCategorySelect}
        />
        <CategoryBtn
          indicationColor={"InProgress"}
          borderColor={"InProgress-border-color"}
          backgroundColor={"InProgress-background-color"}
          title="In Progress"
          isSelected={selectedCategory === "InProgress"}
          onSelect={handleCategorySelect}
        />
        <CategoryBtn
          indicationColor={"Complete"}
          borderColor={"Complete-border-color"}
          backgroundColor={"Complete-background-color"}
          title="Complete"
          isSelected={selectedCategory === "Complete"}
          onSelect={handleCategorySelect}
        />
      </div>
      <div> 
      {postsInCategory.map((item, index) => (
          <div key={index}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
    
    //TODO: Add html to show posts with the selected category
  );
}

// Export the 'CategoryBtnContainer' component for use in other parts of the application.
 CategoryBtnContainer;
