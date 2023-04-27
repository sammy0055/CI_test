import express, { Express, Request, Response } from "express";

export const app: Express = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server new");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

