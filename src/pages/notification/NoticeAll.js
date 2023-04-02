import React, { useState } from "react";
import SectionTitle from "../../component/SectionTitle";

const NoticeAll = () => {
  const count = 89;
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);
  return (
    <div>
      <SectionTitle>Notification all</SectionTitle>
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

export default NoticeAll;
