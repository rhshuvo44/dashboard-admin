import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackendApiUrl from "../../api/BackendApiUrl";
import SectionTitle from "../../component/SectionTitle";
import Loading from "../../layout/Loading";
import { toast } from "react-hot-toast";
import InputSelect from "../../component/InputSelect";

const Requisition = () => {
  const count = 50;
  const size = 10;
  const [page, setPage] = useState(0);
  const { data: requisitons, isLoading } = useQuery({
    queryKey: ["requisiton"],
    queryFn: async () => await BackendApiUrl.get("/users"),
  });
  if (isLoading) {
    return <Loading />;
  }

  const pages = Math.ceil(count / size);
  const requisitonStatus = (id) => {
    // ============ BACKEND Put API ==============
    BackendApiUrl.put(`/requisition/${id}`).then((data) => {
      if (data) {
        toast.success("Successfully update requsition Status");
      }
    });
  };
  return (
    <div className="py-5">
      <SectionTitle>All Requsitions</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Prjoject Name</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requisitons.data.map((requisiton) => (
              <tr key={requisiton.id}>
                <td>{requisiton.id}</td>
                <td>
                  <Link
                    to={`/requisitonDetails/${requisiton.id}`}
                    className="hover:text-primary"
                  >
                    {requisiton.name}
                  </Link>
                </td>
                <td>{requisiton.username}</td>
                <td>
                  <InputSelect
                    onChange={() => requisitonStatus(requisiton.id)}
                    className="select select-bordered bg-transparent select-xs"
                  >
                    <option disabled selected value="pending">
                    Approved
                    </option>
                    <option value="approved">Successfull</option>
                  </InputSelect>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-2">
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

export default Requisition;
