import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import { usePost, useUpdatePost } from "../../hooks/post.hook";
const ViewListPost = () => {
  const { listPost } = usePost();
  return (
    <div className="p-12 space-y-4 h-[80vh] overflow-y-scroll">
      {listPost.length > 0 &&
        listPost.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default ViewListPost;

const Post = ({ post }) => {
  const navigate = useNavigate();

  const { mutation, handleUpdateBlog } = useUpdatePost({
    blogId: post._id,
    published: !post.published,
  });
  return (
    <div className="flex flex-row space-x-2 bg-base-300 items-center p-2 rounded-sm hover:bg-base-100">
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          navigate(`../posts/${post._id}`);
        }}
      >
        {post.title}
      </div>
      <div>
        Tác giả: <span className="font-bold">{post.author.name}</span>
      </div>
      <ConfirmModal
        textHeader={"Xác nhận chỉnh sửa trạng thái bài viết"}
        color={post.published ? "success" : "warning"}
        variant="outline"
        handleAccess={handleUpdateBlog}
        isLoading={mutation.isLoading}
        isSuccess={mutation.isSuccess}
      >
        {post.published ? "Xuất bản" : "Chờ duyệt"}
      </ConfirmModal>
    </div>
  );
};
