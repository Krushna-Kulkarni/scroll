import React, { useContext } from "react";
import moment from "moment";

import {
  MdFavoriteBorder,
  MdFavorite,
  MdChatBubbleOutline,
  MdBookmark,
  MdBookmarkBorder,
  MdIosShare,
  MdMoreHoriz,
} from "react-icons/md";
import { PostsContext } from "../contexts/PostsContext";
import { UsersContext } from "../contexts/UsersContext";

const PostCard = ({ post, staticLoading }) => {
  const { myUsers, currentUser } = useContext(UsersContext);
  const { postsDispatch } = useContext(PostsContext);

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
  const likes = likedBy?.length;
  const totalComments = comments?.length;

  return (
    <>
      {!staticLoading ? (
        <div
          key={_id}
          className="grid grid-cols-[2.2rem_1fr] gap-2  py-2 px-3  text-sm  border-solid border-b border-gray-400 rounded m-2"
        >
          <div>
            <img
              src={user?.profileAvatar}
              alt="user"
              className="w-9 h-9 mt-1 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-0">
            <div className="flex justify-between">
              <div className="flex justify-start gap-2 pt-1">
                <div className="flex">
                  <span className="font-[550]">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <span className=" text-gray-600">&nbsp;@{username}</span>
                </div>
                •
                <div className=" text-slate-600">
                  {moment(createdAt).fromNow()}
                </div>
              </div>
              <div>
                <MdMoreHoriz size="20px" />
              </div>
            </div>
            <div class="pb-2">{content}</div>
            {mediaURL && (
              <div className="w-full pb-2 flex justify-start align-center ">
                <img
                  src={mediaURL}
                  alt={mediaAlt}
                  className="w-5/6 h-8/6 border border-gray-500 rounded-md"
                />
              </div>
            )}
            <div className="flex justify-between align-start w-3/4 pt-2">
              <div className="flex justify-between gap-1 align-center">
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
                    <MdFavorite size="18px" stroke-width="0" />
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      postsDispatch({ type: "LIKE_POST", payload: _id })
                    }
                    className="flex cursor-pointer"
                  >
                    <MdFavoriteBorder size="18px" stroke-width="0" />
                  </span>
                )}
                <span style={{ fontSize: "14px" }}> {likes}</span>
              </div>
              <div className="flex justify-between gap-1 align-center">
                <span className="cursor-pointer">
                  <MdChatBubbleOutline size="18px" stroke-width="0" />
                </span>
                <span style={{ fontSize: "14px" }}>{totalComments}</span>
              </div>
              {currentUser?.bookmarks?.includes(_id) ? (
                <span
                  onClick={() => {
                    postsDispatch({
                      type: "UNBOOKMARK_POST",
                      payload: _id,
                    });
                  }}
                  className="flex cursor-pointer text-red-600"
                >
                  <MdBookmark size="18px" stroke-width="0" />
                </span>
              ) : (
                <span
                  onClick={() => {
                    postsDispatch({
                      type: "BOOKMARK_POST",
                      payload: _id,
                    });
                  }}
                  className="flex cursor-pointer"
                >
                  <MdBookmarkBorder size="18px" stroke-width="0" />
                </span>
              )}
              <span className="cursor-pointer">
                <MdIosShare size="18px" stroke-width="0" />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div
          key={_id}
          className="grid grid-cols-[2.2rem_1fr] gap-1.5 p-3 text-sm border-solid border border-gray-400 rounded m-2 animate-pulse"
        >
          <div>
            {/* Placeholder for user profile image */}
            <div className="w-9 h-9 mt-1 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex justify-start gap-2 pt-1">
                <div className="flex flex-col">
                  {/* Placeholder for User Name and Username */}
                  <div className="w-16 h-3 bg-gray-300 mb-1"></div>
                  <div className="w-20 h-2 bg-gray-300"></div>
                </div>
                <div className="text-slate-600">
                  {/* Placeholder for Date */}
                </div>
              </div>
              <div className="p-2">
                {/* Placeholder for More Options Icon */}
                <div className="w-5 h-5 bg-gray-300"></div>
              </div>
            </div>
            <div>
              {/* Placeholder for content */}
              <div className="bg-gray-300 h-5"></div>
            </div>
            {mediaURL && (
              <div className="w-full flex justify-start align-center">
                {/* Placeholder for media */}
                <div className="w-5/6 h-52 border border-gray-500 rounded-md bg-gray-300"></div>
              </div>
            )}
            <div className="flex gap-6 p-2">
              <div className="flex justify-between gap-1 align-center">
                <span className="flex cursor-pointer">
                  {/* Placeholder for Like Icon */}
                  <div className="w-5 h-5 bg-gray-300"></div>
                </span>
                <span style={{ fontSize: "14px" }}>
                  {/* Placeholder for Likes */}
                </span>
              </div>
              <div className="flex justify-between gap-1 align-center">
                <span className="cursor-pointer">
                  {/* Placeholder for Comment Icon */}
                  <div className="w-5 h-5 bg-gray-300"></div>
                </span>
                <span style={{ fontSize: "14px" }}>
                  {/* Placeholder for Comments */}
                </span>
              </div>
              <span className="flex cursor-pointer">
                {/* Placeholder for Bookmark Icon */}
                <div className="w-5 h-5 bg-gray-300"></div>
              </span>
              <span className="cursor-pointer">
                {/* Placeholder for Share Icon */}
                <div className="w-5 h-5 bg-gray-300"></div>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
