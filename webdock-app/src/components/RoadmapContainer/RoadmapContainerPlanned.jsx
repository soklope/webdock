import { useState, useEffect } from "react";
import "./RoadmapContainer.scss";

import { plannedArrayDb } from "../../dummyDb";

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
                      <button>Up</button>

                      <div className="roadmap-child-container__title-category-tag">
                          <p className="roadmap-child-container__title">{post.title}</p>
                          <p className="roadmap-child-container__category">Hardware and products</p>
                          <p className="roadmap-child-container__tag">{post.status}</p>
                      </div>

                      <div className="roadmap-child-container__comment">
                          <span className="roadmap-child-container__comment__icon"></span>
                          <p>{post.numberOfComments}</p>
                      </div>
                  </div>
              ))}
            </>
          </div>

        }

        <div className="roadmap-container__children">
          <>
              {plannedArrayDb.map((post, index) => (
                  <div key={index} className="roadmap-child-container">
                      <button>Up</button>

                      <div className="roadmap-child-container__title-category-tag">
                          <p className="roadmap-child-container__title">{post.title}</p>
                          <p className="roadmap-child-container__category">Hardware and products</p>
                          <p className="roadmap-child-container__tag">{post.status}</p>
                      </div>

                      <div className="roadmap-child-container__comment">
                          <span className="roadmap-child-container__comment__icon"></span>
                          <p>{post.numberOfComments}</p>
                      </div>
                  </div>
              ))}
          </>
        </div>
      </div>
    </>
  )
}
