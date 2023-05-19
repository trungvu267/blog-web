import { motion } from "framer-motion";
import useTextEditor from "../../hooks/useTextEditor";
const Presence = ({ isVisible, children, rest }) => {
  const { toolTipEditor } = useTextEditor();
  return (
    isVisible === toolTipEditor && (
      <motion.div
        {...rest}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -30, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
  );
};
export default Presence;
