const val = {
  string: obj => (typeof obj === "string" ? true : false),
  number: obj => (typeof obj === "number" ? true : false)
};

const message = {
  string: obj => `${obj} isn't a string`,
  number: obj => `${obj} isn't a number`,
  email: obj => `${obj} isn't a valid email`
};

function validateForm(req, res, next) {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (
    req.body.email &&
    req.body.password &&
    req.body.first_name &&
    req.body.last_name &&
    req.body.phone
  ) {
    // Email
    if (!val.string(req.body.email || !regExp.test(req.body.email))) {
      res.status(400).json(message.email(req.body.email));
      // Password
    } else if (!val.string(req.body.password)) {
      res.status(400).json(message.string(req.body.password));
      // First Name
    } else if (!val.string(req.body.first_name)) {
      res.status(400).json(message.string(req.body.first_name));
      // Last Name
    } else if (!val.string(req.body.last_name)) {
      res.status(400).json(message.string(req.body.last_name));
      // Phone
    } else if (!val.number(req.body.phone)) {
      res.status(400).json(message.number(req.body.phone));
    } else {
      next();
    }
  } else {
    res.status(400).json("Required fields not provided");
  }
}



module.exports = {
  validateForm
};
