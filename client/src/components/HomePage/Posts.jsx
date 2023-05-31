import { Link } from "react-router-dom";
import { usePublishPost } from "../../hooks/post.hook";
import Post from "./Post";
import { PostSkeleton } from "../Skeleton";

const Posts = () => {
  const { publishBlogs, isLoading, error } = usePublishPost();
  return (
    <div>
      <div className="flex gap-1">
        <Link
          to={"/"}
          className="p-3 font-bold rounded-lg hover:text-primary hover:bg-white"
        >
          Relevant
        </Link>
        <Link
          to={"/latest"}
          className="p-3 font-bold rounded-lg hover:text-[#3b49df] hover:bg-white"
        >
          Latest
        </Link>
        <Link
          to={"/top"}
          className="p-3 font-bold rounded-lg hover:text-[#3b49df] hover:bg-white"
        >
          Top
        </Link>
      </div>
      {isLoading && <PostsSkeleton />}
      {publishBlogs?.map((publishBlog) => (
        <Post blog={publishBlog} key={publishBlog._id} />
      ))}
    </div>
  );
};

export default Posts;

const PostsSkeleton = () => {
  return (
    <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
};
