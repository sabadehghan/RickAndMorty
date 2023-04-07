import { gql } from "apollo-boost";

export const GUERY_CHARACTERS = (inGender?: any, inStatus?: any, inSpecies?: any) => {
  inGender = inGender ? inGender : "";
  inStatus = inStatus ? inStatus : "";
  inSpecies = inSpecies ? inSpecies : "";
  return gql`
  query GetCharacters {
    characters ( filter: { gender: "${inGender}", status: "${inStatus}", species: "${inSpecies}" }) {
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
};
