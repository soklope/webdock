import "./RoadmapChildren.scss"

export default function RoadmapChildren( {title, category, status, numberOfComments, statusColor} ) {

    return (
        <>
            <button>Up</button>

            <div className="roadmap-child-container__title-category-tag">
                <p className="roadmap-child-container__title">{title}</p>
                <p className="roadmap-child-container__category">{category}</p>
                <p className={`roadmap-child-container__tag ${statusColor}`}>{status}</p>
            </div>

            <div className="roadmap-child-container__comment">
                <span className="roadmap-child-container__comment__icon"></span>
                <p>{numberOfComments}</p>
            </div>
        </>
    );
}