// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./layout/navigation/Navigation";
// import CreatePostBtn from "./components/CreatePostBtn/CreatePostBtn";
import SortFunctionAndFilterContainer from "./components/SortFunctionAndFilterContainer/SortFunctionFilterContainer.jsx";

export default function App() {
  return (
    <div className="background">
      <div className="background__image">
        {/* <BrowserRouter> */}
          {/* <Routes> */}
            {/* <Route path="/" element={<Navigation />}></Route>
          </Routes>
        </BrowserRouter> */}
        {/* <CreatePostBtn /> */}


        <SortFunctionAndFilterContainer />
        

        

      </div>
    </div>
  );
}
