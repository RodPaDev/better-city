const request = require("supertest");

const db = require("../../data/dbConfig");
const server = require("../../api/server");

const issue = {
  description: "The wall is crubminling down",
  latitude: 51.453545,
  longitude: -2.587125,
  imgURL: "https://i.imgur.com/jqXBn1J.png",
  user_id: 1
}

const updatedIssue = {
  description: "The wall is crubminling down and up and test we go",
  latitude: 51.433345,
  longitude: -9.587125,
  imgURL: "https://i.imgur.com/jqXBn1J.png",
  user_id: 1
}

describe("POST New Issue", () => {
  it("Create a new Issue", () => {
    return request(server)
      .post("/api/issues")
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
      .send(issue)
      .expect(201)
      .expect("Content-Type", /json/)
  });

  it("Check object data type integrity", () => {
    return request(server)
      .post("/api/issues")
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
      .send(issue)
      .expect(201)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(typeof res.body.id).toBe("number")
        expect(typeof res.body.description).toBe("string")
        expect(typeof res.body.latitude).toBe("string")
        expect(typeof res.body.longitude).toBe("string")
        expect(typeof res.body.imgURL).toBe("string")
        expect(typeof res.body.user_id).toBe("number")
      });
  });
})

describe("GET All issues", () => {
  it("Get an array back", () => {
    return request(server)
      .get("/api/issues")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true)
      })
  })

  it("Check object data type integrity", () => {
    return request(server)
      .get("/api/issues")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true)
        expect(res.body.length).toBeGreaterThan(0)
        expect(typeof res.body[0]["id"]).toBe("number")
        expect(typeof res.body[0]["description"]).toBe("string")
        expect(typeof res.body[0]["latitude"]).toBe("string")
        expect(typeof res.body[0]["longitude"]).toBe("string")
        expect(typeof res.body[0]["imgURL"]).toBe("string")
        expect(typeof res.body[0]["first_name"]).toBe("string")
        expect(typeof res.body[0]["last_name"]).toBe("string")
        expect(typeof res.body[0]["votes"]).toBe("string")
      });
  })
})

describe("GET issue by id", () => {
  it("Get an array back", () => {
    return request(server)
      .get("/api/issues/1")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(typeof res.body).toBe("object")
      })
  })

  it("Check object data type integrity", () => {
    return request(server)
      .get("/api/issues/1")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(typeof res.body.id).toBe("number")
        expect(typeof res.body.description).toBe("string")
        expect(typeof res.body.latitude).toBe("string")
        expect(typeof res.body.longitude).toBe("string")
        expect(typeof res.body.first_name).toBe("string")
        expect(typeof res.body.last_name).toBe("string")
        expect(typeof res.body.imgURL).toBe("string")
        expect(typeof res.body.votes).toBe("string")
      });
  })
})

describe("Update issue by id", () => {

  let issueId = 0;

  it("Create a new Issue to edit", () => {
    return request(server)
      .post("/api/issues")
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
      .send(issue)
      .expect(201)
      .expect("Content-Type", /json/)
      .then(res => {
        issueId = res.body.id;
        expect(typeof res.body).toBe("object")
      })
  });

  it("Update the posted issue", () => {
    return request(server)
      .put(`/api/issues/${issueId}`)
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
      .send({ ...updatedIssue, id: issueId })
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(typeof res.body).toBe("object")
        expect(res.body).toMatchObject({
          ...updatedIssue, 
          id: issueId, 
          latitude: `${updatedIssue.latitude}`,
          longitude: `${updatedIssue.longitude}`
        
        })
      })
  })

  it("Check object data type integrity", () => {
    return request(server)
      .put(`/api/issues/${issueId}`)
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
      .send({ ...updatedIssue, id: issueId })
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(typeof res.body.id).toBe("number")
        expect(typeof res.body.description).toBe("string")
        expect(typeof res.body.latitude).toBe("string")
        expect(typeof res.body.longitude).toBe("string")
        expect(typeof res.body.imgURL).toBe("string")
        expect(typeof res.body.user_id).toBe("number")
      });
  })
})
