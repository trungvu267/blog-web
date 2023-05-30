import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { listPostAtom } from "../states/post.state";
import { getAllBlog } from "../api/post.api";
import { getDetails, getPublishedBlogs } from "../api/post.api";
const usePost = () => {
  // TODO: Add caching
  const [listPost, setListPost] = useAtom(listPostAtom);
  const { isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlog,
    onSuccess: (res) => {
      setListPost(res.data);
    },
  });
  return { isLoading, error, listPost };
};

export default usePost;

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
