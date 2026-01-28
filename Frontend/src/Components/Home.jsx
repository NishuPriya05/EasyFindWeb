import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
        <p>Your mobile: {user?.mobileNo}</p>
        <p>Address: {user?.address}</p>
      </div>
    </div>
  );
}
