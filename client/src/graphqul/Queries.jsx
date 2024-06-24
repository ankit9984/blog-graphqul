import { gql } from "@apollo/client";

export const GET_ALL_QUUOTES = gql `
query getAllQuotes{
    quotes{
      name
      by{
        _id
        firstName
      }
    }
  }
`