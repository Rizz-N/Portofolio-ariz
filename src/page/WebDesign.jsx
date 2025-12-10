import { useState } from "react";
import {
  FaPalette,
  FaFigma,
  FaSketch,
  FaMobileAlt,
  FaDesktop,
  FaCheck,
  FaPaperPlane,
  FaClock,
  FaLayerGroup,
  FaUserCheck,
} from "react-icons/fa";

const WebDesign = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    projectType: "website-redesign",
    pages: "5-10",
    startDate: "",
    description: "",
    research: "yes",
    userTesting: "no",
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      nama: "Sarah Williams",
      projectType: "E-commerce Redesign",
      pages: "15 halaman",
      status: "Completed",
      date: "2024-01-10",
      rating: "4.9",
    },
    {
      id: 2,
      nama: "Michael Chen",
      projectType: "Mobile App Design",
      pages: "25 screens",
      status: "In Progress",
      date: "2024-01-05",
      rating: "-",
    },
    {
      id: 3,
      nama: "Emma Rodriguez",
      projectType: "Dashboard Design",
      pages: "12 halaman",
      status: "Research Phase",
      date: "2023-12-28",
      rating: "4.8",
    },
    {
      id: 4,
      nama: "David Park",
      projectType: "Brand Identity + UI",
      pages: "8 halaman",
      status: "Completed",
      date: "2023-12-15",
      rating: "5.0",
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
      projectType:
        formData.projectType === "website-redesign"
          ? "Website Redesign"
          : formData.projectType === "mobile-app"
          ? "Mobile App Design"
          : formData.projectType === "dashboard"
          ? "Dashboard Design"
          : "Brand Identity",
      pages: `${formData.pages} halaman`,
      status: "Research Phase",
      date: new Date().toISOString().split("T")[0],
      rating: "-",
    };

    setProjects([newProject, ...projects]);

    // Reset form
    setFormData({
      nama: "",
      email: "",
      projectType: "website-redesign",
      pages: "5-10",
      startDate: "",
      description: "",
      research: "yes",
      userTesting: "no",
    });

    alert("Permintaan UI/UX Design berhasil dikirim!");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500";
      case "In Progress":
        return "bg-orange-500/20 text-orange-400 border-orange-500";
      case "Research Phase":
        return "bg-blue-500/20 text-blue-400 border-blue-500";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500";
    }
  };

  const designPackages = [
    {
      name: "Basic Design",
      price: "Rp 5-10 juta",
      features: ["Wireframing", "5-10 screens", "Style Guide", "1 Revision"],
      color: "border-orange-500",
    },
    {
      name: "Pro Design",
      price: "Rp 10-20 juta",
      features: [
        "User Research",
        "Unlimited screens",
        "Prototyping",
        "User Testing",
        "3 Revisions",
      ],
      color: "border-orange-500 bg-orange-500/10",
    },
    {
      name: "Enterprise",
      price: "Rp 20-50 juta",
      features: [
        "Full UX Research",
        "Design System",
        "Animation",
        "Development Handoff",
        "Unlimited Revisions",
      ],
      color: "border-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-800 bg-clip-text text-transparent">
          UI/UX DESIGN SERVICE
        </h1>
        <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          Ubah ide Anda menjadi desain yang indah dan ramah pengguna dengan
          pendekatan berbasis riset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaPalette className="text-3xl text-orange-500" />
            <h2 className="text-3xl font-bold">Request Design Project</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Masukkan nama lengkap"
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

            {/* Project Type & Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">
                  <FaDesktop className="inline mr-2" />
                  Tipe Project
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="website-redesign">Website Redesign</option>
                  <option value="mobile-app">Mobile App Design</option>
                  <option value="dashboard">Dashboard Design</option>
                  <option value="brand-identity">Brand Identity</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">
                  <FaLayerGroup className="inline mr-2" />
                  Jumlah Halaman/Screens
                </label>
                <select
                  name="pages"
                  value={formData.pages}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="1-5">1-5 halaman</option>
                  <option value="5-10">5-10 halaman</option>
                  <option value="10-20">10-20 halaman</option>
                  <option value="20+">20+ halaman</option>
                </select>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-400">
                Additional Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3">
                    <FaUserCheck className="text-orange-400" />
                    User Research
                  </label>
                  <select
                    name="research"
                    value={formData.research}
                    onChange={handleChange}
                    className="bg-black border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-orange-500"
                  >
                    <option value="yes">Ya (+Rp 2jt)</option>
                    <option value="no">Tidak</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3">
                    <FaCheck className="text-orange-400" />
                    User Testing
                  </label>
                  <select
                    name="userTesting"
                    value={formData.userTesting}
                    onChange={handleChange}
                    className="bg-black border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-orange-500"
                  >
                    <option value="yes">Ya (+Rp 3jt)</option>
                    <option value="no">Tidak</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-gray-400 mb-2">
                <FaClock className="inline mr-2" />
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
                Deskripsi Project & Requirements
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="Jelaskan kebutuhan design Anda, target audience, dan referensi yang diinginkan..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
              Request Design Quote
            </button>
          </form>
        </div>

        {/* Table & Packages Section */}
        <div className="space-y-8">
          {/* Active Projects Table */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <FaFigma className="text-3xl text-orange-500" />
              <h2 className="text-3xl font-bold">Active Design Projects</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Klien
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Project Type
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Scope
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Status
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Rating
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
                          {project.projectType.includes("Mobile") ? (
                            <FaMobileAlt className="text-orange-400" />
                          ) : (
                            <FaDesktop className="text-orange-400" />
                          )}
                          {project.projectType}
                        </div>
                      </td>
                      <td className="p-4">{project.pages}</td>
                      <td className="p-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full border ${getStatusColor(
                            project.status
                          )} text-sm font-medium`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {project.rating === "-" ? (
                          <span className="text-gray-500">Pending</span>
                        ) : (
                          <span className="text-yellow-400 font-bold">
                            {project.rating} ⭐
                          </span>
                        )}
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
                <p className="text-gray-400 text-sm">Total Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">
                  {projects.filter((p) => p.status === "Completed").length}
                </p>
                <p className="text-gray-400 text-sm">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-500">
                  {projects.filter((p) => p.status === "Research Phase").length}
                </p>
                <p className="text-gray-400 text-sm">Research</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">4.9</p>
                <p className="text-gray-400 text-sm">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Design Packages */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Design Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {designPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`border rounded-xl p-6 ${pkg.color} transition-transform hover:scale-105`}
                >
                  <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                  <p className="text-2xl font-bold text-orange-300 mb-4">
                    {pkg.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <FaCheck className="text-green-400 text-sm" />
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

      {/* Tools & Process Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-8 text-center text-orange-400">
          Design Tools & Process
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaFigma className="text-3xl text-orange-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Figma</h4>
            <p className="text-gray-400 text-sm">Primary design tool</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSketch className="text-3xl text-orange-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Sketch</h4>
            <p className="text-gray-400 text-sm">Alternative design</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMobileAlt className="text-3xl text-orange-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Prototyping</h4>
            <p className="text-gray-400 text-sm">Interactive prototypes</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUserCheck className="text-3xl text-orange-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">User Testing</h4>
            <p className="text-gray-400 text-sm">Feedback & iteration</p>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h4 className="text-2xl font-bold mb-6 text-orange-400">
            Design Process
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Research", desc: "User & market analysis" },
              { step: "2", title: "Wireframe", desc: "Structure & layout" },
              { step: "3", title: "Design", desc: "Visual & UI design" },
              { step: "4", title: "Testing", desc: "Usability testing" },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h5 className="text-lg font-bold mb-2">{process.title}</h5>
                <p className="text-gray-400 text-sm">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-24 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
