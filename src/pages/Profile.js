import React, { useContext } from "react";

import SideBar from "../components/SideBar";
import Aside from "../components/Aside";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import moment from "moment";

import { UsersContext } from "../contexts/UsersContext";
import { users } from "../backend/db/users";
import { posts } from "../backend/db/posts";

const Profile = () => {
  const { currentUser } = useContext(UsersContext);
  const userPosts = posts.filter(
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
              {userPosts.length} Posts
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
            const {
              _id,
              username,
              createdAt,
              content,
              mediaURL,
              mediaAlt,
              likedBy,
              comments,
            } = post;
            const user = users.find((user) => user.username === username);
            const likes = likedBy.length;
            const totalComments = comments.length;

            return (
              // Post
              <>
                <div
                  key={_id}
                  className="grid grid-cols-[2rem_1fr] gap-1.5 p-3  text-sm  border-solid border-b-2 border-red-500"
                >
                  <div>
                    <img
                      src={user?.profileAvatar}
                      alt="user"
                      className="w-9 h-9 mt-1 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <div className="flex justify-start gap-2 pt-1">
                        <div className="flex flex-col">
                          <span className="font-bold">
                            {user.firstName} {user.lastName}
                          </span>
                          <span className=" text-gray-600">@{username}</span>
                        </div>
                        <div className=" text-slate-600">
                          {moment({ createdAt }).format("ll")}
                        </div>
                      </div>
                      <div className="p-2">
                        <MoreHorizOutlinedIcon />
                      </div>
                    </div>
                    <div>{content}</div>
                    <div>
                      <img
                        src={mediaURL}
                        alt={mediaAlt}
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <div className="flex gap-6  p-2 ">
                      <div className="flex justify-center ">
                        <span className="flex cursor-pointer">
                          <FavoriteBorderOutlinedIcon />
                        </span>
                        <span> {likes}</span>
                      </div>
                      <div className="flex justify-center ">
                        <span className="cursor-pointer">
                          <ChatBubbleOutlineOutlinedIcon />
                        </span>
                        <span>{totalComments}</span>
                      </div>
                      <span className="cursor-pointer">
                        <BookmarksOutlinedIcon />
                      </span>
                      <span className="cursor-pointer">
                        <IosShareOutlinedIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* RightSidebar*/}
      <Aside />
    </div>
  );
};

export default Profile;
