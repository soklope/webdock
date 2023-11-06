import { useState } from "react";
import ViewToggleSwitch from "../ViewToggleSwitchContainer/ViewToggleSwitch/ViewToggleSwitch";
import "./ViewToggleSwitchContainer.scss";

// Component managing toggle switches between Roadmap and List views.
export default function ViewToggleSwitchContainer() {
  const [isRoadmapView, setIsRoadmapView] = useState(true); 
  //const [displayText, setDisplayText] = useState("Roadmap View"); 

  // Function to toggle between Roadmap and List views
  const toggleView = () => {
    setIsRoadmapView(!isRoadmapView);
    //setDisplayText(isRoadmapView ? "List View" : "Roadmap View");
  };

  // Renders toggle switches with dynamic class names based on current view
  return (
    //<p>{displayText}</p> below <div className="toggle-switches-container">
    <div className="toggle-switches-container">
      <ViewToggleSwitch
        switchIcon={
          `view-toggle-switch__roadmap${isRoadmapView ? "--active" : ""
        }`}
        onToggle={toggleView}
      />
      <ViewToggleSwitch
        switchIcon={
          `view-toggle-switch__list${isRoadmapView ? "" : "--active"
        }`}
        onToggle={toggleView}
      />
    </div>
  );
}
