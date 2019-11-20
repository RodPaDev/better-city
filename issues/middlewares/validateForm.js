
function isFloat(num){
    if(typeof num === "number" && !Number.isInteger(num)){
        return true
    } else {
        return false
    }
}

function validateForm(req, res, next){
  if (
    req.body.description &&
    req.body.latitude &&
    req.body.longitude &&
    req.body.imgURL
  ) {
        // description
    if (typeof req.body.description !== "string") {
        res.status(400).json(`Description ${req.body.description} provided is not a string`)
        // latitude
    } else if (!isFloat(req.body.latitude)) {
        res.status(400).json(`The latitude ${req.body.latitude} is not a float`)
        // longitude
    } else if (!isFloat(req.body.longitude)) {
        res.status(400).json(`The longitude ${req.body.longitude} is not a float`)
        //imgurl
    } else if (typeof req.body.imgURL !== "string"){
        res.status(400).json(`The img url ${req.body.description} provided is not a string`)
    } else {
      next();
    }
  } else {
    res.status(400).json("Required fields not provided");
  }
}

module.exports = { validateForm };