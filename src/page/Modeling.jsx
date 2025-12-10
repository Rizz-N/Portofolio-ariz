import { useState } from "react";
import {
  FaCube,
  FaPrint,
  FaPaintBrush,
  FaFileExport,
  FaCamera,
  FaRulerCombined,
  FaPaperPlane,
  FaCheckCircle,
  FaDownload,
  FaPalette,
  FaLightbulb,
} from "react-icons/fa";
import { SiBlender, SiAutodesk } from "react-icons/si";
import { LuMove3D } from "react-icons/lu";

const Modeling = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    modelType: "character",
    complexity: "medium",
    textureQuality: "high",
    startDate: "",
    description: "",
    animation: "no",
    rigging: "no",
    fileFormat: "fbx",
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      nama: "Studio Animasi XYZ",
      modelType: "Character Model",
      complexity: "High Poly",
      status: "Completed",
      date: "2024-01-12",
      render: "https://example.com/render1.jpg",
    },
    {
      id: 2,
      nama: "Architectural Firm",
      modelType: "Building 3D",
      complexity: "Medium",
      status: "Texturing",
      date: "2024-01-08",
      render: "https://example.com/render2.jpg",
    },
    {
      id: 3,
      nama: "Game Developer Co",
      modelType: "Game Asset",
      complexity: "Low Poly",
      status: "Modeling",
      date: "2024-01-05",
      render: "https://example.com/render3.jpg",
    },
    {
      id: 4,
      nama: "Product Design Co",
      modelType: "Product Model",
      complexity: "High Poly",
      status: "Completed",
      date: "2023-12-20",
      render: "https://example.com/render4.jpg",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: projects.length + 1,
      nama: formData.nama,
      modelType:
        formData.modelType === "character"
          ? "Character Model"
          : formData.modelType === "product"
          ? "Product Model"
          : formData.modelType === "architectural"
          ? "Architectural"
          : "Game Asset",
      complexity:
        formData.complexity === "low"
          ? "Low Poly"
          : formData.complexity === "medium"
          ? "Medium Poly"
          : "High Poly",
      status: "Modeling",
      date: new Date().toISOString().split("T")[0],
      render: "https://example.com/new-render.jpg",
    };

    setProjects([newProject, ...projects]);

    // Reset form
    setFormData({
      nama: "",
      email: "",
      modelType: "character",
      complexity: "medium",
      textureQuality: "high",
      startDate: "",
      description: "",
      animation: "no",
      rigging: "no",
      fileFormat: "fbx",
    });

    alert("Pemesanan 3D Model berhasil dikirim!");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500";
      case "Texturing":
        return "bg-purple-500/20 text-purple-400 border-purple-500";
      case "Modeling":
        return "bg-red-500/20 text-red-400 border-red-500";
      case "Rigging":
        return "bg-orange-500/20 text-orange-400 border-orange-500";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500";
    }
  };

  const modelingPackages = [
    {
      name: "Low Poly Model",
      price: "Rp 2-5 juta",
      features: [
        "Simple 3D Model",
        "Basic Textures",
        "FBX/OBJ Format",
        "1 Revision",
      ],
      polyCount: "≤ 10k polygons",
      color: "border-orange-500",
    },
    {
      name: "High Quality Model",
      price: "Rp 8-15 juta",
      features: [
        "Detailed Model",
        "PBR Textures",
        "Multiple Formats",
        "UV Unwrapping",
        "3 Revisions",
      ],
      polyCount: "50k-100k polygons",
      color: "border-orange-500 bg-orange-500/10",
    },
    {
      name: "Premium Package",
      price: "Rp 20-50 juta",
      features: [
        "Cinematic Quality",
        "4K Textures",
        "Rigging",
        "Animation",
        "Unlimited Revisions",
      ],
      polyCount: "100k+ polygons",
      color: "border-orange-500",
    },
  ];

  const softwareList = [
    { name: "Blender", icon: <SiBlender /> },
    { name: "Maya", icon: <SiAutodesk /> },
    { name: "3DS Max", icon: <LuMove3D /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-800 bg-clip-text text-transparent">
          3D MODELING SERVICE
        </h1>
        <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          Create stunning 3D models for games, animation, product visualization,
          and more
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaCube className="text-3xl text-orange-500" />
            <h2 className="text-3xl font-bold">Request 3D Modeling</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">
                  Nama Lengkap / Perusahaan
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Masukkan nama atau nama perusahaan"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Model Type & Complexity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">
                  <FaCube className="inline mr-2" />
                  Tipe Model
                </label>
                <select
                  name="modelType"
                  value={formData.modelType}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="character">Character Model</option>
                  <option value="product">Product Model</option>
                  <option value="architectural">Architectural</option>
                  <option value="game-asset">Game Asset</option>
                  <option value="vehicle">Vehicle</option>
                  <option value="environment">Environment</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">
                  <FaRulerCombined className="inline mr-2" />
                  Complexity Level
                </label>
                <select
                  name="complexity"
                  value={formData.complexity}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="low">Low Poly (Game Ready)</option>
                  <option value="medium">Medium Poly</option>
                  <option value="high">High Poly (Cinematic)</option>
                </select>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-400">
                Additional Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3">
                    <FaPaintBrush className="text-orange-400" />
                    Texture Quality
                  </label>
                  <select
                    name="textureQuality"
                    value={formData.textureQuality}
                    onChange={handleChange}
                    className="bg-black border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-orange-500"
                  >
                    <option value="basic">Basic</option>
                    <option value="high">High Quality</option>
                    <option value="pbr">PBR Materials</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3">
                    <FaCamera className="text-orange-400" />
                    Animation
                  </label>
                  <select
                    name="animation"
                    value={formData.animation}
                    onChange={handleChange}
                    className="bg-black border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-orange-500"
                  >
                    <option value="no">Tidak</option>
                    <option value="basic">Basic (+Rp 5jt)</option>
                    <option value="complex">Complex (+Rp 10jt)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3">
                    <FaFileExport className="text-orange-400" />
                    File Format
                  </label>
                  <select
                    name="fileFormat"
                    value={formData.fileFormat}
                    onChange={handleChange}
                    className="bg-black border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-orange-500"
                  >
                    <option value="fbx">FBX</option>
                    <option value="obj">OBJ</option>
                    <option value="blend">Blender</option>
                    <option value="gltf">GLTF/GLB</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-gray-400 mb-2">
                <FaLightbulb className="inline mr-2" />
                Target Mulai Project
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-400 mb-2">
                Deskripsi & Referensi Model
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="Jelaskan model yang diinginkan, referensi gambar, ukuran, dan tujuan penggunaan..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
              Request Modeling Quote
            </button>
          </form>
        </div>

        {/* Table & Packages Section */}
        <div className="space-y-8">
          {/* Active Projects Table */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <FaPrint className="text-3xl text-orange-500" />
              <h2 className="text-3xl font-bold">Active Modeling Projects</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Klien
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Model Type
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Complexity
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Status
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Preview
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-b border-gray-800/50 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{project.nama}</p>
                          <p className="text-sm text-gray-400">
                            {project.date}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <FaCube className="text-orange-400" />
                          {project.modelType}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-gray-800/50 rounded text-sm">
                          {project.complexity}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full border ${getStatusColor(
                            project.status
                          )} text-sm font-medium`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                          <FaDownload />
                          Render
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">
                  {projects.length}
                </p>
                <p className="text-gray-400 text-sm">Active Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">
                  {projects.filter((p) => p.status === "Completed").length}
                </p>
                <p className="text-gray-400 text-sm">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-500">
                  {projects.filter((p) => p.status === "Texturing").length}
                </p>
                <p className="text-gray-400 text-sm">Texturing</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-500">
                  {projects.filter((p) => p.status === "Modeling").length}
                </p>
                <p className="text-gray-400 text-sm">Modeling</p>
              </div>
            </div>
          </div>

          {/* Modeling Packages */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Modeling Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {modelingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`border rounded-xl p-6 ${pkg.color} transition-transform hover:scale-105`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">{pkg.name}</h4>
                    <span className="text-sm bg-orange-500/20 text-orange-300 px-2 py-1 rounded">
                      {pkg.polyCount}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-orange-300 mb-4">
                    {pkg.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <FaCheckCircle className="text-green-400 text-sm" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Software & Process Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-8 text-center text-orange-400">
          Software & Process
        </h3>

        {/* Software Used */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8">
          <h4 className="text-2xl font-bold mb-6 text-orange-400">
            Software Used
          </h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {softwareList.map((software, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-900/50 rounded-xl p-4 min-w-[120px] hover:bg-gray-800/50 transition-colors"
              >
                <span className="text-3xl mb-2">{software.icon}</span>
                <span className="font-medium">{software.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modeling Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-orange-400">
              Modeling Process
            </h4>
            <div className="space-y-6">
              {[
                {
                  step: "Concept & Reference",
                  desc: "Gathering references and creating concept sketches",
                  icon: "🎨",
                },
                {
                  step: "Blocking",
                  desc: "Creating basic shapes and proportions",
                  icon: "📦",
                },
                {
                  step: "Modeling",
                  desc: "Detailed modeling and sculpting",
                  icon: "🔨",
                },
                {
                  step: "UV Unwrapping",
                  desc: "Preparing for texturing",
                  icon: "📐",
                },
                {
                  step: "Texturing",
                  desc: "Adding materials and textures",
                  icon: "🎭",
                },
                {
                  step: "Rendering",
                  desc: "Final renders and presentation",
                  icon: "📷",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 w-10 h-10 rounded-full flex items-center justify-center text-xl">
                    {process.icon}
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">{process.step}</h5>
                    <p className="text-gray-400 text-sm">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* File Formats */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-orange-400">
              Supported Formats
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  format: "FBX",
                  desc: "Universal 3D format",
                  compatibility: "⭐⭐⭐⭐⭐",
                },
                {
                  format: "OBJ",
                  desc: "Simple geometry format",
                  compatibility: "⭐⭐⭐⭐",
                },
                {
                  format: "GLTF/GLB",
                  desc: "Web 3D format",
                  compatibility: "⭐⭐⭐⭐",
                },
                {
                  format: "BLEND",
                  desc: "Blender native",
                  compatibility: "⭐⭐⭐",
                },
                { format: "MA", desc: "Maya format", compatibility: "⭐⭐⭐" },
                {
                  format: "STL",
                  desc: "3D Printing",
                  compatibility: "⭐⭐⭐⭐",
                },
                { format: "USDZ", desc: "Apple AR", compatibility: "⭐⭐⭐" },
                {
                  format: "3MF",
                  desc: "Modern 3D print",
                  compatibility: "⭐⭐⭐",
                },
              ].map((format, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-orange-300">
                      {format.format}
                    </h5>
                    <span className="text-yellow-400">
                      {format.compatibility}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{format.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modeling;
