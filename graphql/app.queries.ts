import gql from "graphql-tag";

export const hello = gql`
  query GetPunks($address: String!) {
    punks(where: { owner: $address }) {
      id
      tokenId
    }
  }
  query GetPunkDetails($punkId: ID!) {
    punk(id: $punkId) {
      id
      tokenId
      currentAsk {
        id
        amount
      }
      currentBid {
        id
        amount
      }
      numberOfSales
      numberOfTransfers
      owner {
        id
      }
      purchasedBy {
        id
      }
      metadata {
        image
        svg
      }
    }
  }
`;
