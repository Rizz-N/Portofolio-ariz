import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed w-full top-0 flex items-center justify-between px-10 py-5 text-white bg-linear-to-r from-black to-orange-500 z-1000">
        <div className="font-bold md:text-4xl text-xl bg-linear-to-b from-gray-900 via-orange-500 to-gray-900 bg-clip-text text-transparent">
          <Link to={"/"}>PORTOFOLIO</Link>
        </div>
        <div className="hidden md:flex items-center gap-16 text-2xl">
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

        <button className="md:hidden" onClick={() => setOpen(true)}>
          <IoMenu className="text-4xl" />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[1001]
  ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bg-black w-1/2 h-full z-[1001] p-5
  transform transition-transform duration-300
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="mb-10" onClick={() => setOpen(false)}>
          <IoClose className="text-4xl text-orange-400" />
        </button>

        <div className="flex flex-col items-center text-orange-400 gap-5 text-2xl font-medium">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/home/galery"}>Galery</NavLink>
          <NavLink to={"/home/project"}>Project</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
