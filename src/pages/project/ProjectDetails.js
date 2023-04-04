import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackendApiUrl from "../../api/BackendApiUrl";
import SectionTitle from "../../component/SectionTitle";
import ripon from "../../img/user/ripon.jpg";
const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    BackendApiUrl.get(`posts/${id}`).then((data) => {
      if (data) {
        setProject(data);
      }
    });
  }, [id]);
  console.log(project);
  const { body, title } = project.data;
  return (
    <div>
      <SectionTitle>Project Details</SectionTitle>
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="py-6">{body}</p>
        </div>
        <div className="card w-full max-w-sm border-0">
          <div className="card-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <img src={ripon} alt="" title="" />
              <img src={ripon} alt="" title="" />
              <img src={ripon} alt="" title="" />
              <img src={ripon} alt="" title="" />
              <img src={ripon} alt="" title="" />
              <img src={ripon} alt="" title="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
