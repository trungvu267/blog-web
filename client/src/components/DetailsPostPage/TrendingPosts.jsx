import { Link } from "react-router-dom";
import { TitleComment } from "./TitleComment";

const TrendingPosts = () => {
  return (
    <div className="p-5 border bg-slate-50 mt-5 rounded-lg">
      <h2 className="text-lg font-bold text-black border-b p-3">
        Trending on{" "}
        <Link to={"/"} className="text-primary">
          DEV Community
        </Link>{" "}
      </h2>
      <TitleComment small></TitleComment>
      <TitleComment small></TitleComment>
      <TitleComment small></TitleComment>
      <TitleComment small></TitleComment>
    </div>
  );
};

export default TrendingPosts;
