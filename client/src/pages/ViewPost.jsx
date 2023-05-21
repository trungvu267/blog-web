import { Button } from "react-daisyui";
import { NavbarBlog } from "../components";
import Auth from "../components/HomePage/Auth";
import TagPost from "../components/HomePage/TagPost";
import { Link } from "react-router-dom";

const ViewPost = () => {
  return (
    <NavbarBlog>
      <div className="container flex gap-x-5 ">
        <div className="flex flex-col w-[5%] text-center  mt-32">
          <div className="text-center mx-auto mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className="text-sm">8</span>
          </div>
          <div className="text-center mx-auto mb-5">
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
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span className="text-sm">8</span>
          </div>
          <div className="text-center mx-auto mb-5">
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
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            <span className="text-sm">8</span>
          </div>
          <div className="text-center mx-auto mb-5">
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
          </div>
        </div>

        <div className="w-[65%] mt-5 ">
          <div className="  bg-slate-50 border  rounded-lg mb-10">
            <div className="w-full h-[350px] rounded-lg ">
              <img
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--FrnIjvQs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u38xf3x32fama9g1klku.png"
                alt=""
              />
            </div>
            <div className=" p-8">
              <Auth></Auth>
              <h2 className=" text-5xl font-bold hover:text-primary mb-7 ">
                Drawing basic 2D shapes on a canvas.
              </h2>
              <div className="mb-10">
                <TagPost />
              </div>
              <div className="text-xl font-normal tracking-wider">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                adipisci sapiente eos repudiandae molestiae soluta obcaecati?
                Beatae iusto soluta reiciendis! Laudantium nisi vitae
                consequuntur officia omnis voluptate repellendus! Ut, veniam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur tempora, consectetur fuga harum totam, hic obcaecati
                repudiandae dolorem laudantium id molestiae labore ea adipisci
                expedita odit soluta eveniet itaque. Dolores.
              </div>
            </div>
          </div>
          <div className="bg-slate-50 border p-5 mb-10">
            <div className="flex justify-between text-center mb-10">
              <h2 className="text-3xl font-bold text-black">Comments</h2>

              <Button color="ghost" className="border bg-slate-300">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-5 mb-10">
              <ImageComment></ImageComment>
              <div className="flex flex-col flex-1">
                <textarea
                  placeholder="Add to the discussion"
                  className="w-full h-[100px] border rounded-lg p-3 mb-5"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="flex gap-5">
                  <Button
                    color="ghost"
                    className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                  >
                    Submit
                  </Button>
                  <Button color="ghost" className="bg-slate-200">
                    {" "}
                    Preview
                  </Button>
                </div>
              </div>
            </div>

            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
          </div>
          <div className="p-12 bg-slate-50 border rounded-lg">
            <h2 className="text-3xl font-bold text-black mb-5">Read next</h2>
            <div>
              <TitleComment></TitleComment>
              <TitleComment></TitleComment>
              <TitleComment></TitleComment>
              <TitleComment></TitleComment>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="p-5 border bg-slate-50 mt-5 rounded-lg">
            <Auth></Auth>
            <Button
              color="ghost"
              className=" text-white bg-blue-600 hover:bg-blue-700 w-full mb-3"
            >
              Follow
            </Button>
            <span>
              I'm a tech expert passionate by everything I don't know yet.
            </span>
            <Information title={"EDUCATION"} desc={"Nowhere"}></Information>
            <Information title={"EDUCATION"} desc={"Nowhere"}></Information>
            <Information title={"EDUCATION"} desc={"Nowhere"}></Information>
          </div>
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
        </div>
      </div>
    </NavbarBlog>
  );
};
export const ImageComment = () => {
  return (
    <img
      className="w-12 h-12 object-cover rounded-full"
      src="https://res.cloudinary.com/practicaldev/image/fetch/s--17qPcy-C--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/598732/5a7a9a98-6297-40de-b265-a9f6baaa4b87.png"
      alt=""
    />
  );
};
export const TitleComment = ({ small }) => {
  if (!small)
    return (
      <div className=" flex p-3 gap-5">
        <img
          className="w-[60px ] h-[60px] rounded-full"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--xuf5tW6V--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png"
          alt=""
        />
        <div>
          <h2 className=" hover:text-primary font-bold  text-xl">
            New in Vue.js 3.3: Two-Way Binding With defineModel Macro Eduard
          </h2>

          <span className=" text-start text-sm text-slate-700 font-semibold">
            Krivanek - <span>May 13</span>
          </span>
        </div>
      </div>
    );
  return (
    <div className=" flex p-3 gap-2">
      <img
        className="w-[30px ] h-[30px] rounded-full"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--xuf5tW6V--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png"
        alt=""
      />
      <div>
        <h2 className=" hover:text-primary font-bold text-base">
          New in Vue.js 3.3: Two-Way Binding With defineModel Macro Eduard
        </h2>

        <TagPost></TagPost>
        <TagPost></TagPost>
        <TagPost></TagPost>
      </div>
    </div>
  );
};

export const Comment = () => {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex space-x-5">
        <ImageComment></ImageComment>
        <div className="flex flex-col gap-y-5 flex-1 mb-5 border rounded-lg p-5">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-slate-700">
              Nikolay Nelidov
            </h2>
            <span className=" cursor-pointer p-1 rounded-lg hover:bg-slate-200">
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
          <div className="text-lg tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ipsa
            ratione magni officia tenetur cum ullam? Rem, quibusdam quae, nam,
            officiis doloremque beatae laborum a excepturi aut harum iure
            cumque?
          </div>
        </div>
      </div>
      <div className="flex gap-1 translate-x-16">
        <Button color="ghost">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          2like
        </Button>
        <Button color="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          Reply
        </Button>
      </div>
    </div>
  );
};
export const Information = ({ title, desc }) => {
  return (
    <div className="flex flex-col mt-3">
      <h2 className=" text-sm font-bold text-slate-800">{title}</h2>
      <span>{desc}</span>
    </div>
  );
};

export default ViewPost;
