import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../contexts/PostsContext";
import { UsersContext } from "../contexts/UsersContext";
import SideBar from "../components/SideBar";
import Aside from "../components/Aside";
import PostCard from "../components/PostCard";

const Bookmarks = () => {
  const [currentUserBookmarkPosts, setCurrentUserBookmarkPosts] = useState([]);
  const { currentUser } = useContext(UsersContext);
  const { allPosts } = useContext(PostsContext);

  useEffect(() => {
    setCurrentUserBookmarkPosts(
      allPosts?.filter((post) => currentUser?.bookmarks?.includes(post?._id))
    );
  }, [currentUser, allPosts]);

  return (
    <div className="grid sm:grid-cols-[4rem_0.9fr] lg:grid-cols-[12rem_0.9fr] xl:grid-cols-[13rem_0.9fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto transition-all duration-500 h-screen justify-center ">
      {/* leftSidebar */}
      <SideBar />
      {/* Feed */}
      <div className="flex flex-col  border-solid border-2 sm:overflow-y-scroll no-scrollbar h-full ">
        {/* Feed Header */}
        <div className="bg-white sticky top-0 p-3 border-b-2 text-2xl  border-black flex items-center pl-2 z-40">
          Bookmarks
        </div>
        {/* posts */}
        <div className="mb-12 sm:mb-2">
          {currentUserBookmarkPosts.map((post) => {
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

export default Bookmarks;
