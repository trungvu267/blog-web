import React from "react";
import { motion } from "framer-motion";
import { useDelayRendering } from "../hooks/delayRendering";

const LoadingPage = () => {
  const loading = useDelayRendering({ isLoading: true, delayTime: 1000 });
  return (
    loading && (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        transition={{
          duration: 0.5,
          repeatType: "reverse",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="bg-primary h-screen w-screen overflow-hidden"
      ></motion.div>
    )
  );
};

export default LoadingPage;
