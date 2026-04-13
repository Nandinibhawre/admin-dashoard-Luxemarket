import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1e293b] text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Ecommerce</h2>
      <nav className="flex flex-col gap-4">
        <Link className="hover:text-blue-400" to="/">Dashboard</Link>
        <Link className="hover:text-blue-400" to="/products">Products</Link>
        <Link className="hover:text-blue-400" to="/categories">Categories</Link>
        <Link className="hover:text-blue-400" to="/orders">Orders</Link>
        <Link className="hover:text-blue-400" to="/users">Users</Link>
      </nav>
    </div>
  );
}