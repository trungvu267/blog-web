import AuthorPost from "./AuthorPost";
import TrendingPosts from "./TrendingPosts";
const RightBar = () => {
  return (
    <div className="flex flex-1 flex-col">
      {/* <AuthorPost /> */}
      <TrendingPosts />
    </div>
  );
};

export default RightBar;
