import React from "react";
import { Link } from "react-router-dom";

import CreatePostBtn from "../components/CreatePostBtn/CreatePostBtn";
import ViewToggleSwitchContainer from "../components/ViewToggleSwitchContainer/ViewToggleSwitchContainer";
import SortFunctionAndFilterContainer from "../components/SortFunctionAndFilterContainer/SortFunctionFilterContainer";
import CategoryBtnContainer from "../components/CategoryBtnContainer/CategoryBtnContainer";

import "./view-styles/RoadmapView.scss";

export default function RoadmapView() {
  return (
    <>
      <div className="wrap">
        <div className="heading">
          <h2 className="heading__title">
            Feature Request
          </h2>
          <CreatePostBtn />
        </div>

        <main>
          <div>
            filtering
            <div>
              <ViewToggleSwitchContainer />
            </div>
            <div>
              <div>
                <CategoryBtnContainer />
              </div>
              <div>
                <SortFunctionAndFilterContainer />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Link to="/">
        <p>go to roadmap view</p>
      </Link>
    </>
  );
}
