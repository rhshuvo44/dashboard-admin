import React from "react";
import SectionTitle from "../component/SectionTitle";

const Employes = () => {
  return (
    <div className="py-10">
      <SectionTitle>All Employes Details</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn btn-xs btn-error text-white">
                  remove
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>
                <button className="btn btn-xs btn-error text-white">
                  remove
                </button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>
                <button className="btn btn-xs btn-error text-white">
                  remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employes;
