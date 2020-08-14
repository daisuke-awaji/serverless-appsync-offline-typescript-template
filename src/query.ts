import { gql } from "graphql-request";

export const getTask = gql`
  query getTask($id: ID!, $status: String!) {
    getTask(id: $id, status: $status) {
      id
      name
      status
    }
  }
`;
