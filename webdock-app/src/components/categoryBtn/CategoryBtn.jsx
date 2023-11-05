import { useState } from "react";
import './CategoryBtn.scss'

// This is a CategoryBtn component
export default function CategoryBtn({ indicationColor, title, borderColor, backgroundColor }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleButtonClick = () => {
    // Update the isToggled state when the button is clicked
    setIsToggled(!isToggled);
  }

  return (
  
      <button className={`category-btn ${borderColor} ${isToggled && backgroundColor}`} onClick={handleButtonClick}>
        <p>{title}</p>
        <div className={`category-btnt__indicator ${indicationColor}`}></div>
      </button>
  
  );
}


