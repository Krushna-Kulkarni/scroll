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

const PostCard = ({ post }) => {
  const { myUsers, currentUser, usersDispatch } = useContext(UsersContext);
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
  const likes = likedBy.length;
  const totalComments = comments.length;

  return (
    <div
      key={_id}
      className="grid grid-cols-[2.2rem_1fr] gap-1.5 p-3  text-sm  border-solid border border-gray-400 rounded m-2"
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
              <span className="font-[550]">
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
        <div className=" flex justify-start align-center m-auto">
          <img
            src={mediaURL}
            alt={mediaAlt}
            className="w-5/6 h-8/6 border border-gray-500 rounded-md"
          />
        </div>
        <div className="flex gap-6  p-2 ">
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
                <MdFavorite size="18px" />
              </span>
            ) : (
              <span
                onClick={() =>
                  postsDispatch({ type: "LIKE_POST", payload: _id })
                }
                className="flex cursor-pointer"
              >
                <MdFavoriteBorder size="18px" />
              </span>
            )}
            <span style={{ fontSize: "14px" }}> {likes}</span>
          </div>
          <div className="flex justify-between gap-1 align-center">
            <span className="cursor-pointer">
              <MdChatBubbleOutline size="18px" />
            </span>
            <span style={{ fontSize: "14px" }}>{totalComments}</span>
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
              <MdBookmark size="18px" />
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
              <MdBookmarkBorder size="18px" />
            </span>
          )}
          <span className="cursor-pointer">
            <MdIosShare size="18px" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
