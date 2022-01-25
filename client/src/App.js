import "./App.css";
import LogIn from "./screens/LogIn";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./screens/DashBoard";
import DashBoredTeacher from "./screens/teacherlist/DashBoredTeacher";
import StdDashboard from "./screens/stdList/DashboardStd";
import DashBoardClass from "./screens/classList/DashBoardClass";
import Navbar from "./components/home/NavBar";
import LoginStdTsh from "./components/LoginStdTsh";
import HomaPage from "./screens/HomaPage";
import StudentProfile from "./screens/stdView/StudentProfile";
import DashBoaredTsr from "./screens/teacherView/DashBoaredTsr";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import DashBoardAdmin from "./screens/adminView/DashBoardAdmin";
import { useSelector } from "react-redux";

function App() {
  const { userInfo } = useSelector((state) => state.loginDetails);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomaPage />} />
        <Route path="/login" element={<LogIn />} />
        {userInfo && userInfo.adminId ? (
          <Route path="/DashBoard/:id" element={<DashBoardAdmin />} />
        ) : (
          <Route path="/DashBoard/StudentList" element={<StdDashboard />} />
        )}

        <Route path="/DashBoard/TeacherList" element={<DashBoredTeacher />} />
        <Route path="/DashBoard/StudentList" element={<StdDashboard />} />
        <Route path="/DashBoard/ClassList" element={<DashBoardClass />} />
        <Route path="/profil/:studentId" element={<StudentProfile />} />
        <Route path="/DashBoard/:id" element={<DashBoard />} />
      </Routes>

      {/* <StudentProfile/> */}

      {/* <LoginStdTsh/> */}
    </div>
  );
}

export default App;
