import { useState } from "react";
import ProjectCard from "../component/ProjectCard";
import {
  FaFilter,
  FaSearch,
  FaFire,
  FaCode,
  FaPaintBrush,
  FaCube,
} from "react-icons/fa";
import DashImg from "../assets/img/DashboardPanel.png";
import AbsenImg from "../assets/img/HomePage.png";
import Projectimg from "../assets/img/Maison.png";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Data contoh project
  const projects = [
    {
      id: 1,
      title: "Panel Admin",
      description:
        "Full-stack panel admin absensi  dengan React, Node.js, dan Mysql. dengan fitur tambah data murid dan guru",
      image: DashImg,
      tags: ["React", "Node.js", "MySQL", "Tailwind"],
      githubLink: "https://github.com/Rizz-N/pkm-student-attachment",
      liveLink: "https://github.com/Rizz-N/pkm-student-attachment",
      stars: "1",
      views: "0",
      category: "Fullstack",
    },
    {
      id: 2,
      title: "web Absensi sekolah",
      description:
        "Website Absensi sekolah dengan design yang responsive dan user friendly dengan fitur absen guru dan murid dan export data ke excel",
      image: AbsenImg,
      tags: ["React", "Node.js", "MySQL", "Tailwind"],
      githubLink: "https://github.com/Rizz-N/pkm-student-attachment",
      liveLink: "https://github.com/Rizz-N/pkm-student-attachment",
      stars: "1",
      views: "0",
      category: "Fullstack",
    },
    {
      id: 2,
      title: "Maison Rose",
      description:
        "Website Galery dengan fitur preview gambar dan download dan gambar di ambil dari storage appwrite",
      image: Projectimg,
      tags: ["HTML", "Tailwind", "AppWrite", "GitHub pages"],
      githubLink: "https://github.com/Rizz-N/maison-rose",
      liveLink: "https://rizz-n.github.io/maison-rose/",
      stars: "0",
      views: "0",
      category: "Fullstack",
    },
  ];

  // Filter categories
  const categories = [
    {
      id: "all",
      label: "All Projects",
      icon: <FaFire />,
      count: projects.length,
    },
    {
      id: "fullstack",
      label: "Fullstack",
      icon: <FaCode />,
      count: projects.filter((p) =>
        p.category.toLowerCase().includes("fullstack")
      ).length,
    },
    {
      id: "uiux",
      label: "UI/UX",
      icon: <FaPaintBrush />,
      count: projects.filter((p) => p.category.toLowerCase().includes("uiux"))
        .length,
    },
    {
      id: "3d",
      label: "3D Modeling",
      icon: <FaCube />,
      count: projects.filter((p) => p.category.toLowerCase().includes("3d"))
        .length,
    },
    {
      id: "ai",
      label: "AI/ML",
      icon: <FaCode />,
      count: projects.filter((p) => p.category.toLowerCase().includes("ai"))
        .length,
    },
  ];

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" ||
      project.category.toLowerCase().includes(activeFilter);

    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-8 px-4 md:px-8 lg:px-16 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Koleksi project yang sudah saya buat menggunakan teknologi modern dan
          best practices
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          {
            label: "Total Projects",
            value: projects.length,
            color: "from-orange-500 to-red-500",
          },
          {
            label: "GitHub Stars",
            value: "1",
            color: "from-yellow-500 to-orange-500",
          },
          {
            label: "Live Demos",
            value: projects.filter((p) => p.liveLink).length,
            color: "from-green-500 to-emerald-500",
          },
          {
            label: "Technologies",
            value: "10",
            color: "from-blue-500 to-cyan-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 text-center"
          >
            <div
              className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
            >
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter Section */}
      <div className="mb-12">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search projects by title, description, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-orange-600 to-red-600 border-orange-500 text-white"
                  : "bg-gray-900/50 border-gray-700 text-gray-400 hover:border-orange-500/50 hover:text-orange-300"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
              <span className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-gray-300 mb-4">
            No Projects Found
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-gray-800 rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm available for freelance
            work and exciting opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/frontend"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-orange-500/20"
            >
              Hire Me for a Project
            </a>
            <a
              href="https://wa.me/6285810614293"
              className="px-8 py-4 bg-gray-900 border border-gray-700 text-white font-bold text-lg rounded-xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:border-orange-500/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
