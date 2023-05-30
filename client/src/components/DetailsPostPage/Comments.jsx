import { Button } from "react-daisyui";
import { ImageComment } from "./ImageComment";
import { Comment } from "./Comment";
import { useCreateComment, useListComment } from "../../hooks/comment.hook";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isEmpty } from "lodash";

const schema = yup.object({
  content: yup.string().required("Chưa nhập comment"),
});

const Comments = () => {
  const { postId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { refetch } = useListComment(postId);
  const { handleCreateComment } = useCreateComment(refetch);

  return (
    <div className="bg-base-100 border p-5 mb-10">
      <div className="flex justify-between text-center mb-10">
        <h2 className="text-3xl font-bold ">Bình luận</h2>

        <Button color="ghost" className="border bg-base-300">
          Subscribe
        </Button>
      </div>
      <div className="flex space-x-5 mb-10">
        <ImageComment></ImageComment>
        <form
          onSubmit={handleSubmit((data) =>
            handleCreateComment({ ...data, blogId: postId })
          )}
          className="flex flex-col flex-1"
        >
          <textarea
            placeholder="Add to the discussion"
            className="w-full h-[100px] border rounded-lg p-3 mb-5"
            name=""
            id=""
            {...register("content")}
            cols="30"
            rows="10"
          ></textarea>

          <div className="flex gap-5">
            <Button
              color="ghost"
              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
            >
              Bình luận
            </Button>
          </div>
        </form>
      </div>
      <ListComment />
    </div>
  );
};

export default Comments;

const ListComment = () => {
  const { postId } = useParams();
  const { listComment, isLoading } = useListComment(postId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {!isEmpty(listComment) &&
        listComment.map((comment) => <Comment comment={comment} />)}
    </>
  );
};
