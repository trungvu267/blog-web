import { Logo } from "../components/common";
import { Button, Tabs, Menu, Breadcrumbs, Input } from "react-daisyui";
import { FiX } from "react-icons/fi";
import { TextEditor, ConfirmModal } from "../components";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const handleAccess = () => {
    navigate("/");
  };
  // TODO: Thêm tooltip
  // TODO: Xử lý logic phần Edit và preview
  return (
    <div className="max-w-5xl mx-auto mt-2 grid grid-cols-3">
      <div className="col-span-3 flex justify-between items-center mb-4">
        <Logo />
        <div className="ml-6 mr-auto">Tạo bài viết mới</div>
        <CustomTabs />
        <ConfirmModal
          color="ghost"
          textHeader={"Bạn muốm quay lại trang chủ"}
          handleAccess={handleAccess}
        >
          <FiX />
        </ConfirmModal>
      </div>
      <div className="col-span-2">
        <div
          className="overflow-y-scroll rounded-md space-y-2"
          style={{ height: " 80vh", backgroundColor: "#252525" }}
        >
          <Button variant="outline" size="sm" className="my-4 mx-8">
            Thêm ảnh chủ đề bài viết
          </Button>

          <Input
            placeholder="Title"
            border="false"
            size="lg"
            color="primary"
            className="w-full bg-transparent focus:outline-none active:bg-transparent padding-0 margin-0 text-6xl border-none"
          />
          <div className="mt-4 mx-8">List tag</div>
          <TextEditor />
        </div>
        <div className="space-x-2 flex mt-2">
          <ConfirmModal color="primary" textHeader={"Xác nhận đăng bài viết"}>
            Đăng tải
          </ConfirmModal>
          <ConfirmModal
            color="error"
            variant="outline"
            textHeader={"Xác nhận xóa bài viết"}
          >
            Xóa
          </ConfirmModal>
        </div>
      </div>
      <div className="col-span-1">2</div>
    </div>
  );
};

export default CreatePost;

const CustomTabs = () => {
  return (
    <div className="mr-auto space-x-2">
      <Button variant="outline" size="sm">
        Edit
      </Button>
      <Button variant="outline" size="sm">
        Preview
      </Button>
    </div>
  );
};
