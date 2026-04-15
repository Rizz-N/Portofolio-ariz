import { FaInstagram, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center md:px-20 md:py-10 p-2 bg-black">
      <h1 className="absolute justify-center md:text-9xl text-5xl font-bold bg-linear-to-b from-black via-orange-600 to-black bg-clip-text text-transparent">
        PORTOFOLIO
      </h1>
      <div className="absolute md:top-20 top-5 md:right-30 right-5 flex items-center justify-center h-20 w-20 rounded-full animate-spin border-4 border-orange-500 border-t-transparent">
        <div className="h-10 w-10 rounded-full animate-spin border-4 border-white border-b-transparent"></div>
      </div>
      <div className="absolute md:bottom-20 bottom-5 md:left-30 left-5 flex items-center justify-center h-20 w-20 rounded-full animate-spin border-4 border-orange-500 border-t-transparent">
        <div className="h-10 w-10 rounded-full animate-spin border-4 border-white border-b-transparent"></div>
      </div>
      <div className="inline-block w-full bg-white/10 backdrop-blur-xs rounded-xl py-10 px-5">
        <div className="flex flex-col text-orange-500">
          <h1 className="text-4xl font-bold ">PORTOFOLIO</h1>
          <p className="md:w-150 text-justify mt-5 text-white">
            Ini adalah Website Portofolio sederhana <br />
            Saya memiliki keahlian dalam pengembangan aplikasi web dengan fokus
            pada frontend. Terbiasa menggunakan HTML, CSS, JavaScript, React,
            Berpengalaman membangun aplikasi yang responsif, terstruktur, dan
            berorientasi pada kebutuhan pengguna.
          </p>
          <div className="flex gap-5 mt-10">
            <Link to={"https://www.instagram.com"} className="text-5xl">
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link to={"https://www.facebook.com"} className="text-5xl">
              {" "}
              <FaFacebookSquare />{" "}
            </Link>
            <Link to={"https://www.github.com"} className="text-5xl">
              {" "}
              <FaGithubSquare />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 md:bottom-0 text-white">
        <p>&copy; Portofolio ariz | 2025</p>
      </div>
    </div>
  );
};

export default Footer;
