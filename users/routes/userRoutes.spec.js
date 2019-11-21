const request = require("supertest");

const server = require("../../api/server");

describe("GET All issues", () => {
    it("Get user info", () => {
      return request(server)
        .get("/api/user/1")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(res => {
            expect(typeof res.body.id).toBe("number")
            expect(typeof res.body.email).toBe("string")
            expect(typeof res.body.first_name).toBe("string")
            expect(typeof res.body.last_name).toBe("string")
            expect(typeof res.body.phone).toBe("number")
        })
    })

    it("Error on id not valid", () => {
        return request(server)
            .get("/api/user/1+")
            .expect(500)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(res.body).toBe(`User 1+ does not exist in our database`)
            })
    })
})