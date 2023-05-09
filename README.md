# Title: Cryptopunks Viewer Dapp

## Objective

Create an webapp with multiple routes for viewing Cryptopunks using the Cryptopunks Subgraph and the provided smart contract address.

## Requirements

1. Implement a Cryptopunks viewer UI using the Cryptopunks Subgraph.
2. Display the wallet/inventory view for the user's owned Cryptopunks.
3. Implement a punk detail view for each individual Cryptopunk. Attributes and images are available via subgraph, but for the sake of this exercise, please query from the smart contract provided: https://etherscan.io/address/0x16F5A35647D6F03D5D3da7b35409D65ba03aF3B2

## Nice to have

- Filters (male/female)
- Display the sales for the last 30 days
- Display top punk owners
- Wallet connection
- Animations (preferably using framer-motion)

---

## Instructions

- A boilerplate template is set up for you. Clone this repo and install necessary dependencies.
- Graphql-codegen is set up to generate types for the subgraph. You can use the generated code to query the subgraph, located in `lib/client.ts`.
- You are allowed to use any framework (ex. Next.js, Remix, or client-side routing) you want.
- Use `wagmi` for blockchain interactions.
- You can add more packages as you wish. However, we recommend keeping the number of dependencies to a minimum.
- Review the code to ensure it meets all requirements.
- Optimize the code for readability and performance.
- Feel free to add comments to explain your thought process.
- Once you are done, please send us a link to your repo.
