export default function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Dashboard</h1>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}