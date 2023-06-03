import { Dropdown, Input } from "react-daisyui";
import { useTag } from "../../hooks/tag.hook";
import useTextEditor from "../../hooks/useTextEditor";
const SelectTag = () => {
  const { listTag } = useTag();
  const { handleAddTags } = useTextEditor();
  // if (!listTag) return;
  return (
    <Dropdown>
      <Dropdown.Toggle className="p-0 m-0 bg-base-200" color="ghost">
        <Input
          placeholder="Thêm tag ..."
          size="sm"
          className="w-24"
          color="primary"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-52 h-52 flex overflow-y-scrolls">
        <ul className="w-52 h-52 overflow-y-scroll">
          {listTag.map((tag) => (
            <Dropdown.Item
              key={tag._id}
              onClick={() => {
                handleAddTags(tag);
              }}
            >
              {tag.name}
            </Dropdown.Item>
          ))}
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default SelectTag;
