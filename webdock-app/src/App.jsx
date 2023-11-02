// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./layout/navigation/Navigation";
// import CreatePostBtn from "./components/CreatePostBtn/CreatePostBtn";
import SortFunction from "./components/SortFunctionAndFilterContainer/SortFunction/SortFunction.jsx";

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

        <SortFunction />

      </div>
    </div>
  );
}
