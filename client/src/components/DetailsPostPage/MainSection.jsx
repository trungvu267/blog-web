import Comments from "./Comments";
import Article from "./Article";
import SuggestPosts from "./SuggestPosts";
export const MainSection = () => {
  return (
    <div className="w-[65%] mt-5 ">
      <Article />
      <Comments />
      <SuggestPosts />
    </div>
  );
};
