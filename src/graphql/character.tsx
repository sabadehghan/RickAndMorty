import { gql } from "apollo-boost";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        species
        gender
        status
      }
    }
  }
`;
