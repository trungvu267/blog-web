import { Button, Input, Link } from "react-daisyui";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { isEmpty, map } from "lodash";
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
import { useEffect } from "react";
import { FileInput } from "react-daisyui";
import { motion } from "framer-motion";
import { useUploadTitleImage } from "../hooks/post.hook";
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
    content,
    listTagArticle,
    handleSetTitleArticle,
    handleToolTipEditor,
    setIsVisible,
    handleCreateBlog,
    mutation,
  } = useTextEditor();
  const { titleImageLink, resetImage } = useUploadTitleImage();
  const navigation = useNavigate();
  const handleAccess = () => {
    const listTagArticleId = map(listTagArticle, "_id");
    handleCreateBlog({
      title,
      content,
      tags: listTagArticleId,
      imageLink: titleImageLink || undefined,
    });
    resetImage();
  };

  // TODO: REDIRECT TO DASHBOARD
  useEffect(() => {
    mutation.isSuccess && navigation("/");
  }, [mutation.isSuccess]);
  return (
    <>
      <div className="col-span-2">
        <div
          className="overflow-y-scroll rounded-md space-y-1 bg-base-200"
          style={{ height: " 80vh" }}
        >
          <div className="my-4 mx-8">
            <label htmlFor="imageTitleUpLoad" className="label">
              Thêm ảnh chủ đề bài viết
            </label>
            <UpLoadImage />
          </div>
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
          <ConfirmModal
            color="primary"
            textHeader={"Xác nhận đăng bài viết"}
            handleAccess={handleAccess}
            isLoading={mutation.isLoading}
            isSuccess={mutation.isSuccess}
          >
            Đăng tải
          </ConfirmModal>
          <ConfirmModal
            color="error"
            variant="outline"
            textHeader={"Xác nhận xóa bài viết"}
            handleAccess={resetImage}
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
  const { titleImageLink } = useUploadTitleImage();
  return (
    <div className="min-h-[90vh]">
      <div className="bg-base-200 w-[700px] min-h-[500px] rounded-md p-8">
        <img src={titleImageLink} alt="" />
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

const UpLoadImage = () => {
  const { titleImageLink, mutation, handleUploadTitleImage } =
    useUploadTitleImage();
  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    console.log(formData.get("image"));
    handleUploadTitleImage(formData);
  };
  if (mutation.isLoading)
    return (
      <motion.div
        initial={{ y: "50%" }}
        animate={{ y: "0" }}
        transition={{
          duration: 0.25,
        }}
      >
        <Button loading className="w-full" size="sm" color="primary" />
      </motion.div>
    );
  if (mutation.isSuccess || titleImageLink)
    return (
      <motion.div
        initial={{ y: "50%" }}
        animate={{ y: "0" }}
        transition={{
          duration: 0.25,
        }}
      >
        <Link>
          <span>{titleImageLink}</span>
        </Link>
      </motion.div>
    );
  return (
    <FileInput
      color="primary"
      id="imageTitleUpLoad"
      name="image" // Add the name attribute
      accept="image/*"
      size="sm"
      className="w-30"
      onChange={handleFileUpload}
    />
  );
};
