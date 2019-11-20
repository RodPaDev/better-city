const db = require("../../data/dbConfig");

async function validateID(req, res, next) {
  try {
    const issues = await db("issues").select("issues.id");
    const isID = issues.filter(issue => issue.id === Number(req.params.id));
    if (isID.length) {
      next();
    } else {
      res
        .status(500)
        .json(`Issue ${req.params.id} does not exist in our database`);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Something went wrong, try again in a few minutes",
        error
      });
  }
}

module.exports = { validateID };
