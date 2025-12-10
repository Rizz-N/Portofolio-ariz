import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Service = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Service;
