import React from "react";
import SectionTitle from "../../component/SectionTitle";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projectDetails = (id) => {
    navigate(`projectDetails/${id}`);
  };
  return (
    <div className="py-10">
      <SectionTitle>All Projects</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn btn-xs btn-info">Details</button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>
                <button className="btn btn-xs btn-info">Details</button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
                <button
                  onClick={() => projectDetails(1)}
                  className="btn btn-xs btn-info"
                >
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
