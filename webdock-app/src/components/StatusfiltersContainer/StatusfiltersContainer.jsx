// Import the 'useState' hook from React for future use (not used in this component).
import { useState } from 'react';
// Import the 'CategoryBtn' component and the associated SCSS file.
import Statusfilters from '../Statusfilters/Statusfilters';
import './StatusfiltersContainer.scss';

// Define the 'CategoryBtnContainer' component, which serves as a container for category buttons.
function StatusfiltersContainer() {
  return (
    // Create a container div with the 'flex-container' class.
    <div className="flex-container">
      {/* Render 'CategoryBtn' components for different categories */}
      <Statusfilters
        indicationColor={"MyPost"}
        borderColor={"MyPost-border-color"}
        backgroundColor={"MyPost-background-color"}
        title="My Post"
      />
      <Statusfilters
        indicationColor={"Review"}
        borderColor={"Review-border-color"}
        backgroundColor={"Review-background-color"}
        title='Review'
      />
      <Statusfilters
        indicationColor={"Planned"}
        borderColor={"Planned-border-color"}
        backgroundColor={"Planned-background-color"}
        title="Planned"
      />
      <Statusfilters
        indicationColor={"InProgress"}
        borderColor={"InProgress-border-color"}
        backgroundColor={"InProgress-background-color"}
        title="In Progress"
      />
      <Statusfilters
        indicationColor={"Complete"}
        borderColor={"Complete-border-color"}
        backgroundColor={"Complete-background-color"}
        title="Complete"
      />
    </div>
  );
}

// Export the 'StatusfiltersBtnContainer' component for use in other parts of the application.
export default StatusfiltersContainer;

// To do after code review
// - Move "export default" to the component declaration on line 8
// - Remove "import useState" since it is not being used
