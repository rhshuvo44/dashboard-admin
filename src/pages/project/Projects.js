import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../component/Button";
import InputSelect from "../../component/InputSelect";
import SectionTitle from "../../component/SectionTitle";
import BackendApiUrl from "../../api/BackendApiUrl";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Loading from "../../layout/Loading";

const Projects = () => {
  const count = 50;
  const size = 10;
  const [page, setPage] = useState(0);
  const {
    data: projects,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => await BackendApiUrl.get("/users"),
  });
  if (isLoading) {
    return <Loading />;
  }
  const projectStatus = (id) => {
    // ============ BACKEND POST API ==============
    refetch();
    toast.success("Successfully update Project Status");
  };
  const pages = Math.ceil(count / size);
  return (
    <div className="pt-5">
      <div className="flex justify-between mb-2">
        <SectionTitle>All Projects</SectionTitle>
        <Button path={"/projectadd"}>Add Project</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>
                  <InputSelect
                    onChange={() => projectStatus(user.id)}
                    className="select select-bordered bg-transparent select-xs"
                  >
                    <option disabled selected value="padding">
                      Padding
                    </option>
                    <option value="running">Running</option>
                    <option value="complete">Completed</option>
                  </InputSelect>
                </td>
                <td>
                  <Link
                    to={`/projectDetails/${user.id}`}
                    className="btn btn-xs btn-info"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-5">
        <div className="btn-group ">
          {[...Array(pages).keys()].map((number) => (
            <button
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

export default Projects;
