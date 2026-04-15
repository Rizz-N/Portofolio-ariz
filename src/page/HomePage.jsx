import Card from "../component/Card";
import { FaReact, FaPaintBrush, FaCube } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="h-screen bg-black text-center flex items-center justify-center text-white">
        <div className="relative">
          <h1 className="text-5xl md:text-9xl font-bold bg-linear-to-r from-gray-900 via-orange-600 to-gray-800 bg-clip-text text-transparent border-b-2 border-gray-400">
            PORTOFOLIO.
          </h1>
          <div className="absolute md:bottom-20 bottom-7 bg-white/10 backdrop-blur-xs py-2 px-4 rounded-full">
            <h1 className="md:text-4xl text-xl">Muhammad Alfarizi</h1>
          </div>
          <div className="absolute right-0 md:top-21 top-10 bg-white/10 backdrop-blur-xs py-2 px-4 rounded-full">
            <h1 className="md:text-4xl text-xl">Web Design</h1>
          </div>
        </div>
      </div>
      <div className="md:h-screen bg-black text-white flex flex-col gap-10 md:px-20 px-10 pb-10 ">
        <div className="flex flex-col gap-10 mt-25">
          <div>
            <h1 className="text-xl">My Service</h1>
          </div>
          <div className="md:text-5xl text-xl w-auto">
            <h1>WHAT I'M OFFERING</h1>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-10 md:ml-30">
          <Card
            title="Frontend"
            titleStyle="text-4xl"
            Icon={FaReact}
            bgColor="bg-orange-500"
            textColor="text-white"
          />
          <Card
            title="UI/UX Design"
            titleStyle="text-4xl"
            Icon={FaPaintBrush}
            bgColor="border-2 border-orange-500"
            textColor="text-white"
          />
          <Card
            title="3D Modeler"
            titleStyle="text-4xl"
            Icon={FaCube}
            bgColor="border-2 border-orange-500"
            textColor="text-white"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
