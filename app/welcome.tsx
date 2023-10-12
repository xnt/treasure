"use client";

import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.h1
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cryptopunks Explorer
      </motion.h1>
      <motion.button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Connect Web3 Wallet
      </motion.button>
      <p className="mt-4 text-gray-600">OR</p>
      <motion.div
        className="flex flex-col items-center mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <input
          type="text"
          placeholder="Enter Wallet Address"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none">
          Search Inventory
        </button>
      </motion.div>
    </div>
  );
};

export default Welcome;
