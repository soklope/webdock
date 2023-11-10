/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import './Statusfilters.scss'

export default function Statusfilter({ indicationColor, title, borderColor, backgroundColor, isSelected, onSelect }) {

  const handleButtonClick = () => {
    onSelect(title);
    // changes to title 
  }

// The className is dynamically set based on the provided borderColor and isSelected properties.
// If the button is selected (isSelected is true), the backgroundColor is applied.
// The onClick event is handled by the handleButtonClick function
  return (
    <button className={`Statusfilters-btn-mypost-text ${borderColor} ${isSelected && backgroundColor}`} onClick={handleButtonClick}>
      <p>{title}</p>
      <div className={`Statusfilters-btn-mypost-text__indicator ${indicationColor}`}></div>

    </button>
    
  );
}
