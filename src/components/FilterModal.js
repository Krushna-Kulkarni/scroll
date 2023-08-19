import React, { useContext } from "react";
import {
  MdTrendingUp,
  MdArrowCircleUp,
  MdArrowCircleDown,
} from "react-icons/md";
import { PostsContext } from "../contexts/PostsContext";

const FilterModal = () => {
  const { postsDispatch, setIsFilterOn } = useContext(PostsContext);

  return (
    <div className="w-28 bg-teal-400 p-1 text-xs sm:text-sm md:text-md absolute top-6 right-7 border-solid border-2 border-black">
      <ul>
        <li
          onClick={() => {
            postsDispatch({ type: "SORT_POSTS", payload: "TRENDING" });
            setIsFilterOn(false);
          }}
          className=" flex  items-center gap-1 p-1 hover:bg-teal-600 cursor-pointer"
        >
          <MdTrendingUp /> Trending
        </li>
        <li
          onClick={() => {
            postsDispatch({ type: "SORT_POSTS", payload: "LATEST" });
            setIsFilterOn(false);
          }}
          className="flex  items-center gap-1 p-1 hover:bg-teal-600 cursor-pointer"
        >
          <MdArrowCircleUp />
          Latest
        </li>
        <li
          onClick={() => {
            postsDispatch({ type: "SORT_POSTS", payload: "OLDEST" });
            setIsFilterOn(false);
          }}
          className="flex  items-center gap-1 p-1 hover:bg-teal-600 cursor-pointer"
        >
          <MdArrowCircleDown />
          Oldest
        </li>
      </ul>
    </div>
  );
};

export default FilterModal;
