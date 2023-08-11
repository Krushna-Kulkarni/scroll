import React from "react";
import { Link, NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";

import { scrollPng } from "../utils/constants";
import { posts } from "./../backend/db/posts";
import moment from "moment";
import { users } from "./../backend/db/users";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-[4rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[11rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto transition-all duration-500 h-screen ">
      {/* leftSidebar */}
      <div className="flex bg-white  sm:sticky sm:flex-col sm:justify-between sm:h-screen sm:top-0 sm:overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 w-full items-center sm:border-0 border-t-2 border-gray-600 sm:z-0 z-40">
        <ul className="flex items-center sm:items-start justify-evenly sm:justify-start p-1 sm:flex-col grow">
          <li>
            <Link className="flex items-center">
              <img
                src={scrollPng}
                alt="logo"
                className="hidden sm:block mr-1 sm:h-9 sm:w-12 lg:h-12 lg:w-12 lg:mr-2"
              />
              <span className="hidden text-2xl font-semibold lg:inline ">
                Scroll
              </span>
            </Link>
          </li>
          <li className="md:mt-2">
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <HomeIcon />
              </span>
              <span className="hidden lg:block">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <ExploreIcon />
              </span>
              <span className="hidden lg:block">Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <BookmarksIcon />
              </span>
              <span className="hidden lg:block">Bookmarks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <PersonIcon />
              </span>
              <span className="hidden lg:block">Profile</span>
            </NavLink>
          </li>
          <li>
            <button className="flex gap-2 p-2 max-w-32 text-md border-solid rounded text-white font-medium bg-teal-400">
              <span>
                <AddCircleOutlinedIcon />
              </span>
              <span className="hidden lg:block">New Post</span>
            </button>
          </li>
        </ul>
      </div>
      {/* Feed */}
      <div className="flex flex-col  border-solid border-2 md:overflow-y-scroll no-scrollbar h-screen ">
        {/* Feed Header */}
        <div className="bg-white sticky top-0 h-24 p-2 border-b-2 text-lg border-black flex items-center pl-2">
          Home
        </div>
        {/* Make Post  */}
        <div className="grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b border-gray-600 px-4 py-3 cursor-text">
          <div className="">
            <img
              src=""
              // src={user?.profileAvatar}
              alt="user"
              className="w-9 h-9 mt-1 rounded-full"
            />
          </div>
          <form className="flex flex-col gap-2">
            <div className="w-full outline-none mt-1.5 h-auto">
              <textarea
                rows={2}
                className="w-full outline-none resize-none h-auto"
                placeholder="What is happening?!"
              ></textarea>
            </div>

            <div className="ml-auto flex items-center gap-4 mt-1.5">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*, video/*"
                  className="hidden"
                />
                <AddPhotoAlternateIcon
                  className="text-xl scale-100 hover:scale-125"
                  title="Add Photo/GIF/Video"
                />
              </label>
              <label className="cursor-pointer">
                <AddReactionIcon
                  className="text-xl scale-90 hover:scale-125"
                  title="Add Emoji"
                />
              </label>
              <button
                type="submit"
                className="py-1 px-4 rounded-md border border-gray-600 disabled:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed"
                // disabled={!content.trim() && !media}
                disabled={true}
              >
                Post
              </button>
            </div>
          </form>
        </div>
        {/* Filter */}
        <div className="w-full h-48 border-b-2 p-2 text-md border-black flex justify-between items-center">
          <span>Latest Posts</span>
          <span className="pr-4">
            <FilterAltIcon />
          </span>
        </div>
        {/* posts */}
        <div>
          {posts?.map((post) => {
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
              <>
                <div
                  key={_id}
                  className="grid grid-cols-[2rem_1fr] gap-1.5 p-3  text-sm  border-solid border-b-2 border-red-500"
                >
                  <div className="">
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
        {users.length ? (
          <div className="flex flex-col h-[67%] gap-4 m-4 mt-8 px-4 py-3 bg-teal-400 rounded-md  overflow-hidden overflow-y-scroll no-scrollbar">
            <div className="text-lg font-bold tracking-wide">Who to Follow</div>

            {users?.map((user) => (
              <div
                key={user._id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={user?.profileAvatar}
                  alt="user"
                  className="w-[15%]  h-9 mt-1 rounded-full"
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
    </div>
  );
};

export default Home;
