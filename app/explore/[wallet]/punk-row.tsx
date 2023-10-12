"use client";

import { motion } from "framer-motion";

interface PunkRowProps {
  tokenId: string;
}

/**
 * A row in the punks table
 */
const PunkRow = ({ tokenId }: PunkRowProps) => {
  return (
    <motion.tr
      key={tokenId}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <td>{tokenId}</td>
      <td>
        <a
          href={`/details/${tokenId}`}
          className="text-blue-500 hover:underline"
        >
          Explore
        </a>
      </td>
    </motion.tr>
  );
};

export default PunkRow;
