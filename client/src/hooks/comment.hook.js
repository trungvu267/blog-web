import { useMutation, useQuery } from "react-query";
import { createComment, getListComment } from "../api/comment.api";
import { useCallback } from "react";

export const useCreateComment = (refetch) => {
  const mutation = useMutation(createComment, {
    mutationKey: "comments",
  });

  const handleCreateComment = useCallback(
    (data) => {
      mutation.mutate(data, {
        onSuccess: () => {
          refetch();
        },
      });
    },
    [mutation]
  );
  return { mutation, handleCreateComment };
};
export const useListComment = (blogId) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["list-comment"],
    queryFn: () => getListComment(blogId),
  });
  return { listComment: data?.data, isLoading, refetch };
};
