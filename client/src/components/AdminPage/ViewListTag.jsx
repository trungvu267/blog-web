import { Button } from "react-daisyui";
import ConfirmModal from "../ConfirmModal";
const ViewListTag = () => {
  return (
    <div className="p-12 space-y-4 h-[80vh] overflow-y-scroll">
      <Tag tag={{ name: "test" }} />
    </div>
  );
};

export default ViewListTag;

const Tag = ({ tag }) => {
  return (
    <div className="flex flex-row space-x-2 bg-base-300 items-center p-2 rounded-sm">
      <div className="flex-1">{tag.name}</div>
      <Button color="primary">Sửa</Button>
      <ConfirmModal
        textHeader={"Xác nhận xóa bài viết"}
        color="error"
        variant="outline"
      >
        Xóa
      </ConfirmModal>
    </div>
  );
};
