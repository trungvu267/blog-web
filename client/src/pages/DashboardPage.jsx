import { Button } from "react-daisyui";
import { NavbarBlog } from "../components";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <NavbarBlog>
      <div className="container">
        <h1 className="text-3xl font-bold text-black mt-5">Dashboard</h1>
        <div className="grid grid-cols-4 mt-10 gap-10">
          <div className="text-lg p-6 rounded-lg bg-slate-100">
            <span className="text-3xl font-bold  text-black"> 0</span>
            <div>Total post reactions</div>
          </div>
          <div className="text-lg p-6 rounded-lg bg-slate-100">
            <span className="text-3xl font-bold  text-black"> 0</span>
            <div>Total post reactions</div>
          </div>{" "}
          <div className="text-lg p-6 rounded-lg bg-slate-100">
            <span className="text-3xl font-bold  text-black"> 0</span>
            <div>Total post reactions</div>
          </div>{" "}
          <div className="text-lg p-6 rounded-lg bg-slate-100">
            <span className="text-3xl font-bold  text-black"> 0</span>
            <div>Total post reactions</div>
          </div>
        </div>
        {/* p */}
        <div className="flex mt-5  gap-5">
          <div className="w-[20%] flex flex-col gap-y-1 ">
            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <span>Posts</span>
              <span>0</span>
            </Button>
            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <span>Series</span>
              <span>0</span>
            </Button>
            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <span> Followers</span>
              <span>0</span>
            </Button>
            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <span> Following tags</span>
              <span>0</span>
            </Button>
            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <span> Following users</span>
              <span>0</span>
            </Button>
            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <span>Following organizations</span>
              <span>0</span>
            </Button>

            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <div className="flex text-center gap-2">
                <span> Listings </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 -translate-y-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </Button>
            <Button
              color="ghost"
              className="flex justify-between bg-slate-50 text-center"
            >
              <span>Analytics</span>
            </Button>
          </div>
          <div className="flex-1 ">
            <h2 className="text-xl font-bold text-black mt-5">Post</h2>
            <div className="post bg-slate-50 w-full relative rounded-lg h-[600px] flex text-center flex-col justify-center p-9">
              <img
                className="w-[300px] absolute top-10 left-1/2 -translate-x-1/2"
                src="../dashboard.webp"
                alt=""
              />

              <div className="absolute bottom-14 left-1/2  -translate-x-1/2 -translate-y-11">
                This is where you can manage your posts, but you haven't written
                anything yet.
              </div>
              <Link to={"/posts/create"}>
                <Button
                  color="ghost "
                  className=" bg-blue-800 hover:bg-blue-900 absolute bottom-10 left-96 "
                >
                  Write your first post now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NavbarBlog>
  );
};

export default DashboardPage;
