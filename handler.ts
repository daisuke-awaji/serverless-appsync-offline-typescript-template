import { Handler } from "aws-lambda";
import "source-map-support/register";

export const info: Handler = async (event, _context) => {
  return {
    name: "myapp",
    version: "0.0.1",
  };
};
