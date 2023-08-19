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
  );
};

export default PostCard;
