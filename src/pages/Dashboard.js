import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="admin-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10 md:p-20 ">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="admin-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-4 mt-16">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="employee">Employee</NavLink>
          </li>
          <li>
            <NavLink to="payment">Payment</NavLink>
          </li>
          <li>
            <NavLink to="project">Projects</NavLink>
          </li>
          <li>
            <NavLink to="Notification">Notification</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
