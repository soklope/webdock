import { useState } from "react";
import ViewToogleSwitch from "../ViewToggleSwitchContainer/ViewToggleSwitch/ViewToggleSwitch";
import "./ViewToggleSwitchContainer.scss";

// This component represents a switch between Roadmap and List views.
export default function ViewToggleSwitchContainer() {
  // State variable to keep track of the current view (Roadmap or List)
  const [isRoadmapView, setIsRoadmapView] = useState(true);

  // Function to toggle between Roadmap and List views
  const toggleView = () => {
    // Update the state to the opposite of its current value
    setIsRoadmapView((prevIsRoadmapView) => !prevIsRoadmapView);
  };

  // Render the switch components
  return (
    <>
      {/* Container for the toggle switches */}
      <div className="toggle-switches-container">
        {/* First switch for Roadmap view */}
        <ViewToogleSwitch
          // Dynamically set the class name for Roadmap view based on isRoadmapView state
          switchIcon={`view-toggle-switch__roadmap${
            isRoadmapView ? "--active" : ""
          }`}
          // Pass the toggleView function to handle click event
          onToggle={toggleView}
        />

        {/* Second switch for List view */}
        <ViewToogleSwitch
          // Dynamically set the class name for List view based on isRoadmapView state
          switchIcon={`view-toggle-switch__list${
            isRoadmapView ? "" : "--active"
          }`}
          // Pass the toggleView function to handle click event
          onToggle={toggleView}
        />
      </div>
    </>
  );
}
