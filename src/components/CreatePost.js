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
  const [postImagePreview, setPostImagePreview] = useState();
  const [loading, setLoading] = useState(false);

  const staticLoading = false;

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostImage(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPostImagePreview(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPostImagePreview(null);
  };

  const submitHandler = (event) => {
    setLoading(true);
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
        setLoading(false);
        setPostText("");
        setPostImage("");
        setPostImagePreview(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!staticLoading ? (
        <div className="grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b rounded border-gray-400 px-2 py-4 cursor-text">
          <div className="">
            <img
              src={currentUser?.profileAvatar}
              alt="user"
              className="w-9 h-8  rounded-full"
            />
          </div>
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col gap-2"
          >
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
            {postImagePreview && (
              <div className="w-full flex justify-start align-center relative">
                <div className="relative">
                  <img
                    src={postImagePreview}
                    className="border border-gray-500 rounded-md"
                    alt=""
                  />
                  <button
                    className="absolute top-[3%] right-5 bg-black text-white border border-gray-500 w-7 p-1 rounded-3xl"
                    onClick={clearImage}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
            <div className="ml-auto flex items-center gap-4 mt-1.5">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*, video/*"
                  onChange={(e) => {
                    handleImageChange(e);
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
              {/* <button
            type="submit"
            className="py-1 px-4 rounded-md border border-gray-600 disabled:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed"
            // disabled={!content.trim() && !media}
            disabled={postText || postImage ? false : true}
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Post
          </button> */}
              <button
                type="submit"
                className={`py-1 px-4 rounded-md border border-gray-600 disabled:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                disabled={(postText || postImage) && !loading ? false : true}
              >
                {loading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className={`inline w-4 h-4 mr-3 text-white ${
                      loading ? "animate-spin" : ""
                    }`}
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {loading ? "Posting..." : "Post"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="animate-pulse grid grid-cols-[2rem_1fr] gap-2 items-start text-sm border-b rounded border-gray-400 px-2 py-4 cursor-text">
          <div className="">
            {/* Placeholder for user profile image */}
            <div className="w-9 h-8 rounded-full bg-gray-300"></div>
          </div>
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col gap-2"
          >
            <div className="w-full outline-none mt-1.5 h-auto">
              <textarea
                rows={2}
                value={postText}
                onChange={(e) => {
                  setPostText(e.target.value);
                }}
                className="w-full outline-none resize-none h-10"
                placeholder="What is happening?!" // Placeholder for the text area
              ></textarea>
            </div>
            {postImagePreview && (
              <div className="w-full flex justify-start align-center relative">
                <div className="relative">
                  <img
                    src={postImagePreview}
                    className="border border-gray-500 rounded-md"
                    alt=""
                  />
                  <button
                    className="absolute top-[3%] right-5 bg-black text-white border border-gray-500 w-7 p-1 rounded-3xl"
                    onClick={clearImage}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
            <div className="ml-auto flex items-center gap-4 mt-1.5">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*, video/*"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                  className="hidden"
                />
                <div className="w-9 h-9 bg-gray-300 rounded-full"></div>{" "}
                {/* Placeholder for Add Photo/GIF/Video Icon */}
              </label>
              <label className="cursor-pointer">
                <div className="w-9 h-9 bg-gray-300 rounded-full"></div>{" "}
                {/* Placeholder for Add Emoji Icon */}
              </label>
              <button
                type="submit"
                className={`py-1 px-4 rounded-md border border-gray-600 disabled:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                disabled={(postText || postImage) && !loading ? false : true}
              >
                {loading && (
                  <div className={`w-9 h-9 bg-gray-300 rounded-full`}>
                    {" "}
                    {/* Placeholder for Loading Icon */}
                  </div>
                )}
                {/* {loading ? "Posting..." : "Post"}{" "} */}
                <div className="p-3 h-2"></div>
                {/* Placeholder for Button Text */}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreatePost;
