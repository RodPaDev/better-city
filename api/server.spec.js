const server = require("./server.js");
const request = require("supertest");

describe("GET /", () => {
    it("has process.env.DB_ENV as 'testing' ", () => {
        expect(process.env.DB_ENV).toBe("testing");
    })

    it("Redirect returns 302 Found", () => {
    return request(server).get("/")
        .expect(302)
    })

    it("Docs returns 302 Found", () =>{
        return request(server).get("/api/docs")
        .expect(302)
    })
})
