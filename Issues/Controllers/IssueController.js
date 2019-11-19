const issues = require("../Models/issuesModels");

async function getAllIssues(req, res){
    try {
        const result = await issues.get();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = { getAllIssues };