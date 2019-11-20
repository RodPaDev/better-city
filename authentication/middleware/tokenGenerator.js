const jwt = require("jsonwebtoken");

function genToken(data){
    const payload = {
        sub: data.id,
    }

    const options = {
        expiresIn: "60d",
    }

    const secret = process.env.JWT_SECRET

    return jwt.sign(payload, secret, options)
}

module.exports = genToken;