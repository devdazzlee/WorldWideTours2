import Destination from "./Components/Destination/Destination";
import DetailTour from "./Components/DetailedTour/DetailTour";
import Home from "./Components/Home/Home";
import Contact_Page from "./Components/Contact-page/Contact_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
          <BrowserRouter>
          <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/Destination"} element={<Destination/>} />
          <Route path={"/DetailTour"} element={<DetailTour/>} />
          <Route path={"/Contact-us"} element={<Contact_Page/>} />
          </Routes>
          </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
