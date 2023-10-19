import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./layout/navigation/Navigation";


export default function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <Navigation /> }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
