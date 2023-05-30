import { useMutation } from "react-query";
import { createComment } from "../api/comment.api";
import { useCallback } from "react";

const useComment = () => {
  const mutation = useMutation(createComment, {
    mutationKey: "comments",
  });

  const handleCreateBlog = useCallback(
    (data) => {
      console.log(data);
      mutation.mutate(data);
    },
    [mutation]
  );
  return { mutation, handleCreateBlog };
};
export default useComment;
