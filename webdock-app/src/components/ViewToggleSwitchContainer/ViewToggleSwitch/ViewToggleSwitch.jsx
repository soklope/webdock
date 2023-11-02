import React from "react";
import "../ViewToggleSwitch/ViewToggleSwitch.scss";

// This component represents a toggle switch.
// It takes two props: switchIcon (class name for switch style) and onToggle (function to handle toggle action).
export default function ViewToogleSwitch({ switchIcon, onToggle }) {
  // Render a button element with class name "view-toggle-switch"
  // Inside the button, render a span element with the provided switchIcon class name
  // When the span is clicked, it triggers the onToggle function provided as a prop

  return (
    <button className="view-toggle-switch">
      <span className={switchIcon} onClick={onToggle}></span>
    </button>
  );
}
