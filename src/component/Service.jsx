import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Service = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="md:mt-20 mt-18">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Service;
