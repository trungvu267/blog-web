import { useState } from "react";
import ReactQuill from "react-quill";
import "../styles/editor.css";
const TextEditor = () => {
  const [editorState, setEditorState] = useState("");
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
    <ReactQuill
      theme="snow"
      value={editorState}
      onChange={setEditorState}
      modules={modules}
      className="custom-quill-editor"
    />
  );
};

export default TextEditor;
