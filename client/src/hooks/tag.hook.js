import { useAtom } from "jotai";
import { listTagAtom } from "../states/tag.state";
import { useQuery } from "react-query";
import { getListTag } from "../api/tag.api";
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

export default useTag;
