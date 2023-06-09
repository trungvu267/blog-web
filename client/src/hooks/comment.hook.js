import { useMutation, useQuery, useQueryClient } from "react-query";
import { useAtom } from "jotai";
import { createComment, getListComment } from "../api/comment.api";
import { useCallback } from "react";
import { QUERY_KEYS } from "../utils/queryKeys";
import { listCommentAtom } from "../states/comment.state";
import socket from "../services/socket.service";
export const useCreateComment = (postId) => {
  const mutation = useMutation(createComment, {
    mutationKey: "comments",
  });
  const [, setListComment] = useAtom(listCommentAtom);
  const client = useQueryClient();
  const handleCreateComment = useCallback(
    (data) => {
      mutation.mutate(data, {
        onSuccess: (res) => {
          console.log("run");
          const data = res.data.comment;
          setListComment((preListComment) => [data, ...preListComment]);

          socket.on("newComment", (data) => {
            console.log(data);
            // setListComment((preListComment) => [data, ...preListComment]);
          });
          // client.invalidateQueries(QUERY_KEYS.comments);
        },
      });
    },
    [mutation]
  );
  return { mutation, handleCreateComment };
};
export const useListComment = (blogId) => {
  const [listComment, setListComment] = useAtom(listCommentAtom);
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.comments],
    queryFn: () => getListComment(blogId),
    onSuccess: (data) => {
      setListComment(data?.data);
    },
  });
  return { listComment, isLoading };
};
