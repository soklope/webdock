import { useState, useEffect } from "react";
import "./RoadmapContainer.scss";

import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";
import { inProgressArrayDb } from "../../dummyDb";

export default function RoadmapContainerInProgress() {

  const [containerIsOpen, setContainerIsOpen] = useState(false)
  const [postCount, setPostCount] = useState(0)

  useEffect(() => {
    setPostCount(inProgressArrayDb.length)
  }, [])

  const openContainer = () => {
    setContainerIsOpen(!containerIsOpen)
  }

  return (

    <>
      <div className="roadmap-container">
        <div className="roadmap-container__tooltip" onClick={openContainer}>
          <p>In Progress</p>
          <span className={`roadmap-container__dropdown-icon ${containerIsOpen ? "rotate" : ""}`}></span>
          <p className="roadmap-container__postcount">{postCount}</p>
          <div className={`roadmap-container__color-indicator-in-progress`}/>
        </div>
  
        { containerIsOpen  && 
          
          <div className="roadmap-container__dropdown">
            <>
                {inProgressArrayDb.map((post, index) => (
                  <div key={index} className="roadmap-child-container">
                    <RoadmapChildren 
                      title={post.title}
                      category={post.category}
                      status={post.status}
                      numberOfComments={post.numberOfComments}
                      totalUpvotes={post.numberOfUpvotes}
                      statusColor={"tag-in-progress-color"}
                    />
                  </div>
                ))}
            </>
          </div>

        }

        <div className="roadmap-container__children">
          <>
              {inProgressArrayDb.map((post, index) => (
                  <div key={index} className="roadmap-child-container">
                    <RoadmapChildren 
                      title={post.title}
                      category={post.category}
                      status={post.status}
                      numberOfComments={post.numberOfComments}
                      totalUpvotes={post.numberOfUpvotes}
                      statusColor={"tag-in-progress-color"}
                    />
                  </div>
              ))}
          </>
        </div>
      </div>
    </>
  )
}
