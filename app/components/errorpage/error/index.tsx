import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Error = () => {
  const controls = useAnimation();

  const initialVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 0.5 },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="min-h-screen flex items-center justify-center px-2 md:px-8 bg-gray-900">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={initialVariant}
        className="text-center w-full"
      >
        <h1 className="text-4xl md:text-8xl font-bold">
          Nothing to see here... Yet
        </h1>
      </motion.div>
    </div>
  );
};

export default Error;
