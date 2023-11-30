import { useState, useEffect } from "react";
import "./RoadmapContainer.scss";
import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";

export default function RoadmapContainerPlanned() {
  const [containerIsOpen, setContainerIsOpen] = useState(false);
  const [postCount, setPostCount] = useState(0);

  const endpointURL = `http://localhost:8080/api/v1/getallpostsbystatus/complete`
  const [completeArray, setCompleteArray] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpointURL);
        const data = await response.json();
        setCompleteArray(data)
        setPostCount(data.length)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const openContainer = () => {
    setContainerIsOpen(!containerIsOpen);
  };

  const renderRoadmapChildren = () => {
    return completeArray.map((post, index) => (
      <div key={index} className="roadmap-child-container">
        <RoadmapChildren
          title={post.title}
          category={post.Category.category}
          numberOfComments={post.Comments.length}
          totalUpvotes={post.upvotes}
          // status={post.status}
          // statusColor={"tag-planned-color"}
        />
      </div>
    ));
  };
  
  return (
    <div className="roadmap-container">
		<div className="roadmap-container__tooltip" onClick={openContainer}>
			<p>Complete</p>
			<span className={`roadmap-container__dropdown-icon ${containerIsOpen ? "rotate" : ""}`}></span>
			<p className="roadmap-container__postcount">{postCount}</p>
			<div className="roadmap-container__color-indicator-complete" />
		</div>

		{containerIsOpen && (
			<div className="roadmap-container__dropdown">{renderRoadmapChildren()}</div>
		)}

      
		{ completeArray ?
        	( <div className="roadmap-container__children">{renderRoadmapChildren()}</div> )
        	:
        	<div>Loading...</div>
		}
    </div>
  );
}