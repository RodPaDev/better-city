const request = require("supertest");

const db = require("../../data/dbConfig");
const server = require("../../api/server");

function random(option = "number"){
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let number = ""
    let string = '';
    if(option === "email"){
        for(var i = 0; i < 15; i++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + "@email.com"
    }else{
        for(var i = 0; i < 9; i++){
            number += Math.floor(Math.random() * 9);
        }
        return Number(number)
    }
}

const register = {
    email: random("email"),
    password: "password",
    first_name: "Somedude",
    last_name: "testing",
    phone: random()
}


describe("POST /api/auth/register", () => {
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

    it("Login Test user", () =>{
        return request(server)
            .post("/api/auth/login")
            .send({
                email: process.env.TEST_EMAIL,
                password: process.env.TEST_PW
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