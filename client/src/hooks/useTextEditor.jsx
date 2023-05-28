import { reject } from "lodash";
import { useMutation } from "react-query";
import { useCallback } from "react";
import {
  titleArticleAtom,
  contentArticleAtom,
  tagsArticleAtom,
  isVisibleAtom,
  toolTipEditorAtom,
} from "../states/textEditor";
import { useAtom } from "jotai";
import { errorToast } from "../utils/toast";
import { createBlog } from "../api/post.api";

const postHelper = {
  title:
    " Đây là tiêu đề của bài post của bạn. Nó cần phải ngắn gọn, súc tích và phản ánh chính xác nội dung của bài viết.",
  tag: "Đây là nơi chọn các tag giúp người đọc dễ dàng tiếp cận hơn bài post của bạn",
  textEditor:
    "Đây là nơi bạn có thể viết nội dung chính của bài post của mình. Bạn có thể sử dụng các công cụ của text editor để tạo ra các định dạng văn bản khác nhau, thêm hình ảnh, video và các liên kết liên quan đến bài viết. Bạn cũng có thể sử dụng các chức năng của text editor để chỉnh sửa văn bản, thêm các danh sách và các đoạn trích dẫn.",
};
const useTextEditor = () => {
  const [title, setTitle] = useAtom(titleArticleAtom);
  const [content, setContent] = useAtom(contentArticleAtom);
  const [listTagArticle, setListTagArticle] = useAtom(tagsArticleAtom);
  // TODO: ADD image link
  const [toolTipEditor, setToolTipEditor] = useAtom(toolTipEditorAtom);
  const [isVisible, setIsVisible] = useAtom(isVisibleAtom);
  const mutation = useMutation(createBlog, {
    mutationKey: "blogs/create",
  });
  const handleToolTipEditor = (tooltip) => {
    setToolTipEditor(tooltip);
  };
  const handleSetContentArticle = (content) => {
    setContent(content);
  };
  const handleSetTitleArticle = (title) => {
    setTitle(title);
  };
  const handleAddTags = (selectedTag) => {
    const matchTag = listTagArticle.find((tag) => tag._id === selectedTag._id);
    if (listTagArticle.length === 4) {
      errorToast("Số lượng tag trong bài viết đã giới hạn");
      return;
    }
    if (matchTag) {
      errorToast("tag này đã được chọn cho bài viết của bạn");
      return;
    }
    setListTagArticle((preTags) => [...preTags, selectedTag]);
  };
  const handleRemoveTag = (selectedTag) => {
    setListTagArticle((preTags) => {
      return reject(preTags, (tag) => tag._id === selectedTag._id);
    });
  };
  const handleCreateBlog = useCallback(
    (data) => {
      mutation.mutate(data);
    },
    [mutation]
  );
  return {
    toolTipEditor,
    postHelper,
    isVisible,
    title,
    content,
    listTagArticle,
    handleToolTipEditor,
    setIsVisible,
    handleSetTitleArticle,
    handleSetContentArticle,
    handleRemoveTag,
    handleAddTags,
    handleCreateBlog,
    mutation,
  };
};

export default useTextEditor;
