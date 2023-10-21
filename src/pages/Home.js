import React, { useContext, useEffect, useState } from "react";

import SideBar from "../components/SideBar";
import Aside from "../components/Aside";
import { UsersContext } from "../contexts/UsersContext";
import FilterModal from "../components/FilterModal";
import { PostsContext } from "../contexts/PostsContext";

import {
  MdFilterAlt,
  MdAddPhotoAlternate,
  MdAddReaction,
} from "react-icons/md";
import PostCard from "../components/PostCard";

const Home = () => {
  const [currentUserFeedPosts, setCurrentUserFeedPosts] = useState([]);
  const { currentUser } = useContext(UsersContext);
  const { allPosts, isFilterOn, setIsFilterOn } = useContext(PostsContext);

  useEffect(() => {
    setCurrentUserFeedPosts(
      allPosts?.filter(
        (post) =>
          post?.username === currentUser?.username ||
          currentUser?.following.find(
            (user) => user?.username === post?.username
          )
      )
    );
  }, [currentUser, allPosts]);

  return (
    <div className="grid sm:grid-cols-[4rem_0.9fr] lg:grid-cols-[12rem_0.9fr] xl:grid-cols-[11rem_0.9fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto transition-all duration-500 h-screen ">
      {/* leftSidebar */}
      <SideBar />
      {/* Feed */}
      <div className="flex flex-col  border-solid border-2 sm:overflow-y-scroll no-scrollbar h-full ">
        {/* Feed Header */}
        <div className="bg-white sticky top-0 p-3 border-b text-2xl  border-gray-400 rounded flex items-center pl-2 z-40">
          Home
        </div>
        {/* Make Post  */}
        <div className="grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b rounded border-gray-400 px-2 py-4 cursor-text">
          <div className="">
            <img
              src={currentUser?.profileAvatar}
              alt="user"
              className="w-9 h-8  rounded-full"
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
                <MdAddPhotoAlternate
                  className="text-xl scale-100 hover:scale-125"
                  title="Add Photo/GIF/Video"
                />
              </label>
              <label className="cursor-pointer">
                <MdAddReaction
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
        <div className="p-2 m-2 border  border-gray-400 text-md   flex justify-between items-center rounded">
          <span>Latest Posts</span>
          <span className="pr-2 relative ">
            <MdFilterAlt
              onClick={() => setIsFilterOn(!isFilterOn)}
              className="cursor-pointer scale-100 hover:scale-125"
            />
            {isFilterOn && <FilterModal />}
          </span>
        </div>
        {/* posts */}
        <div className="mb-12 sm:mb-2">
          {currentUserFeedPosts.map((post) => {
            return (
              // Post
              <PostCard post={post} />
            );
          })}
        </div>
      </div>
      {/* RightSidebar*/}
      <Aside />
    </div>
  );
};

export default Home;
