import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";

// ===========img host api=====================
const imgApi = "84a5698c1163075e540df1dc6008c8cf";

const UpdateProfile = () => {
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
          console.log(img);
          //   const updateProfile = {
          //     //   email: user.email,
          //     name: data.name,
          //     number: data.number,
          //     img: img,
          //   };
          //  =========== backend api===========================
          //   BackendApiUrl.post("", updateProfile).then((data) => {
          //     if (data) {
          //       toast.success("Update Your Profile");
          //     } else {
          //       toast.error("Faild to Update Your Profile");
          //     }
          //   });
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
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full bg-transparent my-2"
            {...register("phone")}
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
      </div>
    </div>
  );
};

export default UpdateProfile;
