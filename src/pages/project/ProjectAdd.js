import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";
import BackendApiUrl from "../../api/BackendApiUrl";
import { toast } from "react-hot-toast";

// ===========img host api=====================
const imgApi = "84a5698c1163075e540df1dc6008c8cf";

const ProjectAdd = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //  ==============image hosting api==================
    const image = data.photo[0];
    const imageAvatar = new FormData();
    imageAvatar.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
    fetch(url, {
      method: "POST",
      body: imageAvatar,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const projectInfo = {
            title: data.title,
            desciption: data.desciption,
            img,
          };

          //  =========== backend api===========================

          BackendApiUrl.post("/project", projectInfo).then((data) => {
            if (data) {
              toast.success("Add Your Project");
            } else {
              toast.error("Faild to add Your Project");
            }
          });
        }
      });
  };
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <SectionTitle> Add New Project</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <input
            type="text"
            placeholder="Project Name"
            required
            className="input input-bordered w-full bg-transparent my-2"
            {...register("title")}
          />
          <textarea
            className="textarea textarea-bordered w-full bg-transparent my-2"
            placeholder="Project Desciption"
            required
            {...register("desciption")}
          ></textarea>
          <input
            type="file"
            required
            className="file-input file-input-bordered w-full bg-transparent my-2"
            multiple
            {...register("photo")}
          />
          <Input
            type="submit"
            className="btn btn-primary capitalize"
            value="Add New Project"
          />
        </form>
      </div>
    </div>
  );
};

export default ProjectAdd;
