import { Request, RequestHandler, Response } from "express";
import { userService } from "./user.services";
import { User } from "./user.model";
import config from "../../../config/config";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (req: Request, res: Response) => {
  const result = await userService.getUserFromDb();
  res.status(200).json({
    data: result,
  });
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
    const result = await userService.createUsersToDb(user);
    res.status(200).json({
      data: result,
      message: "User Created Successfully",
    });
  } catch (err) {
    res.send(err);
  }
};

const userLogin: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  console.log(user);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({
      error: "Ïnvalid Credential",
    });
  }
  const token = jwt.sign({ userId: user._id }, config.accessTokenSecret, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
};

export const userController = { getUser, createUser, userLogin };
