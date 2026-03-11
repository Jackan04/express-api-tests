import request from "supertest";
import app from "../app.js";

describe("GET /", () => {
  test("returns 200", (done) => {
    request(app).get("/").expect(200, done);
  });

  test("returns { status: ok }", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect({ status: "ok" }, done);
  });
});
