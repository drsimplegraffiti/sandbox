const UserService = require("../services/user.services");

exports.getUsers = async function (req, res, next) {
  // Validate request parameters, queries using express-validator

  var page = req.params.page ? req.params.page : 1;
  var limit = req.params.limit ? req.params.limit : 10;
  try {
    var users = await UserService.getUsers({}, page, limit);
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Successfully Users Retrieved",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = async function (req, res, next) {
  try {
    const user = await UserService.createUser(req.body);
    return res.status(201).json({
      user,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
