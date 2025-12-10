import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaStar, FaEye } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubLink,
  liveLink,
  stars,
  views,
  category,
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20">
      {/* Image Container */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-semibold rounded-full">
            {category}
          </span>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-sm rounded-full hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 hover:border-orange-500/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats & Links */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-800">
          {/* Stats */}
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm">{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye className="text-blue-400" />
              <span className="text-sm">{views}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-orange-900 hover:to-red-900 hover:border-orange-500 transition-all duration-300 group/link"
              >
                <FaGithub className="text-xl text-gray-400 group-hover/link:text-white" />
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center gap-2 group/live"
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="group-hover/live:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
