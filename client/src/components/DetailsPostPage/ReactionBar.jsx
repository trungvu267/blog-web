import {
  IoBookmark,
  IoBookmarkOutline,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { find, get } from "lodash";
import { useListBookmark, useSetBookmark } from "../../hooks/bookmark.hook";
import { useListReaction, useReaction } from "../../hooks/reaction.hook";
const ReactionBar = () => {
  const { postId } = useParams();
  const { listBookmark } = useListBookmark();
  const { listReaction } = useListReaction();
  const { mutation, handleSetBookmark } = useSetBookmark(postId);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isReaction, setIsReaction] = useState(false);
  const { mutation: reactMutation, handleSetReaction } = useReaction(postId);
  useEffect(() => {
    const matchReaction = find(
      listReaction,
      (reaction) => reaction.blog === postId
    );
    const matchIsReaction = matchReaction && get(matchReaction, "isLiked");
    setIsReaction(matchIsReaction);
  }, [listReaction, postId, reactMutation]);
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
      <div
        className="text-center mx-auto mb-5 cursor-pointer"
        onClick={handleSetReaction}
      >
        {isReaction ? (
          <IoHeart size={"1.5rem"} className="text-red-400" />
        ) : (
          <IoHeartOutline size={"1.5rem"} />
        )}
      </div>
      <div className="text-center mx-auto mb-5 cursor-pointer">
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
      </div>
      <div
        className="text-center mx-auto mb-5 cursor-pointer"
        onClick={handleSetBookmark}
      >
        {isBookmarked ? (
          <IoBookmark size={"1.5rem"} className="text-primary" />
        ) : (
          <IoBookmarkOutline size={"1.5rem"} />
        )}
      </div>
    </div>
  );
};

export default ReactionBar;
