import React from "react";
import "../ViewToggleSwitch/ViewToggleSwitch.scss";

// This component represents a toggle switch that takes 2 props.
export default function ViewToggleSwitch({ switchIcon, onToggle }) {
  // Renders a clickable toggle switch element.
  return (
    <button className="view-toggle-switch ">
      <span className={switchIcon} onClick={onToggle}></span>
    </button>
  );
}
