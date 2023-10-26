import React, { useContext, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";

const ProfileModal = ({ currentUser, setIsprofileModalOpen }) => {
  const [currentUserDetails, setCurrentUserDetails] = useState({
    ...currentUser,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    bio: currentUser.bio,
    website: currentUser.website,
  });

  const { usersDispatch } = useContext(UsersContext);

  const handleUserNameChange = (nameString) => {
    const nameArray = nameString.split(" ");

    setCurrentUserDetails({
      ...currentUserDetails,
      firstName: nameArray[0],
      lastName: nameArray[1],
    });
  };

  return (
    <div className="absolute top-[25%] w-72 h-auto my-4 bg-teal-200 flex flex-col p-2 gap-4 rounded ">
      <div className="flex justify-between p-1">
        <span className="text-xl font-bold">Edit Profile</span>
        <span className="flex gap-1">
          <button
            type="submit"
            onClick={() => {
              usersDispatch({
                type: "UPDATE_PROFILE",
                payload: currentUserDetails,
              });
              setIsprofileModalOpen(false);
            }}
            className="p-2 text-xs text-center rounded-md w-18 bg-teal-100 hover:bg-teal-500"
          >
            Save
          </button>
          <button
            className="text-md font-medium px-2 rounded-full hover:bg-slate-100"
            onClick={() => setIsprofileModalOpen(false)}
          >
            X
          </button>
        </span>
      </div>
      <div className="flex flex-col gap-2 py-2 px-4">
        <label>
          <div className="text-sm">Name:</div>
          <input
            className="w-full text-sm p-2 outline-gray-200 rounded"
            defaultValue={
              currentUserDetails.firstName + " " + currentUserDetails.lastName
            }
            type="text"
            onChange={(e) => handleUserNameChange(e.target.value)}
          />
        </label>
        <label>
          <div className="text-sm">Bio:</div>

          <textarea
            rows={4}
            className="w-full text-sm p-2 outline-gray-200 resize-none rounded "
            defaultValue={currentUserDetails.bio}
            type="text"
            onChange={(e) =>
              setCurrentUserDetails({
                ...currentUserDetails,
                bio: e.target.value,
              })
            }
          />
        </label>
        <label>
          <div className="text-sm">Website:</div>
          <input
            className="w-full text-sm p-2 outline-gray-200 rounded"
            value={currentUserDetails.website}
            type="text"
            onChange={(e) =>
              setCurrentUserDetails({
                ...currentUserDetails,
                website: e.target.value,
              })
            }
          />
        </label>
      </div>
    </div>
  );
};

export default ProfileModal;
