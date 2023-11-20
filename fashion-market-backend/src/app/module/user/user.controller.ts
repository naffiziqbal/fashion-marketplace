import { Request, RequestHandler, Response } from "express";
import { userService } from "./user.services";
import { User } from "./user.model";
import config from "../../../config/config";
import { ObjectId } from "mongodb";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (req: Request, res: Response) => {
  const authHeaders = req.headers.authorization;
  const token = authHeaders?.split(" ")[1];
  console.log(token, "auth");

  if (!token) {
    return res.status(401).json({ error: "No Authorised" });
  }

  try {
    const decodedToken = jwt.verify(token, config.accessTokenSecret);
    const userId = decodedToken.user?._id;
    // console.log(userId, "UID");

    const id = new ObjectId(userId);
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        data: [],
        errro: "No User Found",
      });
    }
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};

const getAllUsers: RequestHandler = async (req, res) => {
  const result = userService.getUserFromDb();
  console.log(result)
  return result;
};

const createUser = async (req: Request, res: Response) => {
  const { email, displayName, password, DOB, userImg, role } = req.body;

  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    displayName,
    password: hashedPassword,
    DOB,
    userImg,
    role,
  });
  try {
    const token = jwt.sign({ user }, config.accessTokenSecret, {
      expiresIn: "1h",
    });
    const result = await userService.createUsersToDb(user);
    res.status(200).json({
      data: result,
      token: token,
      success: true,
      message: "User Created Successfully",
    });
  } catch (err) {
    res.send(err);
  }
};

const userLogin: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, "User Email");
  const user = await User.findOne({ email });
  console.log(user, "User");

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({
      error: "Ïnvalid Credential",
    });
  }
  const token = jwt.sign({ user }, config.accessTokenSecret, {
    expiresIn: "1h",
  });

  res.status(200).json({ data: user, token, success: true });
};

const updateUserProfile: RequestHandler = async (req, res) => {
  const query = req.params.id;
  const body = req.body;
  const _id = new ObjectId(query);
  const result = userService.updateUserProfileInDb({ _id, body });
  res.status(200).json({
    data: result,
    success: true,
  });
};

export const userController = {
  getUser,
  getAllUsers,
  createUser,
  userLogin,
  updateUserProfile,
};
