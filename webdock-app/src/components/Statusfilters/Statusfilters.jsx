/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import './Statusfilters.scss'

export default function Statusfilter({ indicationColor, title, borderColor, backgroundColor, isSelected, onSelect }) {

  const handleButtonClick = () => {
    onSelect(indicationColor);
  }

  return (
    <button className={`Statusfilters-btn-mypost-text ${borderColor} ${isSelected && backgroundColor}`} onClick={handleButtonClick}>
      <p>{title}</p>
      <div className={`Statusfilters-btn-mypost-text__indicator ${indicationColor}`}></div>

    </button>
    
  );
}
