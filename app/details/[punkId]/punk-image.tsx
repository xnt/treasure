"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface PunkImageProps {
  tokenId: string;
}

const PunkImage = ({ tokenId }: PunkImageProps) => {
  const formattedTokenId = useMemo(() => tokenId.padStart(4, "0"), [tokenId]);
  return (
    <div className="flex">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img
          className="m-2 mb-4 w-100 h-100 transform hover:rotate-180 transition-transform"
          src={`https://cryptopunks.app/public/images/cryptopunks/punk${formattedTokenId}.png`}
          width={100}
        />
      </motion.div>
    </div>
  );
};

export default PunkImage;
