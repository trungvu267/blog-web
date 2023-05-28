import { AnimatePresence } from "framer-motion";
import { Presence } from "../motions";
import useTextEditor from "../../hooks/useTextEditor";
const Tooltips = () => {
  const { toolTipEditor, postHelper } = useTextEditor();
  return (
    <div className="grid grid-rows-6 h-full">
      {/* <AnimatePresence> */}
      <div className="row-span-1 ml-4">
        <Presence isVisible={"title"}>
          {toolTipEditor === "title" && postHelper.title}
        </Presence>
      </div>
      <div className="row-span-2 ml-4">
        <Presence isVisible={"tag"}>
          {toolTipEditor === "tag" && postHelper.tag}
        </Presence>
      </div>
      <div className="row-span-3 ml-4">
        <Presence isVisible={"textEditor"}>
          {toolTipEditor === "textEditor" && postHelper.textEditor}
        </Presence>
      </div>
      {/* </AnimatePresence> */}
    </div>
  );
};
export default Tooltips;
