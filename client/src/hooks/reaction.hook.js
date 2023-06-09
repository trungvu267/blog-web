import { useQuery, useMutation } from "react-query";
import { useCallback } from "react";
import { useAtom } from "jotai";
import { setReaction, getListReaction } from "../api/reaction.api";
import { listReactionAtom } from "../states/reaction.state";
import { find } from "lodash";
import { useAuth } from "./auth.hook";
export const useListReaction = () => {
  const [listReaction, setListReaction] = useAtom(listReactionAtom);
  const auth = useAuth();
  const { isLoading, error } = useQuery({
    queryKey: ["/reactions"],
    queryFn: getListReaction,
    onSuccess: (res) => {
      setListReaction(res.data.listLiked);
    },
    enabled: !!auth === false,
  });
  return { listReaction, isLoading, error };
};

export const useReaction = (id) => {
  const [listReaction, setListReaction] = useAtom(listReactionAtom);

  const mutation = useMutation({
    mutationKey: ["/reactions"],
    mutationFn: setReaction,
    onSuccess: (res) => {
      const newReaction = res.data.like;
      const matchReaction = find(
        listReaction,
        (bookmark) => bookmark.blog === newReaction.blog
      );
      if (matchReaction) {
        setListReaction((prevListReaction) =>
          prevListReaction.map((reaction) =>
            reaction.blog === newReaction.blog
              ? { ...reaction, ...newReaction }
              : reaction
          )
        );
      } else {
        setListReaction((prevListReaction) => [
          ...prevListReaction,
          newReaction,
        ]);
      }
    },
  });
  const handleSetReaction = useCallback(() => {
    mutation.mutate(id);
  }, [mutation]);
  return {
    mutation,
    handleSetReaction,
  };
};
