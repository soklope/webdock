import "./view-styles/RoadmapView.scss";
import { useEffect } from "react";

import CreatePostBtn from "../components/CreatePostBtn/CreatePostBtn";
import ViewToggleSwitchContainer from "../components/ViewToggleSwitchContainer/ViewToggleSwitchContainer";
import RoadmapContainerPlanned from "../components/RoadmapContainer/RoadmapContainerPlanned";
import RoadmapContainerInProgress from "../components/RoadmapContainer/RoadmapContainerInProgress";
import RoadmapContainerComplete from "../components/RoadmapContainer/RoadmapContainerComplete";

import useRoadmapStore from "../stores/viewStore";
import ListView from "./ListView";

export default function RoadmapView() {

  const { roadmapView } = useRoadmapStore();

  const fetchData = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search)
        const ssoToken = urlParams.get('ssoToken')

        const response = await fetch("http://localhost:3000/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ ssoToken }),
        })

        const userData = await response.json()
        localStorage.setItem('user', JSON.stringify(userData));

        console.log(userData);
    } catch (error) {
        console.error("error fetching data:", error);
    }
}

useEffect(() => {
  fetchData()
}, [])


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
              
              {/* <div className="filter-grid-sort-filter">
                <SortFunctionAndFilterContainer />
              </div> */}

          </section>

          {
            roadmapView ?

            <div className="roadmap-flex-container slide-right-animation">
              <RoadmapContainerPlanned />
              <RoadmapContainerInProgress />
              <RoadmapContainerComplete />
            </div>

            :

            <div className="slide-left-animation">
              <ListView />
            </div>
          }
        </main>
      </div>
    </>
  );
}
