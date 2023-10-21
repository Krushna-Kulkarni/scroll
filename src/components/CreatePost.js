import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { MdAddPhotoAlternate, MdAddReaction } from "react-icons/md";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { PostsContext } from "../contexts/PostsContext";

const CreatePost = () => {
  const { currentUser } = useContext(UsersContext);
  const { postsDispatch } = useContext(PostsContext);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postImagePreview, setPostImagePreview] = useState("");
  const post = {
    _id: "",
    username: currentUser.username,
    createdAt: "",
    updatedAt: "",
    content: "",
    mediaURL: "",
    mediaAlt: "",
    likedBy: [],
    comments: [],
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = new FormData();

    postData.append("file", postImage);

    const customPublicId = `${Date.now()}`;
    postData.append("public_id", customPublicId);
    postData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    postData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    postData.append("folder", `scroll/posts/${currentUser.username}/`);

    fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "post",
        body: postData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostImagePreview(data?.url?.toString());

        const newPost = {
          ...post,
          _id: uuid(),
          createdAt: moment(Date.now()).format(),
          content: postText,
          mediaURL: data?.url?.toString(),
        };
        postsDispatch({
          type: "CREATE_POST",
          payload: newPost,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b rounded border-gray-400 px-2 py-4 cursor-text">
      <div className="">
        <img
          src={currentUser?.profileAvatar}
          alt="user"
          className="w-9 h-8  rounded-full"
        />
      </div>
      <form onSubmit={(e) => submitHandler(e)} className="flex flex-col gap-2">
        <div className="w-full outline-none mt-1.5 h-auto">
          <textarea
            rows={2}
            value={postText}
            onChange={(e) => {
              setPostText(e.target.value);
            }}
            className="w-full outline-none resize-none h-auto"
            placeholder="What is happening?!"
          ></textarea>
        </div>

        <div className="ml-auto flex items-center gap-4 mt-1.5">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*, video/*"
              onChange={(e) => {
                setPostImage(e.target.files[0]);
              }}
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
            disabled={postText || postImage ? false : true}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
