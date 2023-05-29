import { useQuery } from "react-query";
import { getDetails, getPublishedBlogs } from "../api/post.api";
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
  console.log(blogId);
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
