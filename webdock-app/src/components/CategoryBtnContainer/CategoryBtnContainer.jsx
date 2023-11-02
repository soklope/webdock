// Import the 'useState' hook from React for future use (not used in this component).
import { useState } from 'react';
// Import the 'CategoryBtn' component and the associated SCSS file.
import CategoryBtn from '../categoryBtn/CategoryBtn';
import './CategoryBtnContainer.scss';

// Define the 'CategoryBtnContainer' component, which serves as a container for category buttons.
function CategoryBtnContainer() {
  return (
    // Create a container div with the 'flex-container' class.
    <div className="flex-container">
      {/* Render 'CategoryBtn' components for different categories */}
      <CategoryBtn
        indicationColor={"MyPost"}
        borderColor={"MyPost-border-color"}
        backgroundColor={"MyPost-background-color"}
        title="My Post"
      />
      <CategoryBtn
        indicationColor={"Review"}
        borderColor={"Review-border-color"}
        backgroundColor={"Review-background-color"}
        title='Review'
      />
      <CategoryBtn
        indicationColor={"Planned"}
        borderColor={"Planned-border-color"}
        backgroundColor={"Planned-background-color"}
        title="Planned"
      />
      <CategoryBtn
        indicationColor={"InProgress"}
        borderColor={"InProgress-border-color"}
        backgroundColor={"InProgress-background-color"}
        title="In Progress"
      />
      <CategoryBtn
        indicationColor={"Complete"}
        borderColor={"Complete-border-color"}
        backgroundColor={"Complete-background-color"}
        title="Complete"
      />
    </div>
  );
}

// Export the 'CategoryBtnContainer' component for use in other parts of the application.
export default CategoryBtnContainer;
