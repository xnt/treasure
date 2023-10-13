import { Punk } from "../../../generated/app.generated";
import client from "../../../lib/client";
import GoBack from "./go-back";
import PunkDetailsTable from "./punk-details-table";
import PunkImage from "./punk-image";

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
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">{punk.tokenId}</h2>
      <PunkImage tokenId={punk.tokenId} />
      <PunkDetailsTable punk={punk as Punk} />
      <GoBack />
    </div>
  );
};

export default PunkDetailsPage;
