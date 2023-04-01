import React from "react";
import SectionTitle from "../component/SectionTitle";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Notification = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Success Create Notification");
  };
  return (
    <div className="card shadow-2xl">
      <SectionTitle>Notification Create</SectionTitle>
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
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};

export default Notification;
