import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../component/Button";
import InputSelect from "../../component/InputSelect";
import SectionTitle from "../../component/SectionTitle";

const Projects = () => {
  const count = 89;
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);
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
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <InputSelect className="select select-bordered bg-transparent select-xs">
                  <option disabled selected value="padding">
                    Padding
                  </option>
                  <option value="running">Running</option>
                  <option value="complete">Completed</option>
                </InputSelect>
              </td>
              <td>
                <Link
                  to={`/projectDetails/${2}`}
                  className="btn btn-xs btn-info"
                >
                  Details
                </Link>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>2</td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>
                <InputSelect className="select select-bordered bg-transparent select-xs">
                  <option disabled selected value="padding">
                    Padding
                  </option>
                  <option value="running">Running</option>
                  <option value="complete">Completed</option>
                </InputSelect>
              </td>
              <td>
                <Link
                  to={`/projectDetails/${2}`}
                  className="btn btn-xs btn-info"
                >
                  Details
                </Link>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>3</td>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
                <InputSelect className="select select-bordered bg-transparent select-xs">
                  <option disabled selected value="padding">
                    Padding
                  </option>
                  <option value="running">Running</option>
                  <option value="complete">Completed</option>
                </InputSelect>
              </td>
              <td>
                <Link
                  to={`/projectDetails/${2}`}
                  className="btn btn-xs btn-info"
                >
                  Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-5">
        <div className="btn-group ">
          {[...Array(pages).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              className={`btn ${page === number && "btn-active"}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button path={"/projectadd"}>Add Project</Button>
      </div>
    </div>
  );
};

export default Projects;
