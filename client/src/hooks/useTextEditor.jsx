import { isVisibleAtom, toolTipEditorAtom } from "../states/textEditor";
import { useAtom } from "jotai";

const postHelper = {
  title:
    " Đây là tiêu đề của bài post của bạn. Nó cần phải ngắn gọn, súc tích và phản ánh chính xác nội dung của bài viết.",
  tag: "Đây là nơi chọn các tag giúp người đọc dễ dàng tiếp cận hơn bài post của bạn",
  textEditor:
    "Đây là nơi bạn có thể viết nội dung chính của bài post của mình. Bạn có thể sử dụng các công cụ của text editor để tạo ra các định dạng văn bản khác nhau, thêm hình ảnh, video và các liên kết liên quan đến bài viết. Bạn cũng có thể sử dụng các chức năng của text editor để chỉnh sửa văn bản, thêm các danh sách và các đoạn trích dẫn.",
};
const useTextEditor = () => {
  const [toolTipEditor, setToolTipEditor] = useAtom(toolTipEditorAtom);
  const [isVisible, setIsVisible] = useAtom(isVisibleAtom);
  const handleToolTipEditor = (tooltip) => {
    setToolTipEditor(tooltip);
  };
  return {
    toolTipEditor,
    handleToolTipEditor,
    postHelper,
    isVisible,
    setIsVisible,
  };
};

export default useTextEditor;
