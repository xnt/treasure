import client from "../../../lib/client";
import DisconnectButton from "./disconnect-button";

interface ExplorerProps {
  params: {
    wallet: string;
  };
}

/**
 * Calls our punks API
 * @param wallet the wallet to query punks for
 * @returns the punks. Empty array if no punks or error (might need to change this part)
 */
const getPunks = async (wallet: string) => {
  try {
    const { punks } = await client.GetPunks({
      address: wallet,
    });
    return punks;
  } catch (e) {
    console.log(e);
    return [];
  }
};

/**
 * Renders punks and related data
 */
const Explorer = async ({ params: { wallet } }: ExplorerProps) => {
  const punks = await getPunks(wallet);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <p>Exploring {wallet}</p>
      <p>{punks.length} punks</p>
      <DisconnectButton />
    </div>
  );
};

export default Explorer;
