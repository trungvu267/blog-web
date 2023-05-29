import { Button } from "react-daisyui";
import Auth from "../HomePage/Auth";
import { Information } from "./Information";

const AuthorPost = () => {
  return (
    <div className="p-5 border bg-slate-50 mt-5 rounded-lg">
      <Auth></Auth>
      {/* <Button
        color="ghost"
        className=" text-white bg-blue-600 hover:bg-blue-700 w-full mb-3"
      >
        Follow
      </Button> */}
      <span>I'm a tech expert passionate by everything I don't know yet.</span>
      <Information title={"EDUCATION"} desc={"Nowhere"}></Information>
      <Information title={"EDUCATION"} desc={"Nowhere"}></Information>
      <Information title={"EDUCATION"} desc={"Nowhere"}></Information>
    </div>
  );
};

export default AuthorPost;
