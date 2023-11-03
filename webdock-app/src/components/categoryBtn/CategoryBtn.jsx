/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import './CategoryBtn.scss'

// This is a CategoryBtn component
export default function CategoryBtn({ indicationColor, title, borderColor, backgroundColor }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleButtonClick = () => {
    // Update the isToggled state when the button is clicked
    setIsToggled(!isToggled);
  }

  const textClassName = isToggled ? 'category-btn-mypost-text-toggled' : 'category-btn-mypost-text';
  const fontClassName = isToggled ? 'category-btn-mypost-text-font-toggled' : 'category-btn-mypost-text-font';

  return (
    <>
      <button className={`category-btn-mypost-text ${borderColor} ${isToggled && backgroundColor}`} onClick={handleButtonClick}>
        <p>{title}</p>
        <div className={`category-btn-mypost-text__indicator ${indicationColor}`}></div>
      </button>
    </>
  );
}

// To do after code review
// - Delete consts on line 15, 16, since they have no usage
// - Delete fragment line 19, 24, since it is not needed
// - Clean up comments line 1, 2