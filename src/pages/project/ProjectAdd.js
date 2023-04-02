import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";

const ProjectAdd = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Success Create Empolyee");
  };
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <SectionTitle> Add New Project</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <Input
            type="text"
            placeholder="Project Name"
            required
            className="input input-bordered w-full bg-transparent"
            {...register("projectName")}
          />
          <textarea
            className="textarea textarea-bordered w-full bg-transparent my-2"
            placeholder="Project Desciption"
            required
            {...register("projectDesciption")}
          ></textarea>
          <Input
            type="file"
            className="file-input file-input-bordered w-full bg-transparent"
            multiple
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
