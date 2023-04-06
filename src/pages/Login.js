import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../component/Input";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    navigate(from, { replace: true });
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="card w-96 shadow-xl">
      <div className="card-body">
        <h2 className="text-center font-bold text-2xl">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="input input-bordered w-full my-2 bg-transparent"
            {...register("email")}
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            required
            className="input input-bordered w-full my-2 bg-transparent"
            {...register("password")}
          />

          <Input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    </div>
  
    </div>
  );
};

export default Login;
