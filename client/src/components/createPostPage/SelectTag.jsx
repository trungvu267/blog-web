import { Dropdown, Input } from "react-daisyui";
const SelectTag = () => {
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
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default SelectTag;
