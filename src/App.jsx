import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./component/Service";
import GaleryPage from "./page/GaleryPage";
import HomePage from "./page/HomePage";
import Frontend from "./page/Frontend";
import WebDesign from "./page/WebDesign";
import Modeling from "./page/Modeling";
import Project from "./page/Project";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Service />}>
            <Route index element={<HomePage />} />
            <Route path="/home/galery" element={<GaleryPage />} />
            <Route path="/home/project" element={<Project />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/uiux" element={<WebDesign />} />
            <Route path="/modeling" element={<Modeling />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
