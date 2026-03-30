import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const TEST_QUERY = gql`
query ExampleQuery {
  continents {
    name
    countries {
      name
      code
    }
  }
}

`