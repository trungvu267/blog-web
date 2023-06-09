import React from "react";

const PostSkeleton = () => {
  return (
    <div className="border rounded-lg mb-3 border-base-300 px-4">
      <div className="flex items-center mt-4 space-x-3">
        <svg
          className=" w-12 h-12 text-base-300"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>
          <div className="h-2.5 rounded-full bg-base-300 w-32 mb-2"></div>
          <div className="w-48 h-2 rounded-full bg-base-300"></div>
        </div>
      </div>
      <div className="mx-5 h-4 rounded-full bg-base-300 w-48 my-4"></div>
      <div className="flex mx-5 space-x-2">
        <div className="h-8 bg-base-300 rounded-md w-24 mb-4"></div>
        <div className="h-8 bg-base-300 rounded-md w-24 mb-4"></div>
        <div className="h-8 bg-base-300 rounded-md w-24 mb-4"></div>
      </div>
    </div>
  );
};

export default PostSkeleton;
