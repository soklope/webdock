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
      <UpvoteBtn numberOfUpvotes={totalUpvotes} postId={id} />

      <Link
        to={`/posts/${id}`}
        className="roadmap-child-container__content"
      >
        <div className="roadmap-child-container__title-category-tag">
          <p className="roadmap-child-container__title">{title} <span>{ myOwnStatus && <p className={`listview-child-container__tag tag-my-post-color`}>My Post</p>}</span> </p>
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
