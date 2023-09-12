import { NextFunction, Request, Response } from "express";

import config from "../../../config/config";
const jwt = require("jsonwebtoken");

const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const authHeaders = req.headers.authorization;
  // Check Token Status
  if (!authHeaders) {
    return res.status(401).json({
      data: false,
      message: "Unauthorised User",
    });
  }

  // Split Secret From Information
  const token = authHeaders?.split(" ")[1];

  // Veryfy and Decode Token
  jwt.verify(token, config.accessTokenSecret, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({
        data: false,
        messsage: "Unauthorized User",
      });
    }
    req.decoded = decoded;
    next();
  });
};

const createToken = async (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(user, config.accessTokenSecret, {
    expiresIn: "5s",
  });
  res.json({ token });
};

export const middleware = { verifyToken, createToken };
