import React from "react";
import SectionTitle from "../component/SectionTitle";
import InputSelect from "../component/InputSelect";

const Payment = () => {
  return (
    <div className="py-10">
      <SectionTitle>All Payments</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>500</td>
              <td>
                <InputSelect className="select select-bordered bg-transparent select-xs">
                  <option disabled selected value="padding">
                    Padding
                  </option>
                  <option value="approved">Approved</option>
                  <option value="success">Success</option>
                </InputSelect>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>500</td>

              <td>
                <InputSelect className="select select-bordered bg-transparent select-xs">
                  <option disabled selected value="padding">
                    Padding
                  </option>
                  <option value="approved">Approved</option>
                  <option value="success">Success</option>
                </InputSelect>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>500</td>
              <td>
                <InputSelect className="select select-bordered bg-transparent select-xs">
                  <option disabled selected value="padding">
                    Padding
                  </option>
                  <option value="approved">Approved</option>
                  <option value="success">Success</option>
                </InputSelect>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
