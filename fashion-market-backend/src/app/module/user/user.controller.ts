import { Request, Response } from "express";
import config from "../../../config/config";

var jwt = require("jsonwebtoken");

export const createToken = async (req: Request, res: Response) => {
  const user = req.body;
  const token = jwt.sign({ user }, config.accessTokenSecret, {
    expiresIn: "1h",
  });
  res.json({ token });
  console.log(token);
};

export const getUser = async (req: Request, res: Response) => {
    
  res.json("User");
};
