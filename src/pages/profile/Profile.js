import React from "react";
import Button from "../../component/Button";
import user from "../../img/user/ripon.jpg";

const Profile = () => {
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={user} alt="user" title="user" className="rounded-xl" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">Ripon</h2>
          <h6>Enginner</h6>
          <p>Project Name</p>
          <p>number</p>
          <div className="card-actions">
            <Button path="/updateProfile">Update Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
