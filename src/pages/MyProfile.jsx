import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user, setUser, updateProfileInfo } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    setUser({ ...user, displayName: name, photoURL: photo });

    updateProfileInfo(name, photo);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          My Profile
        </h2>
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full shadow mb-3 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {user.displayName}
          </h3>
        </div>
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="https://photo-url.com"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
