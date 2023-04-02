import React from "react";
import SectionTitle from "../../component/SectionTitle";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "../../component/Input";
import InputSelect from "../../component/InputSelect";

const EmpoleeAdd = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Success Create Empolyee");
  };
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <SectionTitle>Employee Add For Project</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <Input
            type="text"
            placeholder="Employee Name"
            required
            className="input input-bordered w-full bg-transparent"
            {...register("name")}
          />
          <Input
            type="email"
            placeholder="Employee Email"
            required
            className="input input-bordered w-full bg-transparent"
            {...register("email")}
          />
          <InputSelect className="select select-bordered w-full bg-transparent select-xl">
            <option disabled selected value="project Select">
              Project Select
            </option>
            <option value="project 1">project 1</option>
            <option value="project 2">project 2</option>
          </InputSelect>
          <InputSelect className="select select-bordered w-full bg-transparent select-xl">
            <option disabled selected value="employess role">
              Employess role
            </option>
            <option value="enginner">Enginner</option>
            <option value="manager">Manager</option>
          </InputSelect>
          <Input
            type="submit"
            className="btn btn-primary capitalize"
            value="Employee Add"
          />
        </form>
      </div>
    </div>
  );
};

export default EmpoleeAdd;
