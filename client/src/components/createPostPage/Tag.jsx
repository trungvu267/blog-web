import { FiX } from "react-icons/fi";
import { Button } from "react-daisyui";
const Tag = ({ color }) => {
  return (
    <div className={`border-2 p-1 rounded-md border-[${color}]`}>
      #Tag{" "}
      <Button className="bg-transparent border-none hover:bg-primary" size="xs">
        <FiX />
      </Button>
    </div>
  );
};

export default Tag;
