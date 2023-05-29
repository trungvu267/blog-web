import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { listPostAtom } from "../states/post.state";
import { createBlog } from "../api/post.api";
const usePost = () => {
  // TODO: Add caching
  const [listPost, setListPost] = useAtom(listPostAtom);
  const { isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: createBlog,
    onSuccess: (res) => {
      setListPost(res.data);
    },
  });
  return { isLoading, error, listPost };
};

export default usePost;
