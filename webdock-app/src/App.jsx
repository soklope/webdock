import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/navigation/Navigation";
import CreatePostBtn from "./components/CreatePostBtn/CreatePostBtn";
import RoadmapContainer from "./components/RoadmapContainer/RoadmapContainer";

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
        <RoadmapContainer 
          statusTitle={"Planned"} 
          postCount={69}
          statusColor={"planned-color"}
          statusColorDesktop={"planned-color"}
        />

        <RoadmapContainer 
          statusTitle={"In Progress"} 
          postCount={69}
          statusColor={"in-progress-color"}
          statusColorDesktop={"in-progress-color"}
        />

        <RoadmapContainer 
          statusTitle={"Complete"} 
          postCount={69}
          statusColor={"complete-color"}
          statusColorDesktop={"complete-color"}
        />
      </div>
    </div>
  );
}
