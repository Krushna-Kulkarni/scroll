import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { UsersContext } from "../contexts/UsersContext";

const Aside = () => {
  const { currentUser, myUsers } = useContext(UsersContext);
  const whoToFollow = myUsers?.filter(
    (user) =>
      currentUser.following.every((item) => item.username !== user.username) &&
      user.username !== currentUser.username
  );
  const staticLoading = false;

  return (
    <>
      {!staticLoading ? (
        <div className="hidden xl:block  bg-white border-solid border-r-2  p-2 h-screen">
          <div className="relative  bg-gray-100  xl:mx-4 2xl:my-3 rounded-lg border border-black focus-within:border-teal-600">
            <input
              type="text"
              placeholder="Search Users..."
              className="bg-gray-100  text-gray-600  text-sm xl:text-base py-2 px-4 w-[90%] outline-none rounded-lg"
            />
            <SearchOutlinedIcon className="absolute right-1 top-2.5 xl:top-2" />
          </div>
          {/* who to follow */}
          {myUsers?.length ? (
            <div className="flex flex-col h-[67%] gap-4 m-4 mt-8 px-4 py-3 bg-teal-400 rounded-md  overflow-hidden overflow-y-scroll no-scrollbar">
              <div className="text-lg font-bold tracking-wide">
                Who to Follow
              </div>

              {whoToFollow?.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={user?.profileAvatar}
                    alt="user"
                    className="w-9  h-9 mt-1 rounded-full"
                  />
                  <div className="flex flex-col grow  -mt-0.5 w-[50%] ">
                    <span className="text-sm ">
                      {user.firstName + " " + user.lastName}
                    </span>
                    <span className="text-sm  overflow-hidden text-ellipsis text-[grey] -mt-1">
                      @{user.username}
                    </span>
                  </div>

                  <button className="p-2 text-xs text-center rounded-md w-18 bg-teal-200">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="hidden xl:block bg-white border-solid border-r-2 p-2 h-screen">
          <div className="relative bg-gray-100 xl:mx-4 2xl:my-3 rounded-lg border border-black focus-within:border-teal-600">
            <input
              type="text"
              placeholder="Search Users..."
              className="bg-gray-100 text-gray-600 text-sm xl:text-base py-2 px-4 w-[90%] outline-none rounded-lg"
            />
            <SearchOutlinedIcon className="absolute right-1 top-2.5 xl:top-2" />
          </div>
          {/* who to follow */}
          {myUsers?.length ? (
            <div className="flex flex-col h-[67%] gap-4 m-4 mt-8 px-4 py-3 bg-teal-400 rounded-md overflow-hidden overflow-y-scroll no-scrollbar">
              <div className="text-lg font-bold tracking-wide">
                Who to Follow
              </div>

              {whoToFollow ? (
                whoToFollow.map((user) => (
                  <div
                    key={user._id}
                    className="flex items-center gap-2 cursor-pointer animate-pulse"
                  >
                    <div className="w-9 h-9 mt-1 rounded-full bg-gray-300"></div>{" "}
                    {/* Placeholder for user profile image */}
                    <div className="flex flex-col grow -mt-0.5 w-[50%]">
                      <div className="text-sm bg-gray-300 h-4"></div>{" "}
                      {/* Placeholder for user name */}
                      <div className="text-sm bg-gray-300 h-4 overflow-hidden text-ellipsis text-[grey] -mt-1"></div>{" "}
                      {/* Placeholder for username */}
                    </div>
                    <button className="p-2 text-xs text-center rounded-md w-18 bg-teal-200 bg-gray-300">
                      {/* Placeholder for Follow button */}
                    </button>{" "}
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="flex flex-col h-[67%] gap-4 m-4 mt-8 px-4 py-3 bg-teal-400 rounded-md overflow-hidden overflow-y-scroll no-scrollbar animate-pulse">
              <div className="text-lg font-bold tracking-wide bg-gray-300 h-6"></div>{" "}
              {/* Placeholder for "Who to Follow" text */}
              <div className="w-9 h-9 mt-1 rounded-full bg-gray-300"></div>{" "}
              {/* Placeholder for user profile image */}
              <div className="flex flex-col grow -mt-0.5 w-[50%]">
                <div className="text-sm bg-gray-300 h-4"></div>{" "}
                {/* Placeholder for user name */}
                <div className="text-sm bg-gray-300 h-4 overflow-hidden text-ellipsis text-[grey] -mt-1"></div>{" "}
                {/* Placeholder for username */}
              </div>
              <button className="p-2 text-xs text-center rounded-md w-18 bg-teal-200 bg-gray-300">
                Follow
              </button>{" "}
              {/* Placeholder for Follow button */}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Aside;
