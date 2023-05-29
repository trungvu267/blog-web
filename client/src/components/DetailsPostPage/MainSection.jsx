import Comments from "./Comments";
import Article from "./Article";
import SuggestPosts from "./SuggestPosts";
import { useParams } from "react-router-dom";
import { useDetailPost } from "../../hooks/post.hook";
export const MainSection = () => {
  const { postId } = useParams();
  const { detailBlog, isLoading, error } = useDetailPost(postId);
  console.log(detailBlog);
  console.log(error);

  if (isLoading) {
    return <div className="w-[65%] mt-5 ">Loading</div>;
  }
  return (
    <div className="w-[65%] mt-5 ">
      <Article blog={detailBlog} />
      <Comments />
      {/* <SuggestPosts /> */}
    </div>
  );
};
