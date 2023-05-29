import { Button } from "react-daisyui";
import ConfirmModal from "../ConfirmModal";
const ViewListPost = () => {
  return (
    <div className="p-12 space-y-4 h-[80vh] overflow-y-scroll">
      <Post
        post={{ title: "test", published: false, author: { name: "trung vu" } }}
      />
      <Post
        post={{ title: "test", published: true, author: { name: "trung vu" } }}
      />
    </div>
  );
};

export default ViewListPost;

const Post = ({ post }) => {
  return (
    <div className="flex flex-row space-x-2 bg-base-300 items-center p-2 rounded-sm">
      <div className="flex-1">{post.title}</div>
      <div>
        Tác giả: <span className="font-bold">{post.author.name}</span>
      </div>
      <ConfirmModal
        textHeader={"Xác nhận xóa bài viết"}
        color={post.published ? "success" : "warning"}
        variant="outline"
      >
        {post.published ? "Xuất bản" : "Chờ duyệt"}
      </ConfirmModal>
      <ConfirmModal
        textHeader={"Xác nhận đổi trạng thái bài viết"}
        color="error"
        variant="outline"
      >
        Xóa
      </ConfirmModal>
    </div>
  );
};
