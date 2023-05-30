import { Button, Input } from "react-daisyui";
import { Layout } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { useListBookmarkDetails } from "../hooks/bookmark.hook";
const ReadingListPage = () => {
  const { listBookmarkDetails } = useListBookmarkDetails();
  return (
    <Layout>
      <div className="container min-h-full">
        <div className="flex justify-between text-center mt-5">
          <h2 className="text-3xl font-bold ">
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
              <div className="w-full bg-base-300 p-3 rounded-lg">All tags</div>
            </Link>
          </div>
          <div className="flex-1">
            <div className=" text-center rounded-lg h-[400px] bg-base-300 space-y-3 p-2">
              {isEmpty(listBookmarkDetails) ? (
                <ListBookmarkEmpty />
              ) : (
                <ListBookmarkDetails />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReadingListPage;

const ListBookmarkEmpty = () => {
  return (
    <div className="text-xl font-bold mb-2 py-32">
      Chưa có bài viết nào được lưu
    </div>
  );
};
const Bookmark = ({ bookmark }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-base-100 grid grid-cols-6 items-center p-4 cursor-pointer hover:bg-base-200"
      onClick={() => {
        navigate(`../posts/${bookmark.blog._id}`);
      }}
    >
      <div className="col-span-4 text-left">{bookmark?.blog?.title}</div>
      <div className="col-span-2">
        Tác giả: <span className="font-bold">{bookmark?.author?.name}</span>
      </div>
    </div>
  );
};
const ListBookmarkDetails = () => {
  const { listBookmarkDetails, isLoading } = useListBookmarkDetails();
  if (isLoading) return <div>Loading...</div>;
  return listBookmarkDetails.map((bookmark) => (
    <Bookmark bookmark={bookmark} />
  ));
};
