import { FiX } from "react-icons/fi";
import { Button } from "react-daisyui";
import useTextEditor from "../../hooks/useTextEditor";
import useSelectedPostVariant from "../../hooks/useSelectedPostVariant";
const Tag = ({ tag }) => {
  const { handleRemoveTag } = useTextEditor();
  const { selectedPostVariant } = useSelectedPostVariant();
  return (
    <div
      className={` border-2 p-1 rounded-md`}
      style={{
        borderColor: tag?.bg_color,
        color: tag?.bg_color,
      }}
    >
      #{tag?.name}
      {selectedPostVariant === "edit" && (
        <Button
          className="bg-transparent border-none hover:bg-primary"
          size="xs"
          onClick={() => handleRemoveTag(tag)}
        >
          <FiX />
        </Button>
      )}
    </div>
  );
};

export default Tag;
