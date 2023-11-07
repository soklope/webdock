/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import './Statusfilters.scss'

// This is a Statusfilters  component
export default function CategoryBtn({ indicationColor, title, borderColor, backgroundColor }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleButtonClick = () => {
    // Update the isToggled state when the button is clicked
    setIsToggled(!isToggled);
  }

  const textClassName = isToggled ? 'Statusfilters-btn-mypost-text-toggled' : 'Statusfilters-btn-mypost-text';
  const fontClassName = isToggled ? 'category-btn-mypost-text-font-toggled' : 'category-btn-mypost-text-font';

  return (
    <>
      <button className={`Statusfilters-btn-mypost-text ${borderColor} ${isToggled && backgroundColor}`} onClick={handleButtonClick}>
        <p>{title}</p>
        <div className={`Statusfilters-btn-mypost-text__indicator ${indicationColor}`}></div>
      </button>
    </>
  );
}

