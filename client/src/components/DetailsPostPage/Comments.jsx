import { Button } from "react-daisyui";
import { ImageComment } from "./ImageComment";
import { Comment } from "./Comment";

const Comments = () => {
  return (
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
  );
};

export default Comments;
