import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";
import Employes from "./pages/Employee";
import Notification from "./pages/Notification";
import Payment from "./pages/Payment";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/employee" element={<Employes />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
