import "./RoadmapChildren.scss";
import UpvoteBtn from "../UpvoteBtn/UpvoteBtn";

import { Link } from 'react-router-dom';
 
export default function RoadmapChildren({
  title,
  category,
  numberOfComments,
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
        </div>

        <div className="roadmap-child-container__comment">
          <span className="roadmap-child-container__comment__icon"></span>
          <p>{numberOfComments}</p>
        </div>
      </Link>
    </>
  );
}
