import { useState } from "react";
import ViewToogleSwitch from "../ViewToggleSwitchContainer/ViewToggleSwitch/ViewToggleSwitch";
import "./ViewToggleSwitchContainer.scss";

// This component represents a switch between Roadmap and List views.
export default function ViewToggleSwitchContainer() {
  // State variable to keep track of the current view (Roadmap or List)
  const [isRoadmapView, setIsRoadmapView] = useState(true);
  // State variable to track the text content displayed above the toggle switches
  const [displayText, setDisplayText] = useState("Roadmap View");
  
  // Function to toggle between Roadmap and List views
  const toggleView = () => {
    // Update the state to the opposite of its current value
    setIsRoadmapView((isActive) => !isActive);
    // Update the text based on the current view state
    setDisplayText(isRoadmapView ? "List View" : "Roadmap View");
  };

  // Render the switch components
  return (
    <>
      {/* Container for the toggle switches */}
      <div className="toggle-switches-container">
        {/* Display the current text */}
        {/* <p>{displayText}</p> */}
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

// To do after review //
// - Change name of "toogle" component
// - Clean up comments, for easier readable code ( use chatGPT "essential" comments )
// - Clean up toggleView function on line 15, use "!isRoadMapView" instead
// - Remove parent fragment since it is not necessary on line 22 + 47
// - BONUS: Format prop attributes for easier reading
