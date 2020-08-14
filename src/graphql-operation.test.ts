import { GraphQLClient, gql } from "graphql-request";
import { getTask } from "./query";
import { createTask, deleteTask } from "./mutation";

const client = new GraphQLClient("http://localhost:20002/graphql", {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZDhjYTUyOC00OTMxLTQyNTQtOTI3My1lYTVlZTg1M2YyNzEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS91cy1lYXN0LTFfZmFrZSIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6InVzZXIxIiwiYXVkIjoiMmhpZmEwOTZiM2EyNG12bTNwaHNrdWFxaTMiLCJldmVudF9pZCI6ImIxMmEzZTJmLTdhMzYtNDkzYy04NWIzLTIwZDgxOGJkNzhhMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxOTc0MjY0NDEyLCJwaG9uZV9udW1iZXIiOiIrMTIwNjIwNjIwMTYiLCJleHAiOjE1OTczNjg4MTQ4LCJpYXQiOjE1NjQyNjQ0MTMsImVtYWlsIjoidXNlckBkb21haW4uY29tIn0.7YJc2KXGZ61fG_sYtInYH26o_5RbXgrwj2iXEI_Xip0",
  },
});

describe("dynamodb resolver", () => {
  test("listTasks", async () => {
    const query = gql`
      {
        listTasks {
          nextToken
          tasks {
            id
            name
            status
          }
        }
      }
    `;
    const result = await client.request(query);
    expect(result).toHaveProperty("listTasks");
    expect(result.listTasks).toHaveProperty("tasks");
  });

  test("createTask / getTask by id and status / deleteTask", async () => {
    const valiables = {
      id: "123456789",
      name: "study serverless framework",
      status: "NoStatus",
    };
    const created = await client.request(createTask, valiables);
    expect(created).toStrictEqual({ createTask: valiables });

    const got = await client.request(getTask, {
      id: valiables.id,
      status: valiables.status,
    });
    expect(got.getTask).toEqual(valiables);

    const deleted = await client.request(deleteTask, {
      id: valiables.id,
      status: valiables.status,
    });
    expect(deleted).toStrictEqual({ deleteTask: valiables });
  });
});

describe("lambda resolver", () => {
  test("info", async () => {
    const query = gql`
      {
        info {
          name
          version
        }
      }
    `;
    const result = await client.request(query);
    expect(result).toStrictEqual({
      info: {
        name: "myapp",
        version: "0.0.1",
      },
    });
  });
});
