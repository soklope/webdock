import { useEffect, useState } from "react";
import "./RoadmapChildren.scss"

import { plannedArrayDb } from "../../dummyDb";

export default function RoadmapChildren() {

    return (
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
    );
}
