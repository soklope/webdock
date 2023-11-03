import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/navigation/Navigation";
import CreatePostBtn from "./components/CreatePostBtn/CreatePostBtn";


export default function App() {
  return (
    <div className="background">
      <div className="background__image">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}></Route>
          </Routes>
        </BrowserRouter>
        <CreatePostBtn /> */}
       
      </div>
    </div>
  );
}
