import { useAtom } from "jotai";
import { listTagAtom } from "../states/tag.state";
import { useMutation, useQuery } from "react-query";
import { createTag, getListTag } from "../api/tag.api";
import { useCallback, useMemo } from "react";
const useTag = () => {
  // TODO: Add caching
  const [listTag, setListTag] = useAtom(listTagAtom);
  const { isLoading, error } = useQuery({
    queryKey: ["tags"],
    queryFn: getListTag,
    onSuccess: (res) => {
      setListTag(res.data);
    },
  });
  return { isLoading, error, listTag };
};
export const useCreateTag = () => {
  const [, setListTag] = useAtom(listTagAtom);

  const mutation = useMutation(createTag, {
    mutationKey: "tags",
  });
  useMemo(() => {
    setListTag(mutation.data ?? {});
  }, [mutation.data]);
  const handleCreateTag = useCallback(
    ({ name, text_color, bg_color }) => {
      mutation.mutate({ name, text_color, bg_color });
    },
    [mutation]
  );
  return { mutation, handleCreateTag };
};

export default useTag;
