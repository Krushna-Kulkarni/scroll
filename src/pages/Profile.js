import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import Aside from "../components/Aside";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

import { UsersContext } from "../contexts/UsersContext";
import PostCard from "../components/PostCard";
import { PostsContext } from "../contexts/PostsContext";

const Profile = () => {
  const { currentUser } = useContext(UsersContext);
  const { allPosts } = useContext(PostsContext);

  const userPosts = allPosts.filter(
    (post) => post.username === currentUser.username
  );

  return (
    <div className="grid sm:grid-cols-[4rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[11rem_1fr_20rem] w-[100%] lg:w-[80%] sm:m-auto transition-all duration-500 h-screen ">
      <SideBar />

      <div className="flex flex-col border-solid border-2 sm:overflow-y-scroll no-scrollbar h-full">
        {/* Feed Header */}
        <div className="flex items-start gap-1 bg-white sticky top-0 p-3 border-b-2 text-lg  border-black  pl-2 z-40">
          <div>
            <ArrowBackIcon />
          </div>
          <div>
            <div>{currentUser.username}</div>
            <div className="text-sm text-gray-600">
              {userPosts.length} allPosts
            </div>
          </div>
        </div>
        {/* profile */}
        <div className="relative flex flex-col items-center w-full border-solid border-b-2 border-black">
          <img
            className="w-full h-[11.5rem] object-cover"
            src={currentUser?.backgroundImage}
            alt="coverPhoto"
          />
          <div className="flex flex-col  w-full px-4 py-2 text-sm gap-2">
            <div className="flex justify-between">
              <span>
                <img
                  className="absolute w-[7rem] h-[7rem] top-[6.5rem] rounded-full object-cover "
                  src={currentUser.profileAvatar}
                  alt="profilePhoto"
                />
              </span>
              <div className="flex justify-center items-center gap-4 mb-2">
                <div>Edit Profile</div>
                <div>Logout</div>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-lg font-bold">{`${currentUser?.firstName} ${currentUser?.lastName}`}</p>
              <span>{currentUser?.username}</span>
            </div>
            <span>{currentUser?.bio}</span>
            <div>{currentUser?.website}</div>
            <div>{moment(currentUser?.createdAt).format("ll")}</div>
            <div className="flex justify-start gap-2">
              <span>{currentUser?.followers.length} followers</span>
              <span>{currentUser?.following.length} following</span>
            </div>
          </div>
        </div>
        {/* User userPosts */}
        <div className="mb-12 sm:mb-2">
          {userPosts?.map((post) => {
            return <PostCard post={post} />;
          })}
        </div>
      </div>
      {/* RightSidebar*/}
      <Aside />
    </div>
  );
};

export default Profile;
