import React from "react";
import { Link, NavLink } from "react-router-dom";
import { scrollPng } from "../utils/constants";

import {
  MdAddCircle,
  MdBookmarks,
  MdExplore,
  MdHome,
  MdPerson,
} from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <div className="flex bg-white  sm:sticky sm:flex-col sm:justify-between sm:h-screen sm:top-0 sm:overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 w-full items-center sm:border-0 border-t-2 border-gray-600 sm:z-0 z-40">
        <ul className="flex items-center sm:items-start justify-evenly sm:justify-start p-1 sm:flex-col grow">
          <li>
            <Link className="flex items-center">
              <img
                src={scrollPng}
                alt="logo"
                className="h-9 w-9 md:mr-1 md:h-9 md:w-12 lg:h-12 lg:w-12 lg:mr-2"
              />
              <span className="hidden text-2xl font-semibold lg:inline ">
                Scroll
              </span>
            </Link>
          </li>
          <li className="sm:mt-2">
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <MdHome className="text-2xl" />
              </span>
              <span className="hidden lg:block">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <MdExplore className="text-2xl" />
              </span>
              <span className="hidden lg:block">Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <MdBookmarks className="text-2xl" />
              </span>
              <span className="hidden lg:block">Bookmarks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="flex items-center gap-1 p-2 text-md hover:bg-teal-400"
            >
              <span>
                <MdPerson className="text-2xl" />
              </span>
              <span className="hidden lg:block">Profile</span>
            </NavLink>
          </li>
          <li>
            <button className="flex gap-2 p-2 max-w-32 text-md border-solid rounded text-white font-medium bg-teal-400">
              <span>
                <MdAddCircle className="text-2xl" />
              </span>
              <span className="hidden lg:block">New Post</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
