import React from "react";

import CreatePostBtn from "../components/CreatePostBtn/CreatePostBtn";
import ViewToggleSwitchContainer from "../components/ViewToggleSwitchContainer/ViewToggleSwitchContainer";
import RoadmapContainerPlanned from "../components/RoadmapContainer/RoadmapContainerPlanned";
import RoadmapContainerInProgress from "../components/RoadmapContainer/RoadmapContainerInProgress";
import RoadmapContainerComplete from "../components/RoadmapContainer/RoadmapContainerComplete";

import "./view-styles/RoadmapView.scss";
import { Link } from "react-router-dom";

export default function RoadmapView() {
  return (
    <>
      <div className="wrap">
        <div className="heading">
          <h1 className="heading__title">Roadmap</h1>
        </div>

        <main>
          <section className="filter-grid-container">
            <div className="filter-grid-create-btn">
              <CreatePostBtn />
            </div>

              <div className="filter-grid-toggle-btn">
                <ViewToggleSwitchContainer />
              </div>
              
              <div className="filter-grid-sort-filter">
                {/* <SortFunctionAndFilterContainer /> */}
                sort and filter kommer her
              </div>

          </section>

          <div className="roadmap-flex-container">
            <RoadmapContainerPlanned />
            <RoadmapContainerInProgress />
            <RoadmapContainerComplete />
          </div>

        </main>
      </div>
{/* 
      <Link to="listview">
        <p>go to list view</p>
      </Link> */}
    </>
  );
}
