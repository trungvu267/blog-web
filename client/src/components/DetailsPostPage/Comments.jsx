import { Button } from "react-daisyui";
import { ImageComment } from "./ImageComment";
import { Comment } from "./Comment";
import useComment from "../../hooks/comment.hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  comment: yup.string().required("Chưa nhập comment"),
});

const Comments = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { handleCreateBlog } = useComment();
  console.log(errors.comment);
  return (
    <div className="bg-slate-50 border p-5 mb-10">
      <div className="flex justify-between text-center mb-10">
        <h2 className="text-3xl font-bold text-black">Bình luận</h2>

        <Button color="ghost" className="border bg-slate-300">
          Subscribe
        </Button>
      </div>
      <div className="flex space-x-5 mb-10">
        <ImageComment></ImageComment>
        <form
          onSubmit={handleSubmit(handleCreateBlog)}
          className="flex flex-col flex-1"
        >
          <textarea
            placeholder="Add to the discussion"
            className="w-full h-[100px] border rounded-lg p-3 mb-5"
            name=""
            id=""
            {...register("comment")}
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

      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
