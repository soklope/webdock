import React from "react";
import { Link } from "react-router-dom";

import ViewToggleSwitchContainer from "../components/ViewToggleSwitchContainer/ViewToggleSwitchContainer";
import SortFunctionAndFilterContainer from "../components/SortFunctionAndFilterContainer/SortFunctionFilterContainer";

import "./view-styles/RoadmapView.scss";
import StatusfiltersContainer from "../components/StatusfiltersContainer/StatusfiltersContainer";

export default function RoadmapView() {
  return (
    <>
      <div className="wrap">
        <div className="heading">
          <h2 className="heading__title">
            Feature Request
          </h2>
          <StatusfiltersContainer />
        </div>

        <main>
          <div>
            filtering
            <div>
              <ViewToggleSwitchContainer />
            </div>
            <div>

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
