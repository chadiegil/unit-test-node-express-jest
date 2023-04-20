const request = require("supertest");

const express = require("express");
const app = express();

app.get("/sample", (req, res) => {
  const answer = 1 * 1;

  res.json(answer);
});

describe("GET /sample", () => {
  it("responde with a list of users", async () => {
    const expectedResponse = 1;
    const response = await request(app).get("/sample");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

//
// app.get("/users", (req, res) => {
//   const users = [
//     {
//       id: 1,
//       name: "Jonh Doe",
//       email: "john@gmail.com",
//       id: 2,
//       name: "Ike Doe",
//       email: "ike@gmail.com",
//     },
//   ];
//   res.json(users);
// });

// describe("GET /users", () => {
//   it("responde with a list of users", async () => {
//     const response = await request(app).get("/users");
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual([
//       {
//         id: 1,
//         name: "John Doe",
//         email: "john@gmail.com",
//         id: 2,
//         name: "Ike Doe",
//         email: "ike@gmail.com",
//       },
//     ]);
//   });
// });
