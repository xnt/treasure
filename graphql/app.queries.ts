import gql from "graphql-tag";

export const hello = gql`
  query GetPunks($address: String!) {
    punks(where: { owner: $address }) {
      id
      tokenId
      transferedTo {
        id
      }
      assignedTo {
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
