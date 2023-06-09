import { useQuery, useMutation } from "react-query";
import { useCallback } from "react";
import { useAtom } from "jotai";
import {
  setBookmark,
  getListBookmark,
  getListBookmarkDetails,
} from "../api/bookmark.api";
import { listBookmarkAtom } from "../states/bookmark.state";
import { successToast } from "../utils/toast";
import { find } from "lodash";
import { useAuth } from "./auth.hook";
export const useListBookmark = () => {
  const [listBookmark, setListBookmark] = useAtom(listBookmarkAtom);
  const { auth } = useAuth();
  console.log(!!auth);

  const { isLoading, error } = useQuery({
    queryKey: ["/bookmark"],
    queryFn: getListBookmark,
    onSuccess: (res) => {
      setListBookmark(res.data.bookmark);
    },
    enabled: !!auth,
  });
  return { listBookmark, isLoading, error };
};
export const useListBookmarkDetails = () => {
  const { auth } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["/bookmark/details"],
    queryFn: getListBookmarkDetails,
    enabled: !!auth,
  });
  return { listBookmarkDetails: data?.data?.bookmark, isLoading, error };
};

export const useSetBookmark = (id) => {
  const [listBookmark, setListBookmark] = useAtom(listBookmarkAtom);

  const mutation = useMutation({
    mutationKey: ["/bookmark"],
    mutationFn: setBookmark,
    onSuccess: (res) => {
      const newBookmark = res.data.bookmark;
      const matchBookmark = find(
        listBookmark,
        (bookmark) => bookmark.blog === newBookmark.blog
      );
      if (matchBookmark) {
        setListBookmark((prevBookmarks) =>
          prevBookmarks.map((bookmark) =>
            bookmark.blog === newBookmark.blog
              ? { ...bookmark, ...newBookmark }
              : bookmark
          )
        );
      } else {
        setListBookmark((prevBookmarks) => [...prevBookmarks, newBookmark]);
      }
      successToast("Cập nhật bookmark thành công");
    },
  });
  const handleSetBookmark = useCallback(() => {
    mutation.mutate(id);
  }, [mutation]);
  return {
    mutation,
    handleSetBookmark,
  };
};
