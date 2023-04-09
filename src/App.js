import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import RequiredAdmin from "./authentication/RequiredAdmin";
import Header from "./layout/Header";
import Analysis from "./pages/Analysis";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Application from "./pages/application/Application";
import ApplicationDetails from "./pages/application/ApplicationDetails";
import Employes from "./pages/employee/Employee";
import EmpoleeAdd from "./pages/employee/EmployeeAdd";
import NoticeAll from "./pages/notification/NoticeAll";
import NoticeDetails from "./pages/notification/NoticeDetails";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/profile/UpdateProfile";
import ProjectAdd from "./pages/project/ProjectAdd";
import ProjectDetails from "./pages/project/ProjectDetails";
import Projects from "./pages/project/Projects";
import Requisition from "./pages/requisition/Requisition";
import RequisitonDetails from "./pages/requisition/RequisitonDetails";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route element={<RequiredAdmin />}>
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
              <Route path="/requisition" element={<Requisition />} /> 
              <Route
                path="/requisitonDetails/:id"
                element={<RequisitonDetails />}
              />
              <Route path="/application" element={<Application />} />
              <Route
                path="/applicationDetails/:id"
                element={<ApplicationDetails />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
