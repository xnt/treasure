import client from "../../../lib/client";
import DisconnectButton from "./disconnect-button";
import PunkRow from "./punk-row";

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
  if (punks.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold mb-4">Exploring {wallet}</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">No punks 😔</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Exploring {wallet}</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Owned Punks</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Token ID</th>
              <th className="text-left">Click to Explore</th>
            </tr>
          </thead>
          <tbody>
            {punks.map(({ id, tokenId }) => (
              <PunkRow tokenId={tokenId} key={id} />
            ))}
          </tbody>
        </table>
      </div>
      <DisconnectButton />
    </div>
  );
};

export default Explorer;
