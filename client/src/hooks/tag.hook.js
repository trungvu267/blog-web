import { useAtom } from "jotai";
import { listTagAtom } from "../states/tag.state";
import { useMutation, useQuery } from "react-query";
import { createTag, deleteTag, getListTag, updateTag } from "../api/tag.api";
import { useCallback, useMemo, useEffect } from "react";
import { successToast } from "../utils/toast";
const useTag = () => {
  // TODO: Add caching
  const [listTag, setListTag] = useAtom(listTagAtom);
  const { isLoading, error, refetch } = useQuery({
    queryKey: ["tags"],
    queryFn: getListTag,
    onSuccess: (res) => {
      setListTag(res.data);
    },
  });
  return { isLoading, error, listTag, refetch };
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
export const useUpdateTag = (tagId, refetch) => {
  const mutation = useMutation(updateTag, {
    mutationKey: `tags/${tagId}`,
  });

  const handleUpdateTag = useCallback(
    ({ name, text_color, bg_color }) => {
      mutation.mutate(
        { tagId, name, text_color, bg_color },
        {
          onSuccess: () => {
            refetch();
            successToast("Sửa danh mục thành công");
          },
        }
      );
    },
    [mutation]
  );
  return { mutation, handleUpdateTag };
};
export const useDeleteTag = (tagId, refetch) => {
  const mutation = useMutation(deleteTag, {
    mutationKey: "tags",
  });
  useEffect(() => {
    mutation.isSuccess && successToast("Xóa danh mục thành công");
  }, [mutation.isSuccess]);
  const handleDeleteTag = useCallback(() => {
    mutation.mutate(tagId, {
      onSuccess: () => {
        refetch();
      },
    });
  }, [mutation]);
  return { mutation, handleDeleteTag };
};

export default useTag;
