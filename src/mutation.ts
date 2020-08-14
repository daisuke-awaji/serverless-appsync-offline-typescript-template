import { gql } from "graphql-request";

export const createTask = gql`
  mutation create($id: ID!, $name: String!, $status: String!) {
    createTask(input: { id: $id, name: $name, status: $status }) {
      id
      name
      status
    }
  }
`;

export const deleteTask = gql`
  mutation delete($id: ID!, $status: String!) {
    deleteTask(input: { id: $id, status: $status }) {
      id
      name
      status
    }
  }
`;
