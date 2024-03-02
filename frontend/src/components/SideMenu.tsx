"use client";

import {
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { RiLogoutBoxLine } from "react-icons/ri";
import Image from "next/image";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const SideMenu = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside>
      {!isAuthenticated ? (
        <RegisterLink postLoginRedirectURL="/">
          <button className="btn btn-ghost  hover:text-red-600  ">
            Sign up
          </button>
        </RegisterLink>
      ) : (
        <ul className="flex flex-col p-4 items-center gap-4 shadow-md rounded-box">
          <li>
            <button
              className=" bg-white shadow-md p-3 rounded-full hover:scale-110 duration-500 active:scale-100"
              onClick={handleGoToTop}
            >
              <FaArrowUp size={18} />
            </button>
          </li>
          <li>
            {user && user?.picture && (
              <button>
                <Image
                  src={user.picture}
                  width={40}
                  height={40}
                  alt="profile pic"
                  className="rounded-full  shadow-md  hover:scale-110 duration-500 active:scale-100"
                />
              </button>
            )}
          </li>
          {user && !user.picture && (
            <li>
              <div className="h-[40px] w-[40px] bg-red-50 flex justify-center items-center text-lg rounded-full shadow-md  hover:scale-110 duration-500 active:scale-100">
                {user?.given_name?.[0]}
              </div>
            </li>
          )}
          <li>
            {isAuthenticated && (
              <div className=" bg-red-300 p-3 rounded-full shadow-lg  hover:scale-110 duration-500 active:scale-100">
                <LogoutLink>
                  <RiLogoutBoxLine size={18} />
                </LogoutLink>
              </div>
            )}
          </li>
        </ul>
      )}
    </aside>
  );
};

export default SideMenu;
