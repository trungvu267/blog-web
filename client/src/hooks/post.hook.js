import { useCallback } from "react";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { listPostAtom } from "../states/post.state";
import { titleImageLinkAtom } from "../states/textEditor";
import {
  getAllBlog,
  getDetails,
  getPublishedBlogs,
  updateBlog,
  upLoadTitleImage,
} from "../api/post.api";
import { successToast } from "../utils/toast";
import { QUERY_KEYS } from "../utils/queryKeys";
export const usePost = () => {
  const [listPost, setListPost] = useAtom(listPostAtom);
  const { isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.posts],
    queryFn: getAllBlog,
    onSuccess: (res) => {
      setListPost(res.data);
    },
  });
  return { isLoading, error, listPost };
};

export const useUpdatePost = (data) => {
  const mutation = useMutation(updateBlog, {
    mutationKey: [`blogs/${data.blogId}`],
  });
  const client = useQueryClient();
  const handleUpdateBlog = () => {
    mutation.mutate(data, {
      onSuccess: () => {
        client.invalidateQueries(QUERY_KEYS.posts);
        successToast("Cập nhật bài viết thành công");
      },
    });
  };
  return {
    mutation,
    handleUpdateBlog,
  };
};

export const usePublishPost = () => {
  //   const [listTag, setListTag] = useAtom(listTagAtom);
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs/published"],
    queryFn: getPublishedBlogs,
    // onSuccess: (res) => {
    //   console.log(res.data);
    //   return res.data;
    // },
  });
  return { publishBlogs: data?.data, isLoading, error };
};

export const useDetailPost = (blogId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`blogs/${blogId}`],
    queryFn: () => getDetails(blogId),
    // onSuccess: (res) => {
    //   console.log(res.data);
    //   return res.data;
    // },
  });
  return {
    detailBlog: data?.data?.blog?.details,
    isLoading,
    error,
  };
};

export const useUploadTitleImage = () => {
  const [, setTitleImageLink] = useAtom(titleImageLinkAtom);
  const titleImageLink = JSON.parse(localStorage.getItem("titleImageLink"));

  const mutation = useMutation(upLoadTitleImage, {
    mutationKey: "uploadTitleImage",
    onSuccess: (data) => {
      console.log(data);
      setTitleImageLink(data.data.imageLink);
    },
  });
  const handleUploadTitleImage = useCallback(
    (formData) => {
      mutation.mutate(formData);
    },
    [mutation]
  );
  const resetImage = useCallback(() => {
    setTitleImageLink(RESET);
  }, [mutation]);
  return {
    titleImageLink,
    mutation,
    handleUploadTitleImage,
    resetImage,
  };
};
