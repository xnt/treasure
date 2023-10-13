"use client";

import { motion } from "framer-motion";

interface PunkImageProps {
  src: string;
}

const PunkImage = ({ src }: PunkImageProps) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <svg dangerouslySetInnerHTML={{ __html: src }} />
      </motion.div>
    </div>
  );
};

export default PunkImage;
