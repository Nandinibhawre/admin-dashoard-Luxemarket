import { useState } from "react";
import api from "../services/Api.js";

export default function Signup() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSignup = async () => {
    await api.post("/auth/signup", data);
    alert("Signup Success");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <input className="border p-2 w-full mb-3" placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input type="password" className="border p-2 w-full mb-3" placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button className="bg-green-500 text-white w-full py-2" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}
