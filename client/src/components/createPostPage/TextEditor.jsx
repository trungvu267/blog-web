import ReactQuill from "react-quill";
import { useAtom } from "jotai";
import { textEditorAtom } from "../../states/textEditor";
import useTextEditor from "../../hooks/useTextEditor";
import "../../styles/editor.css";
const TextEditor = () => {
  const [editorState, setEditorState] = useAtom(textEditorAtom);
  const { handleToolTipEditor } = useTextEditor();
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, false] }],
        [{ font: [] }],
      ],
      styles: {
        background: "red",
      },
    },
  };
  return (
    <div onClick={() => handleToolTipEditor("textEditor")}>
      <ReactQuill
        theme="snow"
        value={editorState}
        onChange={setEditorState}
        modules={modules}
        className="custom-quill-editor"
      />
    </div>
  );
};

export default TextEditor;
