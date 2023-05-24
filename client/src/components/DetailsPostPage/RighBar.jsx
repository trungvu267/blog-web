import { Button } from "react-daisyui";
import Auth from "../HomePage/Auth";

const RightBar = () => {
  return (
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
        <SuggestPost small></SuggestPost>
        <SuggestPost small></SuggestPost>
        <SuggestPost small></SuggestPost>
        <SuggestPost small></SuggestPost>
      </div>
    </div>
  );
};

export default RightBar;
