import React, { useContext, useEffect, useState } from "react";

import SideBar from "../components/SideBar";
import Aside from "../components/Aside";
import { UsersContext } from "../contexts/UsersContext";
import FilterModal from "../components/FilterModal";
import { PostsContext } from "../contexts/PostsContext";

import { MdFilterAlt } from "react-icons/md";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import moment from "moment";

const Home = () => {
  const [currentUserFeedPosts, setCurrentUserFeedPosts] = useState([]);
  const { currentUser } = useContext(UsersContext);
  const { allPosts, isFilterOn, setIsFilterOn } = useContext(PostsContext);
  const [staticLoading, setStaticLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStaticLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    setCurrentUserFeedPosts(
      allPosts
        ?.filter(
          (post) =>
            post?.username === currentUser?.username ||
            currentUser?.following.find(
              (user) => user?.username === post?.username
            )
        )
        .sort((a, b) => moment(b.createdAt) - moment(a.createdAt))
    );
  }, [currentUser, allPosts]);

  return (
    <div className="grid sm:grid-cols-[4rem_0.9fr] lg:grid-cols-[12rem_0.9fr] xl:grid-cols-[13rem_0.9fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto transition-all duration-500 h-screen justify-center ">
      {/* leftSidebar */}
      <SideBar />
      {/* Feed */}
      <div className="flex flex-col  border-solid border-2 sm:overflow-y-scroll no-scrollbar h-full ">
        {/* Feed Header */}
        <div className="bg-white sticky top-0 p-3 border-b text-2xl  border-gray-400 rounded flex items-center pl-2 z-40">
          Home
        </div>
        {/* Make Post  */}
        <CreatePost />
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
          {currentUserFeedPosts?.map((post) => {
            return (
              // Post
              <PostCard post={post} staticLoading={staticLoading} />
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
