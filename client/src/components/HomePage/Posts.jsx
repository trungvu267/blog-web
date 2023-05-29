import { Link } from "react-router-dom";
import Post from "./Post";
import usePost from "../../hooks/post.hook";

const Posts = (props) => {
  const { listPost } = usePost();

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
      <div className=" rounded-lg mb-3">
        <img
          className="rounded-lg"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Rsd1j1dG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x57e86jykz6x759rvf9c.png"
          alt="imgbanner"
        />
        <Post></Post>
      </div>
      <div className="border rounded-lg mb-3 border-slate-200">
        <div className="flex justify-between p-8">
          <h2> DEV Community</h2>
          <span className=" hover:bg-slate-200 p-2 rounded-lg">
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
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </div>
        <img
          className="rounded-lg w-[530px] h-[280px] mx-auto mb-5"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s---UXjdvws--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wixrm7ejmrua4su7agha.jpg"
          alt="imgbanner"
        />

        <h1 className="px-8 text-2xl mb-2 font-bold  hover:text-primary cursor-pointer">
          Need to stay up-to-date with the most relevant trends in software,
          such as AI, cloud computing, and all things frontend?
        </h1>
        <div className="p-8">
          <div className="mb-5">Look no further.</div>
          <div className="mb-5">
            You can do so much more once you <b>create your account</b>. Follow
            the devs and topics you care about, and keep up-to-date.
          </div>
          <span className="text-3xl font-bold mb-5 text-primary">
            Start now
          </span>
          <div className="mt-5">Happy coding ❤️</div>
        </div>
      </div>
      {listPost.map((post) => (
        <Post key={post.id} data={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
