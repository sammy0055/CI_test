import { app } from "../src/app";
import request from "supertest";
describe("testing for sum functon", () => {
  it("should return two", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
