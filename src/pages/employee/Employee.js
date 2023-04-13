import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import BackendApiUrl from "../../api/BackendApiUrl";
import Button from "../../component/Button";
import SectionTitle from "../../component/SectionTitle";
import Loading from "../../layout/Loading";
const Employes = () => {
  const count = 50;
  const size = 10;
  const [page, setPage] = useState(0);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await BackendApiUrl.get("/users"),
  });
  if (isLoading) {
    return <Loading />;
  }
  const removeEmployee = (id) => {
    console.log(id);
    refetch();
    toast.success("Successfully Remove Employee");
  };
  const pages = Math.ceil(count / size);
  return (
    <div className="pt-5">
      <div className="flex justify-between mb-2">
        <SectionTitle>All Employee Details</SectionTitle>
        <Button path={"/employeeAdd"}>Add Employee</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>Enginner</td>
                <td>
                  <button
                    onClick={() => removeEmployee(user.id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-2">
        <div className="btn-group">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={`btn btn-xs ${page === number && "btn-active"}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employes;
