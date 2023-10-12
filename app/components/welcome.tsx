"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toChecksumAddress } from "web3-utils";
/**
 * A component that renders a welcome screen, allowing the user to connect their wallet or manually type one
 */
const Welcome = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [addressError, setAddressError] = useState<string | undefined>(
    undefined
  );

  const router = useRouter();
  const onSearch = () => {
    try {
      toChecksumAddress(walletAddress);
      router.push(`/explore/${walletAddress}`);
    } catch (e) {
      console.log(e);
      setAddressError("Invalid address");
    }
  };

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
        <label htmlFor="walletAddress" className="mb-2 text-gray-700">
          Enter Wallet Address
        </label>
        <input
          type="text"
          placeholder="Enter Wallet Address"
          className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none ${
            addressError ? "border-red-500" : ""
          }`}
          onChange={(e) => {
            setWalletAddress(e.target.value);
            setAddressError("");
          }}
        />
        {addressError && <p className="text-red-500 mt-2">{addressError}</p>}

        <button
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
          onClick={onSearch}
        >
          Search Inventory
        </button>
      </motion.div>
    </div>
  );
};

export default Welcome;
