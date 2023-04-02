import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import Payment from "./pages/Payment";
import Projects from "./pages/project/Projects";
import ProjectDetails from "./pages/project/ProjectDetails";
import ProjectAdd from "./pages/project/ProjectAdd";
import { Toaster } from "react-hot-toast";
import Employes from "./pages/employee/Employee";
import EmpoleeAdd from "./pages/employee/EmployeeAdd";
import Profile from "./pages/Profile";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/employee" element={<Employes />} />
          <Route path="/employeeAdd" element={<EmpoleeAdd />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/projectadd" element={<ProjectAdd />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
