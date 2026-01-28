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
import Layout from "./Components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/userlist"
          element={
            <Layout>
              <UserList />
            </Layout>
          }
        />
        <Route
          path="/rooms"
          element={
            <Layout>
              <Rooms />
            </Layout>
          }
        />
        <Route 
          path="/institutes"
          element={
            <Layout>
              <Institutes />
            </Layout>
          }
        />
        <Route
          path="/add-room"
          element={
            <Layout>
              <AddRoomForm />
            </Layout>
          }
        />
        <Route
          path="/upload-test"
          element={
            <Layout>
              <UploadTest />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
