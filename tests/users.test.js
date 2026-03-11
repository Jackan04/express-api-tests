import request from "supertest";
import app from "../app.js";

describe("GET /users/:id", () => {
  test("valid ID returns 200 and the correct user shape", (done) => {
    request(app)
      .get("/users/1")
      .expect(200)
      .expect({ id: 1, name: "matt", age: 21 }, done);
  });

  test("invvalid ID returns 404 with an error message", (done) => {
    request(app)
      .get("/users/2")
      .expect(404)
      .expect({ error: "Invalid userId" }, done);
  });
});

describe("POST /users", () => {
  test("a valid body returns 201 and the new user", (done) => {
    request(app)
      .post("/users")
      .send({ name: "jacob", email: "jacob.asker@icloud.com" })
      .expect(201)
      .expect({ name: "jacob", email: "jacob.asker@icloud.com" }, done);
  });

  test("missing name or email returns 400 with an error", (done) => {
    request(app)
      .post("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .send({ email: "jacob.asker@icloud.com" })
      .expect(400)
      .expect({ error: "Missing name or email" }, done);
  });
});
