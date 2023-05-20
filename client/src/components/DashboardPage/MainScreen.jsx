import React from "react";
import { Button } from "react-daisyui";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className="flex-1">
      <h2 className="text-5xl font-bold text-primary my-2">Post</h2>
      <div className="post bg-base-300 w-full relative rounded-lg h-[600px] flex text-center flex-col justify-center p-9">
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
          <Button color="primary" className="absolute bottom-10 left-96 ">
            Write your first post now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainScreen;
