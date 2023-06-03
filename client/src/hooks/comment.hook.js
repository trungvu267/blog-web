import { useMutation, useQuery, useQueryClient } from "react-query";
import { createComment, getListComment } from "../api/comment.api";
import { useCallback } from "react";
import { QUERY_KEYS } from "../utils/queryKeys";
export const useCreateComment = () => {
  const mutation = useMutation(createComment, {
    mutationKey: "comments",
  });
  const client = useQueryClient();
  const handleCreateComment = useCallback(
    (data) => {
      mutation.mutate(data, {
        onSuccess: () => {
          client.invalidateQueries(QUERY_KEYS.comments);
        },
      });
    },
    [mutation]
  );
  return { mutation, handleCreateComment };
};
export const useListComment = (blogId) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.comments],
    queryFn: () => getListComment(blogId),
  });
  return { listComment: data?.data, isLoading };
};
