import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/Login";
import HomePage from "./Components/Home";
import UserList from "./Pages/UserList";
import Rooms from "./Pages/Rooms";
import AddRoomForm from "./Pages/AddRoomForm";
import Institutes from "./Pages/Institutes";
import UploadTest from "./Pages/UploadTest";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/institutes" element={<Institutes />} />
        <Route path="/add-room" element={<AddRoomForm />} />
        <Route path="/upload-test" element={<UploadTest />} />
      </Routes>
    </Router>
  );
}
