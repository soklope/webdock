import { useState, useEffect } from "react";
import "./RoadmapContainer.scss";
import { plannedArrayDb } from "../../dummyDb";
import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";

export default function RoadmapContainerPlanned() {
  const [containerIsOpen, setContainerIsOpen] = useState(false);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    setPostCount(plannedArrayDb.length);
  }, []);

  const openContainer = () => {
    setContainerIsOpen(!containerIsOpen);
  };

  const renderRoadmapChildren = () => {
    return plannedArrayDb.map((post, index) => (
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
    ));
  };
  
  return (
    <div className="roadmap-container">
      <div className="roadmap-container__tooltip" onClick={openContainer}>
        <p>Planned</p>
        <span className={`roadmap-container__dropdown-icon ${containerIsOpen ? "rotate" : ""}`}></span>
        <p className="roadmap-container__postcount">{postCount}</p>
        <div className="roadmap-container__color-indicator planned-color" />
      </div>

      {containerIsOpen && (
        <div className="roadmap-container__dropdown">{renderRoadmapChildren()}</div>
      )}

      <div className="roadmap-container__children">{renderRoadmapChildren()}</div>
    </div>
  );
}
