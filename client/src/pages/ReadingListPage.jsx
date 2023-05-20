import { Button, Input } from "react-daisyui";
import { NavbarBlog } from "../components";
import { Link } from "react-router-dom";

const ReadingListPage = () => {
  return (
    <NavbarBlog>
      <div className="container">
        <div className="flex justify-between text-center mt-5">
          <h2 className="text-3xl font-bold text-black">
            Reading list <span>(0)</span>
          </h2>
          <div className="gap-5 flex">
            <Button color="ghost">View archive</Button>
            <Input className="w-[200px]" placeholder="Search"></Input>
          </div>
        </div>
        <div className="flex mt-5 gap-5">
          <div className="w-[20%]">
            <Link to={"/"}>
              <div className="w-full bg-slate-100 p-3 rounded-lg">All tags</div>
            </Link>
          </div>
          <div className="flex-1">
            <div className=" text-center py-32 rounded-lg h-[400px] bg-slate-50">
              <div className="text-xl font-bold text-black mb-2">
                Your reading list is empty
              </div>
              <span>
                Click the <b>bookmark reactionwhen</b> viewing a post to add it
                to your reading list.
              </span>
            </div>
          </div>
        </div>
      </div>
    </NavbarBlog>
  );
};

export default ReadingListPage;
