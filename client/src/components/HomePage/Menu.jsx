import { Button } from "react-daisyui";
import { iconFollow } from "../../utils/constant";
import { Link } from "react-router-dom";
import { MdAlternateEmail, MdOutlineHome } from "react-icons/md";
import { path } from "../../utils/path";
const Menu = () => {
  const isAuth = !!localStorage.getItem("auth");

  return (
    <div className="w-[22%] mt-5">
      {!isAuth && (
        <div className=" bg-primary border  py-3 px-5 rounded-lg">
          <h1 className="text-lg font-bold mb-3">
            DEV Community is a community of 1,062,194 amazing developers
          </h1>
          <span>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </span>
          <Link to={path.signUp}>
            <Button
              className="w-full bg-base-200 border hover:text-white hover:bg-base-300  font-semibold mt-3"
              variant="outline"
            >
              Đăng ký
            </Button>
          </Link>
          <Link to={path.login}>
            <Button
              color="ghost"
              className="w-full hover:bg-slate-300 text-slate-800 hover:text-blue-800 border-2 mt-3"
            >
              Đăng nhập
            </Button>
          </Link>
        </div>
      )}

      <div className="flex flex-col mt-5 mb-5">
        <Button
          color="ghost"
          className={"text-black text-start p-2 w-full group hover:bg-base-300"}
        >
          <div className="flex gap-2">
            <MdOutlineHome
              size={"1.5rem"}
              className="text-primary group-hover:text-blue-800"
            />
            <span className="group-hover:text-blue-800 translate-y-1 font-semibold text-primary">
              Trang chủ
            </span>
          </div>
        </Button>
        <Link to={"/tags"}>
          <Button
            color="ghost"
            className={"text-start p-2  w-full group hover:bg-base-300"}
          >
            <div className="flex gap-2">
              <MdAlternateEmail
                size={"1.5rem"}
                className="text-primary group-hover:text-blue-800"
              />
              <span className="group-hover:text-blue-800 font-semibold translate-y-1 text-primary">
                Danh mục bài viết
              </span>
            </div>
          </Button>{" "}
        </Link>
      </div>

      <div className="flex gap-3 mb-5">
        {iconFollow.map((icon) => (
          <div
            className="w-10 rounded-lg h-10 p-2 hover:bg-slate-200 text-slate-600"
            key={icon.title}
          >
            {icon.image}
          </div>
        ))}
      </div>
      {/* <div className=" bg-slate-100 border mb-3  py-3 px-5 rounded-lg">
        <div className="flex justify-between  mb-3">
          <h2 className=" text-base translate-y-1"> DEV Community</h2>
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
          className="rounded-lg mb-3"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
          alt=""
        />
        <div className="text-xl font-bold mb-3 	text-decoration-line: underline  text-[#3b49df]">
          Life is too short to browse without dark mode.
        </div>
        <div>
          You can customize your theme, font, and more
          <a href="/" className="ml-1 text-blue-600">
            when you are signed
          </a>
          in.
        </div>
      </div> */}
      <div className=" bg-base-300 border border-base-200 mb-3 py-3 px-5 rounded-lg">
        <div className="flex justify-between  mb-3">
          <h2 className=" text-base translate-y-1"> DEV Community</h2>
          <span className=" hover:bg-base-200 p-2 rounded-lg">
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
          className="rounded-lg mb-3"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Menu;
