"use client";

import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default GoBack;
