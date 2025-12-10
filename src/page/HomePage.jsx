import Card from "../component/card";
import {
  FaReact,
  FaPaintBrush,
  FaCube,
  FaInstagram,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="h-screen bg-black text-center flex items-center justify-center text-white">
        <div className="relative">
          <h1 className="text-9xl font-bold bg-linear-to-r from-gray-900 via-orange-600 to-gray-800 bg-clip-text text-transparent border-b-2 border-gray-400">
            PORTOFOLIO.
          </h1>
          <div className="absolute bottom-19 bg-white/10 backdrop-blur-xs py-2 px-4 rounded-full">
            <h1 className="text-4xl">Muhammad Alfarizi</h1>
          </div>
          <div className="absolute right-0 top-21 bg-white/10 backdrop-blur-xs py-2 px-4 rounded-full">
            <h1 className="text-4xl">Web Design</h1>
          </div>
        </div>
      </div>
      <div className="h-screen bg-black text-white flex flex-col gap-10 px-20">
        <div className="flex flex-col gap-10 mt-25">
          <div>
            <h1 className="text-xl">My Service</h1>
          </div>
          <div className="text-5xl w-100">
            <h1>WHAT I'M OFFERING</h1>
          </div>
        </div>
        <div className="flex gap-10 ml-40">
          <Card
            title="Frontend"
            titleStyle="text-4xl"
            Icon={FaReact}
            bgColor="bg-orange-500"
            textColor="text-white"
            to="/frontend"
          />
          <Card
            title="UI/UX Design"
            titleStyle="text-4xl"
            Icon={FaPaintBrush}
            bgColor="border-2 border-orange-500"
            textColor="text-white"
            to="/uiux"
          />
          <Card
            title="3D Modeler"
            titleStyle="text-4xl"
            Icon={FaCube}
            bgColor="border-2 border-orange-500"
            textColor="text-white"
            to="/modeling"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
