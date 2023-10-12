"use client";

import { Punk } from "../../../generated/app.generated";

interface PunkDetailsTableProps {
  punk: Punk;
}

const PunkDetailsTable = ({ punk }: PunkDetailsTableProps) => {
  return (
    <table className="w-full mb-2">
      <tr>
        <td>Token ID</td>
        <td>{punk.tokenId}</td>
      </tr>
      <tr>
        <td>Owner</td>
        <td>{punk.owner.id}</td>
      </tr>
      <tr>
        <td>Assigned to</td>
        <td>{punk.assignedTo?.id ?? "Unknown"}</td>
      </tr>
      <tr>
        <td>Average Sale Price</td>
        <td>{punk.averageSalePrice}</td>
      </tr>
      <tr>
        <td>Contract</td>
        <td>{punk.contract?.id ?? "Unknown"}</td>
      </tr>
      <tr>
        <td>Current Ask</td>
        <td>{punk.currentAsk.amount}</td>
      </tr>
      <tr>
        <td>Current Bid</td>
        <td>{punk.currentBid.amount}</td>
      </tr>
      <tr>
        <td>Number of Sales</td>
        <td>{punk.numberOfSales}</td>
      </tr>
      <tr>
        <td>Number of Transfers</td>
        <td>{punk.numberOfTransfers}</td>
      </tr>
    </table>
  );
};

export default PunkDetailsTable;
