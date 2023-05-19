import { Button } from "react-daisyui";
import useSelectedPostVariant from "../../hooks/useSelectedPostVariant";
const CustomTabs = () => {
  const { selectedPostVariant, setEditVariant, setPreviewVariant } =
    useSelectedPostVariant();
  return (
    <div className="mr-auto space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={setEditVariant}
        color={selectedPostVariant === "edit" && "primary"}
      >
        Edit
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={setPreviewVariant}
        color={selectedPostVariant === "preview" && "primary"}
      >
        Preview
      </Button>
    </div>
  );
};
export default CustomTabs;
