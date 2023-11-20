import "./ListViewPostItem.scss";
import UpvoteBtn from "../UpvoteBtn/UpvoteBtn";

export default function ListViewPostItem({ title, category, status, numberOfComments, statusColor, totalUpvotes, indicatorColor, myOwnStatus }) {

  return (
    <div className="listview-child-container">
      <div className="listview-child-container__button">
        <UpvoteBtn
          numberOfUpvotes={totalUpvotes}
        />
      </div>

      <div className="listview-child-container__title-category-tag">
        <p className="listview-child-container__title">{title}</p>
        <div className="listview-child-container__tag-parent">
          { status && <p className={`listview-child-container__tag ${statusColor}`}>{status}</p>}
          { myOwnStatus && <p className={`listview-child-container__tag tag-my-post-color`}>My Post</p>}
        </div>
        <p className="listview-child-container__category">{category}</p>
      </div>

      <div className="listview-child-container__comment">
        <span className="listview-child-container__comment__icon"></span>
        <p>{numberOfComments}</p>
      </div>

      {/* <div className="listview-child-container__indicator"/> */}
      <div className={`listview-child-container__indicator ${indicatorColor}`}/>
    </div>
  );
}
