import { useState, useEffect } from "react";
import "./RoadmapContainer.scss";

export default function RoadmapContainer({ statusTitle, postCount, statusColor, statusColorDesktop }) {

  const [containerIsOpen, setContainerIsOpen] = useState(false)

  const test = () => {
    setContainerIsOpen(!containerIsOpen)
  }

  return (

    <>
      <div className="roadmap-container">
        <div className="roadmap-container__tooltip" onClick={test}>
          <p>{statusTitle}</p>
          <span className={`roadmap-container__dropdown-icon ${statusColor} ${containerIsOpen ? "rotate" : ""}`}></span>
          <p className="roadmap-container__postcount">{postCount}</p>
          <div className={`roadmap-container__color-indicator ${statusColorDesktop}`}/>
        </div>
  
        { containerIsOpen  && 
          
          <div className="roadmap-container__dropdown">

          </div>

        }

        <div className="roadmap-container__children">

        </div>
      </div>
    </>
  )
}
