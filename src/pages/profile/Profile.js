import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../../component/Button";
import auth from "../../firebase.init";
import Loading from "../../layout/Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  const { displayName, photoURL } = user;
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src={photoURL}
                alt="user"
                title="user"
                className="rounded-xl"
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">{displayName}</h2>
          <h6>Enginner</h6>
          <div className="card-actions">
            <Button path="/updateProfile">Update Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
