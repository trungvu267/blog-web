import Auth from "../HomePage/Auth";
import TagPost from "../HomePage/TagPost";
import { HtmlConverter } from "../common";
const Article = ({ blog }) => {
  return (
    <div className="bg-base-300 border rounded-lg mb-10">
      {blog?.imageLink && (
        <div className="w-full h-[350px] rounded-lg ">
          <img
            className="w-full h-full object-cover"
            src={blog.imageLink}
            alt={blog.title}
          />
        </div>
      )}
      <div className=" p-8">
        <Auth author={blog.author}></Auth>
        <h2 className=" text-5xl font-bold hover:text-primary mb-7 ">
          {blog.title}
        </h2>
        <div className="mb-10 space-x-2">
          {blog.tags.map((tag) => (
            <TagPost key={tag._id} tag={tag} />
          ))}
        </div>
        <div className="text-xl font-normal tracking-wider">
          <HtmlConverter htmlString={blog.content} />
        </div>
      </div>
    </div>
  );
};

export default Article;
