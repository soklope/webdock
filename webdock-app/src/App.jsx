import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/navigation/Navigation";
import CreatePostBtn from "./components/CreatePostBtn/CreatePostBtn";
import RoadmapChildren from "./components/RoadmapChildren/RoadmapChildren";

import RoadmapContainerPlanned from "./components/RoadmapContainer/RoadmapContainerPlanned"
import RoadmapContainerInProgress from "./components/RoadmapContainer/RoadmapContainerInProgress"
import RoadmapContainerComplete from "./components/RoadmapContainer/RoadmapContainerComplete"

export default function App() {

  return (
    <div className="background">
      <div className="background__image">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navigation />}></Route> */}
          </Routes>
        </BrowserRouter>
        {/* <CreatePostBtn /> */}

        <RoadmapContainerPlanned />
        <RoadmapContainerInProgress />
        <RoadmapContainerComplete />
      </div>
    </div>
  );
}
