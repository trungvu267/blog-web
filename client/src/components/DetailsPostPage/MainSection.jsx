import { useEffect } from "react";
import Comments from "./Comments";
import Article from "./Article";
import SuggestPosts from "./SuggestPosts";
import { useParams } from "react-router-dom";
import { useDetailPost } from "../../hooks/post.hook";
import { PostDetailSkeleton } from "../Skeleton";
import { useDelayRendering } from "../../hooks/delayRendering";
import { useWindowScroll } from "@uidotdev/usehooks";
export const MainSection = () => {
  const { postId } = useParams();
  const { detailBlog, isLoading } = useDetailPost(postId);
  const [{ x, y }, scrollTo] = useWindowScroll();
  useEffect(() => {
    scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);
  const loading = useDelayRendering({ isLoading });
  if (loading) {
    return <PostDetailSkeleton />;
  }

  return (
    <div className="w-[65%] mt-5 ">
      <Article blog={detailBlog} />
      <Comments />
      {/* <SuggestPosts /> */}
    </div>
  );
};
