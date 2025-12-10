import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full top-0 flex justify-between px-10 py-5 text-white bg-linear-to-r from-black to-orange-500 z-1000">
        <div className="font-bold text-4xl bg-linear-to-b from-gray-900 via-orange-500 to-gray-900 bg-clip-text text-transparent">
          <Link to={"/"}>PORTOFOLIO</Link>
        </div>
        <div className="flex items-center gap-16 text-2xl">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `pb-2 transition-all duration-300 hover:text-orange-300 ${
                isActive
                  ? "border-b-2 border-orange-500 text-orange-300 font-semibold"
                  : "border-b-2 border-transparent"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/home/galery"}
            className={({ isActive }) =>
              `pb-2 transition-all duration-300 hover:text-orange-300 ${
                isActive
                  ? "border-b-2 border-orange-500 text-orange-300 font-semibold"
                  : "border-b-2 border-transparent"
              }`
            }
          >
            Galeri
          </NavLink>
          <NavLink
            to={"home/project"}
            className={({ isActive }) =>
              `pb-2 transition-all duration-300 hover:text-orange-300 ${
                isActive
                  ? "border-b-2 border-orange-500 text-orange-300 font-semibold"
                  : "border-b-2 border-transparent"
              }`
            }
          >
            Project
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
