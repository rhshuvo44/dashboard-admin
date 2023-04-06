import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BackendApiUrl from "../../api/BackendApiUrl";
import SectionTitle from "../../component/SectionTitle";
import { Link } from "react-router-dom";
import Loading from "../../layout/Loading";

const Application = () => {
  const count = 89;
  const size = 10;
  const [page, setPage] = useState(0);
  const { data: applications, isLoading } = useQuery({
    queryKey: ["application"],
    queryFn: async () => await BackendApiUrl.get("/users"),
  });
  if (isLoading) {
    return <Loading/>;
  }

  const pages = Math.ceil(count / size);
  return (
    <div className="py-10">
      <SectionTitle>All Applications</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {applications.data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link
                    className="hover:text-primary"
                    to={`/applicationDetails/${user.id}`}
                  >
                    {user.name}
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
              className={`btn ${page === number && "btn-active"}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Application;
