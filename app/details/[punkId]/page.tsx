import Web3 from "web3";
import { Punk } from "../../../generated/app.generated";
import client from "../../../lib/client";
import GoBack from "./go-back";
import PunkDetailsTable from "./punk-details-table";
import PunkImage from "./punk-image";
import punkDataAbi from "./punk-data.abi.json";
const PUNK_DETAILS_ADDRESS = "0x16F5A35647D6F03D5D3da7b35409D65ba03aF3B2";
const INFURA_API_URL = process.env.INFURA_API_URL;
interface PunkDetailsPageProps {
  params: {
    punkId: string;
  };
}

type PunkDetails = {
  attributes: string;
  imageData: string;
};

const getPunkDetails = async (punkId: string) => {
  try {
    const web3 = new Web3(INFURA_API_URL);
    const contract = new web3.eth.Contract(punkDataAbi, PUNK_DETAILS_ADDRESS);
    const attributes = (await contract.methods
      .punkAttributes(punkId)
      .call()) as string;
    const imageData = (await contract.methods
      .punkImageSvg(punkId)
      .call()) as string;
    const punkDetails: PunkDetails = {
      attributes,
      imageData,
    };
    return punkDetails;
  } catch (e) {
    console.error(e);
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
      <h2 className="text-2xl font-semibold mb-4">{punkId}</h2>
      <PunkImage src={punk.imageData} />
      <div>
        <h3 className="text-xl font-semibold mb-4">Attributes</h3>
        {punk.attributes}
      </div>
      <GoBack />
    </div>
  );
};

export default PunkDetailsPage;
