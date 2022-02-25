const User = require("../models/user.model");

exports.getUsers = async function (query, page, limit) {
  try {
    var users = await User.find(query);
    return users;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};

exports.createUser = async function (create) {
  try {
    const user = await User.create(create);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    throw Error("Something happened");
  }
};
