import { useAtom } from "jotai";
import { useQuery, useMutation } from "react-query";
import { listPostAtom } from "../states/post.state";
import {
  getAllBlog,
  getDetails,
  getPublishedBlogs,
  updateBlog,
} from "../api/post.api";
import { successToast } from "../utils/toast";
export const usePost = () => {
  // TODO: Add caching
  const [listPost, setListPost] = useAtom(listPostAtom);
  const { isLoading, error, refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlog,
    onSuccess: (res) => {
      setListPost(res.data);
    },
  });
  return { isLoading, error, listPost, refetch };
};

export const useUpdatePost = (data, refetch) => {
  const mutation = useMutation(updateBlog, {
    mutationKey: [`blogs/${data.blogId}`],
  });
  const handleUpdateBlog = () => {
    mutation.mutate(data, {
      onSuccess: () => {
        refetch();
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
