import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react";
import Link from "next/link";

const ConnectWallet = () => {
  const { primaryWallet } = useDynamicContext();
  return (
    <>
      <DynamicWidget variant="dropdown" />
      {primaryWallet && (
        <div className="flex flex-col items-center mt-4">
          <p>
            <Link
              className="text-blue-500 hover:underline"
              href={`/explore/${primaryWallet.address}`}
            >
              Explore this wallet
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default ConnectWallet;
