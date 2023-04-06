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
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#fff]">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="p-10">
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
    </div>
  );
};

export default Login;
