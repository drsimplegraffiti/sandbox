const Admin = require("../models/admin.model");
const User = require("../models/user.model");
const Response = require("../libs/response");
const Error = require("../libs/error");
const { passwordHash, passwordCompare } = require("../libs/bcrypt");
const { jwtSign } = require("../libs/jwt");

exports.adminSignUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const userExist = await Admin.findOne({ email });
    if (userExist) {
      throw Error("User already exists", "BAD REQUEST", 401);
    }
    const hashedPassword = await passwordHash(password);
    const newAdmin = new Admin({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    const payload = {
      _id: newAdmin._id,
      email: newAdmin.email,
      role: newAdmin.role,
    };
    const token = jwtSign(payload);
    await newAdmin.save();
    return Response(res).success({ data: newAdmin, token }, 201);
  } catch (error) {
    return Response(res).error(error.message, 500);
  }
};

exports.adminSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      throw Error("Admin does not exist", "BAD REQUEST", 401);
    }
    const passwordCheck = await passwordCompare(password, admin.password);
    if (!passwordCheck) {
      throw Error("Password are not correct", "BAD REQUEST", 401);
    }
    const payload = {
      _id: admin._id,
      email: admin.email,
      role: admin.role,
    };
    const token = jwtSign(payload);
    return Response(res).success(
      { message: "Admin login successfully", token },
      200
    );
  } catch (error) {
    return Response(res).error(error.message, 500);
  }
};

exports.blockUser = async (req, res) => {
  try {
    // let user;
    console.log(req.decoded.role);
    const { id } = req.query;
    const user = await User.findOne({ _id: id });
    if (!user) {
      throw Error("User Not Found", "BAD REQUEST", 400);
    }
    await User.findOneAndUpdate(
      { _id: id },
      { block: true },
      { new: true, upsert: true }
    );
    return Response(res).success({ message: "User is blocked" }, 200);
  } catch (error) {
    console.log(error);
    return Response(res).error(error.message, 500);
  }
};
