import { useQuery } from "react-query";
import { Layout } from "../components";
import { Menu, Posts, TitlePost } from "../components/HomePage";
import request from "../services/axios.service";
import { Link } from "react-router-dom";
import { Button } from "react-daisyui";
import { Fragment, useEffect, useState } from "react";

const HomePage = () => {
  const [auth, setAuth] = useState();
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setAuth(auth);
    console.log(auth);
  }, []);

  return (
    <Layout>
      <div className="flex relative">
        {auth ? (
          <>
            {" "}
            <Menu></Menu>
            <div className="w-[56%]   p-5">
              <Posts></Posts>
            </div>
            <TitlePost></TitlePost>
          </>
        ) : (
          <>
            <Menu></Menu>
            <div className="w-[56%]   p-5">
              <Posts></Posts>
            </div>
            <TitlePost></TitlePost>
            <div className="overlay scroll-screnn absolute opacity-40 bg-slate-400 w-full h-full  top-0 bottom-0 left-0 right-0 "></div>
            <div className="border w-[500px] h-[350px]  bg-white rounded-xl absolute top-[250px] left-1/2 -translate-x-1/2 flex justify-center text-center flex-col">
              <div className="flex justify-between  text-center mb-3 p-3 border-b">
                <h2 className="text-black font-semibold text-xl">
                  Log in to continute{" "}
                </h2>
                <span>
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>{" "}
              <img
                className="rotate-12 w-14 h-14 ml-5 mb-5"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt=""
              />
              <span>
                We're a place where coders share, stay up to date and grow their
                careers.
              </span>
              <Link to={"/login"}>
                <Button
                  color="ghost"
                  className="w-full max-w-[450px] bg-primary  hover:bg-primary text-white hover:text-white border-2 mt-3"
                >
                  Login
                </Button>
              </Link>
              <Link to={"signup"}>
                <Button
                  className="w-full max-w-[450px]  text-primary outline-none  font-semibold mt-3"
                  variant="outline"
                >
                  Create account
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
