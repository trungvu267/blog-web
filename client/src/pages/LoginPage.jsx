import { Button, Input } from "react-daisyui";
import { NavbarBlog } from "../components";

import Lable from "../components/lable/Lable";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <NavbarBlog>
      <div className=" p-3">
        <form
          action=""
          className="w-[640px] rounded-lg border p-10 flex justify-center flex-col border-slate-300 bg-white mx-auto"
        >
          <div className="mx-auto text-center mt-10 mb-5">
            <h2 className="text-3xl text-black font-bold">
              Welcome to DEV Community
            </h2>
            <p>DEV Community is a community of 1,060,606 amazing developers</p>
          </div>
          <div className="flex flex-col gap-5">
            <Button className="bg-black">
              {/* <svg
                className="w-[70px] h-[40px] bg-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 100 900 200"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg> */}

              <span className="text-center p-3"> Continue with Apple</span>
            </Button>
            <Button className={"bg-[#2F4F4F]"}>
              <span className="text-center p-3"> Continue with Forem</span>
            </Button>
            <Button className={"bg-[#242121]"}>
              <span className="text-center p-3"> Continue with GitHub</span>
            </Button>{" "}
            <Button className={"bg-[#39b0d4]"}>
              <span className="text-center p-3"> Continue with Twitter</span>
            </Button>
          </div>
          <div className="text-center relative p-3 ">
            <span className="">
              Don't have an account yet?{" "}
              <Link className="text-blue-600" to={"/signup"}>
                Register
              </Link>
            </span>
            <p className="absolute border z-[-1] border-slate-200 top-[50%] w-full left-0 "></p>
          </div>
          <div className="mb-3 gap-y-5  mx-auto justify-center  flex flex-col">
            <Lable>Email</Lable>
            <Input></Input>
          </div>
          <div className="mb-3 gap-y-5  mx-auto justify-center  flex flex-col">
            <Lable>Password</Lable>
            <Input></Input>
          </div>
          <span className=" translate-x-1 p-1 pl-0 mt-2 mb-5 rounded-lg w-[200px] hover:bg-slate-100">
            <input className="w-[50px]" type="checkbox" />
            <span>Remember me</span>
          </span>
          <Button className={"bg-[#1952bd] "}>
            <span className="text-center p-3"> Continue </span>
          </Button>
          <span className="text-[#1952bd] text-center mt-5">
            I forgot my password
          </span>
        </form>
      </div>
    </NavbarBlog>
  );
};

export default LoginPage;
