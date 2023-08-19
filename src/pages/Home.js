import React, { useContext, useEffect, useState } from "react";

import moment from "moment";
import SideBar from "../components/SideBar";
import Aside from "../components/Aside";
import { UsersContext } from "../contexts/UsersContext";
import FilterModal from "../components/FilterModal";
import { PostsContext } from "../contexts/PostsContext";

import {
  MdFavoriteBorder,
  MdFavorite,
  MdChatBubbleOutline,
  MdBookmark,
  MdBookmarkBorder,
  MdIosShare,
  MdMoreHoriz,
  MdFilterAlt,
  MdAddPhotoAlternate,
  MdAddReaction,
} from "react-icons/md";

const Home = () => {
  const [currentUserFeedPosts, setCurrentUserFeedPosts] = useState([]);
  const { myUsers, currentUser, usersDispatch } = useContext(UsersContext);
  const { allPosts, postsDispatch, isFilterOn, setIsFilterOn } =
    useContext(PostsContext);

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
    <div className="grid sm:grid-cols-[4rem_1fr] lg:grid-cols-[12rem_1fr] xl:grid-cols-[11rem_1fr_20rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto transition-all duration-500 h-screen ">
      {/* leftSidebar */}
      <SideBar />
      {/* Feed */}
      <div className="flex flex-col  border-solid border-2 sm:overflow-y-scroll no-scrollbar h-full ">
        {/* Feed Header */}
        <div className="bg-white sticky top-0 p-3 border-b-2 text-2xl  border-black flex items-center pl-2 z-40">
          Home
        </div>
        {/* Make Post  */}
        <div className="grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b border-gray-600 px-2 py-4 cursor-text">
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
        <div className="w-full border-b-2 p-2 text-md border-black flex justify-between items-center">
          <span>Latest Posts</span>
          <span className="pr-4 relative ">
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
            const user = myUsers?.find((user) => user.username === username);
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
                      className="w-9 h-8 mt-1 rounded-full"
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
                          {moment(createdAt).format("lll")}
                        </div>
                      </div>
                      <div className="p-2">
                        <MdMoreHoriz />
                      </div>
                    </div>
                    <div>{content}</div>
                    <div className=" m-auto">
                      <img
                        src={mediaURL}
                        alt={mediaAlt}
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <div className="flex gap-6  p-2 ">
                      <div className="flex justify-center ">
                        {likedBy?.includes(currentUser?._id) ? (
                          <span
                            onClick={() =>
                              postsDispatch({
                                type: "UNLIKE_POST",
                                payload: _id,
                              })
                            }
                            className="flex cursor-pointer text-red-600"
                          >
                            <MdFavorite />
                          </span>
                        ) : (
                          <span
                            onClick={() =>
                              postsDispatch({ type: "LIKE_POST", payload: _id })
                            }
                            className="flex cursor-pointer"
                          >
                            <MdFavoriteBorder />
                          </span>
                        )}
                        <span> {likes}</span>
                      </div>
                      <div className="flex justify-center ">
                        <span className="cursor-pointer">
                          <MdChatBubbleOutline />
                        </span>
                        <span>{totalComments}</span>
                      </div>
                      {currentUser?.bookmarks?.includes(_id) ? (
                        <span
                          onClick={() => {
                            usersDispatch({
                              type: "UNBOOKMARK_POST",
                              payload: _id,
                            });
                          }}
                          className="flex cursor-pointer text-red-600"
                        >
                          <MdBookmark />
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            usersDispatch({
                              type: "BOOKMARK_POST",
                              payload: _id,
                            });
                          }}
                          className="flex cursor-pointer"
                        >
                          <MdBookmarkBorder />
                        </span>
                      )}
                      <span className="cursor-pointer">
                        <MdIosShare />
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

export default Home;
