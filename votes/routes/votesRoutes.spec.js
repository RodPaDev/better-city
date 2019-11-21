const request = require("supertest");

const server = require("../../api/server");

const vote = {
	"issue_id": 3,
	"user_id": 1
}

describe("Votes Router", () => {
    it("Add Vote and return voted post", () => {
      return request(server)
        .post("/api/votes")
        .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
        .send(vote)
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
        })
    })

    it("Delete Vote from db", () => {
        return request(server)
            .del("/api/votes/")
            .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
            .send(vote)
            .expect(200)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(res.body).toMatchObject({
                    "isDeleted": true,
                    "msg": "SUCCESS: Issue Deleted"
                })
            })
    })

    it("Try to delete unexistant vote", () => {
        return request(server)
            .del("/api/votes/")
            .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NDE4NzI5NiwiZXhwIjoxNTc5MzcxMjk2fQ.q6xuzkdeyuYLH40OSFgjbWBoJYD1bxGYRrVFH3MiunU")
            .send(vote)
            .expect(404)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(res.body).toBe("Vote not found")
            })
    })
})