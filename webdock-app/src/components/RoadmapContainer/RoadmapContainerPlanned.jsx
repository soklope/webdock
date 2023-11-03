import { useState, useEffect } from "react";
import "./RoadmapContainer.scss";

import { plannedArrayDb } from "../../dummyDb";
import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";


export default function RoadmapContainerPlanned() {

  const [containerIsOpen, setContainerIsOpen] = useState(false)
  const [postCount, setPostCount] = useState(0)

  useEffect(() => {
    setPostCount(plannedArrayDb.length)
  }, [])

  const openContainer = () => {
    setContainerIsOpen(!containerIsOpen)
  }

  return (

    <>
      <div className="roadmap-container">
        <div className="roadmap-container__tooltip" onClick={openContainer}>
          <p>Planned</p>
          <span className={`roadmap-container__dropdown-icon planned-color ${containerIsOpen ? "rotate" : ""}`}></span>
          <p className="roadmap-container__postcount">{postCount}</p>
          <div className={`roadmap-container__color-indicator planned-color`}/>
        </div>
  
        { containerIsOpen  && 
          
          <div className="roadmap-container__dropdown">
            <>
              {plannedArrayDb.map((post, index) => (
                  <div key={index} className="roadmap-child-container">
                  <RoadmapChildren 
                    title={post.title}
                    category={post.category}
                    status={post.status}
                    numberOfComments={post.numberOfComments}
                    totalUpvotes={post.numberOfUpvotes}
                    statusColor={"tag-planned-color"}
                  />
                </div>
              ))}
            </>
          </div>

        }

        <div className="roadmap-container__children">
          <>
              {plannedArrayDb.map((post, index) => (
                  <div key={index} className="roadmap-child-container">
                    <RoadmapChildren 
                      title={post.title}
                      category={post.category}
                      status={post.status}
                      numberOfComments={post.numberOfComments}
                      totalUpvotes={post.numberOfUpvotes}
                      statusColor={"tag-planned-color"}
                    />
                  </div>
              ))}
          </>
        </div>
      </div>
    </>
  )
}

// Todo fter code review 
// Clean up react fragments
// More transparency either in comments or better classes (cant see what is mobile and what is desktop)