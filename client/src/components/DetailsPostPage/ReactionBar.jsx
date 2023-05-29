import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useState, useLayoutEffect, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useListBookmark, useSetBookmark } from "../../hooks/bookmark.hook";
import { find, get } from "lodash";
const ReactionBar = () => {
  const { postId } = useParams();
  const { listBookmark } = useListBookmark();
  const { mutation, handleSetBookmark } = useSetBookmark(postId);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const matchBookmark = find(
      listBookmark,
      (bookmark) => bookmark.blog === postId
    );
    const matchIsBookmark = matchBookmark && get(matchBookmark, "isBookmarked");
    setIsBookmarked(matchIsBookmark);
  }, [listBookmark, postId, mutation]);

  return (
    <div className="flex flex-col w-[5%] text-center  mt-32">
      <div className="text-center mx-auto mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span className="text-sm">8</span>
      </div>
      <div className="text-center mx-auto mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        <span className="text-sm">8</span>
      </div>
      <div
        className="text-center mx-auto mb-5 cursor-pointer"
        onClick={handleSetBookmark}
      >
        {isBookmarked ? (
          <IoBookmark size={"1.5rem"} />
        ) : (
          <IoBookmarkOutline size={"1.5rem"} />
        )}
        <span className="text-sm">8</span>
      </div>
    </div>
  );
};

export default ReactionBar;
