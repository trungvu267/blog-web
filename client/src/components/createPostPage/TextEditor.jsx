import ReactQuill from "react-quill";
import { useAtom } from "jotai";
import { textEditorAtom } from "../../states/textEditor";
import useTextEditor from "../../hooks/useTextEditor";
import "../../styles/editor.css";
import { darkThemeAtom } from "../../states/theme";
const TextEditor = () => {
  const [editorState, setEditorState] = useAtom(textEditorAtom);
  const { handleToolTipEditor } = useTextEditor();
  const [isDarkTheme] = useAtom(darkThemeAtom);
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
  return (
    <div onClick={() => handleToolTipEditor("textEditor")}>
      <ReactQuill
        theme="snow"
        value={editorState}
        onChange={setEditorState}
        modules={modules}
        className={`custom-quill-editor ${
          isDarkTheme ? "dark-mode" : "light-mode"
        }`}
      />
    </div>
  );
};

export default TextEditor;
