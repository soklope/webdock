import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/navigation/Navigation";

export default function App() {
  return (
    <div className="background">
      <div className="background__image">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
