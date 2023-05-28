import { Button, Input } from "react-daisyui";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { Logo, ToggleThemeBtn, HtmlConverter } from "../components/common";
import { ConfirmModal } from "../components";
import {
  TextEditor,
  Tag,
  CustomTabs,
  SelectTag,
  Tooltips,
} from "../components/createPostPage";
import useTextEditor from "../hooks/useTextEditor";
import useSelectedPostVariant from "../hooks/useSelectedPostVariant";
const CreatePost = () => {
  const navigate = useNavigate();
  const handleAccess = () => {
    navigate("/");
  };
  const { selectedPostVariant } = useSelectedPostVariant();
  return (
    <>
      <div className="bg-primary">
        <div className="max-w-5xl mx-auto col-span-3 flex justify-between items-center mb-4 py-2 ">
          <Logo />
          <div className="ml-6 mr-auto">Tạo bài viết mới</div>
          <ToggleThemeBtn />
          <CustomTabs />
          <ConfirmModal
            color="ghost"
            textHeader={"Bạn muốm quay lại trang chủ"}
            handleAccess={handleAccess}
          >
            <FiX />
          </ConfirmModal>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-2 grid grid-cols-3">
        {selectedPostVariant === "edit" ? <EditVariant /> : <PreviewVariant />}
      </div>
    </>
  );
};

export default CreatePost;

const EditVariant = () => {
  const {
    title,
    listTagArticle,
    handleSetTitleArticle,
    handleToolTipEditor,
    setIsVisible,
  } = useTextEditor();

  return (
    <>
      <div className="col-span-2">
        <div
          className="overflow-y-scroll rounded-md space-y-1 bg-base-200"
          style={{ height: " 80vh" }}
        >
          <Button
            variant="outline"
            size="sm"
            className="my-4 mx-8"
            color="primary"
          >
            Thêm ảnh chủ đề bài viết
          </Button>
          <Input
            placeholder="Title"
            border="false"
            size="lg"
            color="primary"
            className="w-full bg-transparent focus:outline-none active:bg-transparent padding-0 margin-0 text-5xl border-none"
            value={title}
            onChange={(e) => handleSetTitleArticle(e.target.value)}
            onClick={() => {
              setIsVisible("title");
              handleToolTipEditor("title");
            }}
          />
          <div
            className="mt-4 mx-8 py-2 flex space-x-2 items-center flex-wrap"
            onClick={() => {
              setIsVisible("tag");

              handleToolTipEditor("tag");
            }}
          >
            {!isEmpty(listTagArticle) &&
              listTagArticle.map((tag) => <Tag tag={tag} key={tag._id} />)}
            <SelectTag />
          </div>
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
      <div className="col-span-1">
        <Tooltips />
      </div>
    </>
  );
};

const PreviewVariant = () => {
  const { title, listTagArticle, content } = useTextEditor();
  console.log(content);
  return (
    <div className="min-h-[90vh]">
      <div className="bg-base-200 w-[700px] min-h-[500px] rounded-md p-8">
        <h1 className="text-6xl font-bold">{title}</h1>
        <div
          className="mt-4 py-2 flex space-x-2 items-center flex-wrap "
          onClick={() => {
            setIsVisible("tag");

            handleToolTipEditor("tag");
          }}
        >
          {!isEmpty(listTagArticle) &&
            listTagArticle.map((tag) => <Tag tag={tag} key={tag._id} />)}
        </div>
        <HtmlConverter htmlString={content} />
      </div>
    </div>
  );
};
