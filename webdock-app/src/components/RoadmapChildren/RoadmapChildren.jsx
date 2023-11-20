import "./RoadmapChildren.scss";
import UpvoteBtn from "../UpvoteBtn/UpvoteBtn";

import { Link } from 'react-router-dom';
 
export default function RoadmapChildren({
  title,
  category,
  status,
  numberOfComments,
  statusColor,
  totalUpvotes,
  id
}) {
  return (
    <>
      <UpvoteBtn numberOfUpvotes={totalUpvotes} />

      <Link
        to={`/posts/${id}`}
        className="roadmap-child-container__content"
      >
        <div className="roadmap-child-container__title-category-tag">
          <p className="roadmap-child-container__title">{title}</p>
          <p className="roadmap-child-container__category">{category}</p>
          {/* <p className={`roadmap-child-container__tag ${statusColor}`}>{status}</p> */}
        </div>

        <div className="roadmap-child-container__comment">
          <span className="roadmap-child-container__comment__icon"></span>
          <p>{numberOfComments}</p>
        </div>
      </Link>
    </>
  );
}

// Todo after code review
// - Revisit class naming "roadmap-child-container...."
// - optinal, look at spread operator afor props (...)
//
//<div className="roadmap-child">
// <p className="roadmap-child__title">{title}</p>
