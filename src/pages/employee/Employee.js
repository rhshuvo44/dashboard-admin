import React, { useState } from "react";
import Button from "../../component/Button";
import SectionTitle from "../../component/SectionTitle";

const Employes = () => {
  const count = 89;
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);
  return (
    <div className="py-10">
      <SectionTitle>All Employee Details</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Enginner</td>
              <td>
                <button className="btn btn-xs btn-error text-white">
                  remove
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>2</td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Manager</td>
              <td>
                <button className="btn btn-xs btn-error text-white">
                  remove
                </button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>3</td>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Enginner</td>
              <td>
                <button className="btn btn-xs btn-error text-white">
                  remove
                </button>
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
        <Button path={"/employeeAdd"}>Add Employee</Button>
      </div>
    </div>
  );
};

export default Employes;
