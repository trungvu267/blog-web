import Tag from "./Tag";
import { useTag } from "../../hooks/tag.hook";
import { TagSkeleton } from "../Skeleton";
const ListTag = () => {
  const { listTag, isLoading } = useTag();
  if (isLoading) return <ListTagSkeleton />;
  return (
    <div className="grid grid-cols-3 gap-10 mt-5">
      {listTag.map((tag) => (
        <Tag key={tag.id} data={tag} />
      ))}
    </div>
  );
};

export default ListTag;

const ListTagSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-10 mt-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <TagSkeleton key={index} />
      ))}
    </div>
  );
};
