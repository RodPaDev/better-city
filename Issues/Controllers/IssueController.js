const issues = require("../Models/issuesModels");

async function getAllIssues(req, res){
    try {
        const result = await issues.get();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function getIssueByID(req, res){
    try {
        const result = await issues.getByID(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function postIssue(req, res){
    try {
        const result = await issues.insertIssue(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ error });
        
    }
}



module.exports = { getAllIssues, getIssueByID, postIssue, deleteIssue, editIssue };