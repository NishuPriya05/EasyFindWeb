import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col space-y-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <nav className="flex flex-col space-y-4 text-lg">
          <button
            onClick={() => navigate("/home")}
            className="text-left hover:text-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/userlist")}
            className="text-left hover:text-blue-600"
          >
            User List
          </button>

          <button
            onClick={() => navigate("/rooms")}
            className="text-left hover:text-blue-600"
          >
            Rooms
          </button>

          <button
            onClick={() => navigate("/institutes")}
            className="text-left hover:text-blue-600"
          >
            Institutes
          </button>
          <button
            onClick={() => navigate("/about")}
            className="text-left hover:text-blue-600"
          >
            About
          </button>

          <button
            onClick={handleLogout}
            className="mt-4 bg-blue-600 text-white py-2 rounded-xl w-full"
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-0">{children}</main>
    </div>
  );
}
