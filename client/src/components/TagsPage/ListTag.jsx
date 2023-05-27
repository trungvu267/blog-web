import Tag from "./Tag";
import useTag from "../../hooks/tag.hook";
const ListTag = () => {
  const { listTag, isLoading } = useTag();
  if (isLoading) return <div>...Loading</div>;
  return (
    <div className="grid grid-cols-3 gap-10 mt-5">
      {listTag.map((tag) => (
        <Tag key={tag.id} data={tag} />
      ))}
    </div>
  );
};

export default ListTag;
