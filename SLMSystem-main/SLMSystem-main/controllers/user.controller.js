const User = require("../models/user.model");
const Response = require("../libs/response");
const Error = require("../libs/error");
const { passwordHash, passwordCompare } = require("../libs/bcrypt");
const { sendMail } = require("../libs/sendMail");
const { jwtSign } = require("../libs/jwt");
const verificationTemplate = require("../helpers/verificationTemplate");
const { uploadCloudinary } = require("../libs/uploadCloudinary");

// const { JWT_SECRET } = process.env;

exports.userSignUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw Error("User already exists", "BAD REQUEST", 401);
    }
    const hashedPassword = await passwordHash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    const payload = {
      _id: newUser._id,
      email: newUser.email,
      role: newUser.role,
    };
    const token = jwtSign(payload);
    // let hostname = req.headers.host;
    // let verificationLink = `http://${hostname}/verify/${token}`;
    // const message = verificationTemplate(newUser.firstname, verificationLink);
    // await sendMail(message, "Activate your account", newUser.email);
    await newUser.save();
    return Response(res).success({ data: newUser, token }, 201);
  } catch (error) {
    console.log(error);
    return Response(res).error(error.message, 500);
  }
};

exports.userSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw Error("User does not exist", "BAD REQUEST", 401);
    }
    const passwordCheck = await passwordCompare(password, user.password);
    if (!passwordCheck) {
      throw Error("Password are not correct", "BAD REQUEST", 401);
    }
    const payload = {
      _id: user._id,
      email: user.email,
      role: user.role,
    };
    const token = jwtSign(payload);
    return Response(res).success(
      { message: "User login successfully", token },
      200
    );
  } catch (error) {
    console.log(error);
    throw Error("Error Occured", "Server Error", 500);
    // return Response(res).error(error, 500);
  }
};

exports.uploadUserProfilePicture = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path } = req.file;
    const newPath = await uploadCloudinary(path);
    const uploadUserImage = newPath.res;
    const updateUserProfile = await User.findByIdAndUpdate(
      _id,
      { image: uploadUserImage },
      { new: true, runValidators: true, upsert: true }
    );
    if (!updateUserProfile) {
      throw Error("Error occur while Updating", "Server Error", 500);
    }
    const data = { updateUserProfile };
    return Response(res).success(
      { data, message: "User login successfully" },
      200
    );
  } catch (error) {
    console.log(error);
    throw Error("Error Occured", "Server Error", 500);
  }
};
