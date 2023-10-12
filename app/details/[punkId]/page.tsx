import { Punk } from "../../../generated/app.generated";
import client from "../../../lib/client";
import GoBack from "./go-back";
import PunkDetailsTable from "./punk-details-table";

interface PunkDetailsPageProps {
  params: {
    punkId: string;
  };
}

const getPunkDetails = async (punkId: string) => {
  try {
    const { punk } = await client.GetPunkDetails({
      punkId: punkId,
    });
    return punk;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const PunkDetailsPage = async ({
  params: { punkId },
}: PunkDetailsPageProps) => {
  const punk = await getPunkDetails(punkId);
  if (!punk) return <h1>No punk details</h1>;
  const formattedTokenId = punk.tokenId.padStart(4, "0");
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">{punk.tokenId}</h2>
      <img
        className="m-2 mb-4"
        src={`https://cryptopunks.app/public/images/cryptopunks/punk${formattedTokenId}.png`}
        width={100}
      />
      <PunkDetailsTable punk={punk as Punk} />
      <GoBack />
    </div>
  );
};

export default PunkDetailsPage;
