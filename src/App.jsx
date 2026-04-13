import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// ✅ Check login
const isAuth = () => localStorage.getItem("token");

// ✅ Protected Layout
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6 flex justify-center">
          <div className="w-full max-w-6xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 PROTECTED ROUTES */}
        <Route
          path="/"
          element={
            isAuth() ? (
              <Layout>
                <Dashboard />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/products"
          element={
            isAuth() ? (
              <Layout>
                <Products />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/categories"
          element={
            isAuth() ? (
              <Layout>
                <Categories />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/orders"
          element={
            isAuth() ? (
              <Layout>
                <Orders />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/users"
          element={
            isAuth() ? (
              <Layout>
                <Users />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Default */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}