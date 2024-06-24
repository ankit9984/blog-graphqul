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


export const GET_PROFILE_INFO = gql`
  query getProfileInfo{
   user:myprofile{
      firstName,
      lastName,
      email
      quotes{
        name
      }
    }
  }
`