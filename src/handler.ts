import { app } from "./app";
import serverless from "serverless-http";

const binaryMimeType = [
  "application/json",
  "application/javascript",
  "application/xml",
];

export const lambdaHandler = serverless(app, {
  binary: binaryMimeType,
});
