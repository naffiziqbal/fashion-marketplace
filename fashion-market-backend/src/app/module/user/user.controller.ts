import { Request, Response } from "express";
import { userService } from "./user.services";
import { User } from "./user.model";
const bcrypt = require("bcrypt");

const getUser = async (req: Request, res: Response) => {
  const result = await userService.getUserFromDb();
  res.status(200).json({
    data: result,
  });
};

const createUser = async (req: Request, res: Response) => {
  const { displayName, password, DOB, userImg, role } = req.body;
  
  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ displayName, password:hashedPassword, DOB, userImg, role });
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


export const userController = { getUser, createUser };
