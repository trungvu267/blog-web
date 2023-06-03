import { useAtom } from "jotai";
import { listTagAtom } from "../states/tag.state";
import { useMutation, useQuery } from "react-query";
import { createTag, deleteTag, getListTag, updateTag } from "../api/tag.api";
import { useCallback, useMemo, useEffect } from "react";
import { successToast } from "../utils/toast";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../utils/queryKeys";
export const useTag = () => {
  // TODO: Add caching
  const [listTag, setListTag] = useAtom(listTagAtom);
  const { isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.tags],
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
export const useUpdateTag = (tagId) => {
  const mutation = useMutation(updateTag, {
    mutationKey: `tags/${tagId}`,
  });
  const client = useQueryClient();
  const handleUpdateTag = useCallback(
    ({ name, text_color, bg_color }) => {
      mutation.mutate(
        { tagId, name, text_color, bg_color },
        {
          onSuccess: () => {
            client.invalidateQueries(QUERY_KEYS.tags);
            successToast("Sửa danh mục thành công");
          },
        }
      );
    },
    [mutation]
  );
  return { mutation, handleUpdateTag };
};
export const useDeleteTag = (tagId) => {
  const mutation = useMutation(deleteTag, {
    mutationKey: "tags",
  });
  const client = useQueryClient();
  const handleDeleteTag = useCallback(() => {
    mutation.mutate(tagId, {
      onSuccess: () => {
        client.invalidateQueries(QUERY_KEYS.tags);
        successToast("Xóa danh mục thành công");
      },
    });
  }, [mutation]);
  return { mutation, handleDeleteTag };
};
