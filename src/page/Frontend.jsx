import { useState } from "react";
import {
  FaPaperPlane,
  FaFileInvoiceDollar,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Frontend = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    projectType: "website",
    budget: "5-10",
    startDate: "",
    description: "",
    timeline: "1-2 bulan",
  });

  const [orders, setOrders] = useState([
    {
      id: 1,
      nama: "John Doe",
      projectType: "Website E-commerce",
      budget: "Rp 15-20 juta",
      timeline: "3 bulan",
      status: "Pending",
      date: "2024-01-15",
    },
    {
      id: 2,
      nama: "Jane Smith",
      projectType: "Web App Dashboard",
      budget: "Rp 25-30 juta",
      timeline: "4 bulan",
      status: "In Progress",
      date: "2024-01-10",
    },
    {
      id: 3,
      nama: "Robert Johnson",
      projectType: "Landing Page",
      budget: "Rp 5-8 juta",
      timeline: "1 bulan",
      status: "Completed",
      date: "2023-12-20",
    },
  ]);

  // PERBAIKAN: Hapus tipe TypeScript
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // PERBAIKAN: Hapus tipe TypeScript
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: orders.length + 1,
      nama: formData.nama,
      projectType:
        formData.projectType === "website"
          ? "Website Company Profile"
          : formData.projectType === "webapp"
          ? "Web Application"
          : "Mobile Web App",
      budget: `Rp ${formData.budget} juta`,
      timeline: formData.timeline,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setOrders([newOrder, ...orders]);

    // Reset form
    setFormData({
      nama: "",
      email: "",
      projectType: "website",
      budget: "5-10",
      startDate: "",
      description: "",
      timeline: "1-2 bulan",
    });

    alert("Pemesanan berhasil dikirim!");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500";
      case "In Progress":
        return "bg-orange-500/20 text-orange-400 border-orange-500";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500";
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white p-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-800 bg-clip-text text-transparent">
            FRONTEND SERVICE
          </h1>
          <p className="text-xl text-gray-400 mt-4">
            Pesan layanan frontend development dengan kualitas terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <FaFileInvoiceDollar className="text-3xl text-orange-500" />
              <h2 className="text-3xl font-bold">Form Pemesanan Jasa</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Nama Lengkap
                  </label>
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

              {/* Project Type & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Tipe Project
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="website">Website Company Profile</option>
                    <option value="webapp">Web Application</option>
                    <option value="mobile">Mobile Web App</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">
                    Budget (juta Rp)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="1-5">1 - 5 juta</option>
                    <option value="5-10">5 - 10 juta</option>
                    <option value="10-20">10 - 20 juta</option>
                    <option value="20-50">20 - 50 juta</option>
                    <option value="50+">50+ juta</option>
                  </select>
                </div>
              </div>

              {/* Timeline & Start Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Timeline Pengerjaan
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="1-2 bulan">1 - 2 bulan</option>
                    <option value="3-4 bulan">3 - 4 bulan</option>
                    <option value="4-6 bulan">4 - 6 bulan</option>
                    <option value="6+ bulan">6+ bulan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">
                    <FaCalendarAlt className="inline mr-2" />
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
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-400 mb-2">
                  Deskripsi Project
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Jelaskan detail project yang Anda inginkan..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                Kirim Pemesanan
              </button>
            </form>
          </div>

          {/* Table Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <FaCheckCircle className="text-3xl text-orange-500" />
              <h2 className="text-3xl font-bold">Riwayat Pemesanan</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Nama
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Tipe Project
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Budget
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Timeline
                    </th>
                    <th className="text-left p-4 text-gray-400 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-800/50 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{order.nama}</p>
                          <p className="text-sm text-gray-400">{order.date}</p>
                        </div>
                      </td>
                      <td className="p-4">{order.projectType}</td>
                      <td className="p-4 font-medium text-orange-400">
                        {order.budget}
                      </td>
                      <td className="p-4">{order.timeline}</td>
                      <td className="p-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full border ${getStatusColor(
                            order.status
                          )} text-sm font-medium`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">
                  {orders.length}
                </p>
                <p className="text-gray-400">Total Order</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">
                  {orders.filter((o) => o.status === "Completed").length}
                </p>
                <p className="text-gray-400">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">
                  {orders.filter((o) => o.status === "In Progress").length}
                </p>
                <p className="text-gray-400">In Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-orange-400">
              Modern Tech Stack
            </h3>
            <p className="text-gray-400">
              Menggunakan React, TypeScript, Tailwind CSS, dan library modern
              lainnya
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-orange-400">
              Responsive Design
            </h3>
            <p className="text-gray-400">
              Website yang optimal di semua perangkat (desktop, tablet, mobile)
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-orange-400">
              Fast Performance
            </h3>
            <p className="text-gray-400">
              Optimasi kecepatan loading dan performa terbaik untuk user
              experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
