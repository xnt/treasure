"use client";

import { useRouter } from "next/navigation";

/**
 * Disconnects the user... Well, actually returns him/her to the welcome screen
 * A bit of an overkill, but need to make it a client component so ideally it has to be a separate file
 */
const GoBackButton = () => {
  const router = useRouter();
  const onGoBack = () => {
    router.push("/");
  };
  return (
    <button
      className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
      onClick={onGoBack}
    >
      Go back
    </button>
  );
};

export default GoBackButton;
