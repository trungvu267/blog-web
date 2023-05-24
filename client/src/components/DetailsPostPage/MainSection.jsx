import Comments from "./Comments";
import Article from "./Article";
import SuggestPost from "./SuggestPost";
export const MainSection = () => {
  return (
    <div className="w-[65%] mt-5 ">
      <Article />
      <Comments />
      <SuggestPost />
    </div>
  );
};
