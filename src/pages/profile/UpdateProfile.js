import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";
import auth from "../../firebase.init";
import Loading from "../../layout/Loading";
// ===========img host api=====================
const key = process.env.REACT_APP_Image_API;

const UpdateProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const { register, handleSubmit } = useForm();

  if (loading || updating) {
    return <Loading />;
  }
  console.log(user.phoneNumber);
  const onSubmit = (data) => {
    //  ==============image hosting api==================
    const image = data.photo[0];
    const imageAvatar = new FormData();
    imageAvatar.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    fetch(url, {
      method: "POST",
      body: imageAvatar,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const displayName = data.name;
          const photoURL = img;
          const success = updateProfile({ displayName, photoURL });
          if (success) {
            toast.success("Updated profile");
          }
        }
      });
  };
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <SectionTitle>Update Your Profile</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <input
            type="text"
            placeholder="Name"
            value={user.displayName}
            className="input input-bordered w-full bg-transparent my-2"
            {...register("name")}
          />
          <input
            type="email"
            value="abc@gmail.com"
            disabled
            className="input input-bordered w-full bg-transparent my-2"
            {...register("email")}
          />
          
          <input
            type="file"
            className="file-input file-input-bordered w-full bg-transparent my-2"
            multiple
            {...register("photo")}
          />
          <Input
            type="submit"
            className="btn btn-primary capitalize"
            value="Update Profile"
          />
        </form>
        {error && toast.error("Faild to Update Your Profile")}
      </div>
    </div>
  );
};

export default UpdateProfile;
