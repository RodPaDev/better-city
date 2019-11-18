const users = require("../Models/AuthModel");

async function getAllUsers(req, res){
    try{
        const result = await users.get();
        res.status(200).json(result)
    } catch (error){
        res.status(500).json({error})
    }
}

async function register(req, res){
    try{
        const [result] = await users.insert(req.body);
        res.status(200).json(result)
    } catch (error){
        res.status(500).json("Something went wrong, try again in a few minutes.")
    }
}

module.exports = {
    getAllUsers,
    register
}