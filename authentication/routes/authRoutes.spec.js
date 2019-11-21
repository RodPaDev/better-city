const request = require("supertest");

const db = require("../../data/dbConfig");
const server = require("../../api/server");

const register = {
    email: "somedude@someemail.tld",
    password: "password",
    first_name: "Somedude",
    last_name: "testing",
    phone: 625443
}



describe("POST /api/auth/register", () => {
    beforeEach(async () => {
        await db.raw('TRUNCATE TABLE users, users CASCADE')
    })

    it("Create a new User and return ", () =>{
        return request(server)
            .post("/api/auth/register")
            .send(register)
            .expect(201)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(typeof res.body === "object").toBe(true)
                expect(typeof res.body.first_name).toBe("string")
                expect(typeof res.body.last_name).toBe("string")
                expect(typeof res.body.token).toBe("string")
                expect(typeof res.body.id).toBe("number")
            })
    })
})

describe("POST /api/auth/login", () => {

    it("Create a new User and return ", () =>{
        return request(server)
            .post("/api/auth/login")
            .send({
                email: register.email,
                password: register.password
            })
            .expect(200)
            .expect("Content-Type", /json/)
            .then(res => {
                expect(typeof res.body === "object").toBe(true)
                expect(typeof res.body.first_name).toBe("string")
                expect(typeof res.body.last_name).toBe("string")
                expect(typeof res.body.token).toBe("string")
                expect(typeof res.body.id).toBe("number")
            })
        })
});