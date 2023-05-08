import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";

const Notification = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // =================BACKEND API=====================
    console.log(data);
    reset();
    toast.success("Success Create Notification");
  };
  return (
    <div className="card shadow-2xl mt-10 ">
      <div className="text-center mt-2">
        <SectionTitle>Notification Create</SectionTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-10">
        <input
          type="text"
          placeholder="Notification Title"
          required
          className="input input-bordered w-full bg-transparent"
          {...register("title")}
        />
        <textarea
          className="textarea textarea-bordered w-full bg-transparent my-2"
          placeholder="Notification Desciption"
          required
          {...register("desciption")}
        ></textarea>

        <Input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};

export default Notification;
