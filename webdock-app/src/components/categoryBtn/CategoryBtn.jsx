import { useState } from "react";
import './CategoryBtn.scss'

// This is a CategoryBtn component
export default function CategoryBtn({ indicationColor, title, borderColor, backgroundColor, isSelected, onSelect }) {

  const handleButtonClick = () => {
    // Inform the parent component about the selection
    onSelect(indicationColor);
  }

  return (
      <button className={`category-btn ${borderColor} ${isSelected && backgroundColor}`} onClick={handleButtonClick}>
        <p>{title}</p>
        <div className={`category-btnt__indicator ${indicationColor}`}></div>
      </button>
  );
}


