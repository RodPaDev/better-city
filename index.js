const server = require("./api/server.js");

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
    console.log(`Jah Bruv da server is jammin' on da ${PORT}`)
})