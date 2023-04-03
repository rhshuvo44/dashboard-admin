import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Analysis from "./pages/Analysis";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import Employes from "./pages/employee/Employee";
import EmpoleeAdd from "./pages/employee/EmployeeAdd";
import NoticeAll from "./pages/notification/NoticeAll";
import NoticeDetails from "./pages/notification/NoticeDetails";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";
import ProjectAdd from "./pages/project/ProjectAdd";
import ProjectDetails from "./pages/project/ProjectDetails";
import Projects from "./pages/project/Projects";
import UpdateProfile from "./pages/profile/UpdateProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Analysis />} />
          <Route path="/employee" element={<Employes />} />
          <Route path="/employeeAdd" element={<EmpoleeAdd />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/projectadd" element={<ProjectAdd />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/noticeAll" element={<NoticeAll />} />
          <Route path="/noticeDetails/:id" element={<NoticeDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
