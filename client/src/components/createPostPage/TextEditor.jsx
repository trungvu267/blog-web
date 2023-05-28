import ReactQuill from "react-quill";
import { useAtom } from "jotai";
import useTextEditor from "../../hooks/useTextEditor";
import "../../styles/editor.css";
import { darkThemeAtom } from "../../states/theme";
const modules = {
  toolbar: {
    container: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, false] }],
      [{ font: [] }],
    ],
  },
};
const TextEditor = () => {
  const { content, handleToolTipEditor, handleSetContentArticle } =
    useTextEditor();
  const [isDarkTheme] = useAtom(darkThemeAtom);
  return (
    <div onClick={() => handleToolTipEditor("textEditor")}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleSetContentArticle}
        modules={modules}
        className={`custom-quill-editor ${
          isDarkTheme ? "dark-mode" : "light-mode"
        }`}
      />
    </div>
  );
};

export default TextEditor;
