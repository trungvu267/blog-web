import { Button } from "react-daisyui";
import ConfirmModal from "../ConfirmModal";
import useTag, { useDeleteTag } from "../../hooks/tag.hook";
const ViewListTag = () => {
  const { listTag } = useTag();
  // if (!listTag || listTag.length < 0) return;
  return (
    <div className="p-12 space-y-4 h-[80vh] overflow-y-scroll">
      {listTag.length > 0 &&
        listTag.map((tag) => <Tag key={tag._id} tag={tag} />)}
    </div>
  );
};

export default ViewListTag;

const Tag = ({ tag }) => {
  const { mutation, handleDeleteTag } = useDeleteTag(tag._id);
  // if (!tag || tag.length < 0) return null;
  console.log(mutation.isSuccess);
  return (
    <div className="flex flex-row space-x-2 bg-base-300 items-center p-2 rounded-sm">
      <div className="flex-1">{tag.name}</div>
      <Button color="primary">Sửa</Button>
      <ConfirmModal
        handleAccess={handleDeleteTag}
        textHeader={"Xác nhận xóa bài viết"}
        color="error"
        variant="outline"
        isSuccess={mutation.isSuccess}
        isLoading={mutation.isLoading}
      >
        Xóa
      </ConfirmModal>
    </div>
  );
};
