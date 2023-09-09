import { NextFunction, Request, Response } from "express";
import config from "../../config/config";
const jwt = require("jsonwebtoken");

const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders) {
    return res.status(401).json({
      data: false,
      message: "Unauthorised User",
    });
  }
  const token = authHeaders?.split(" ")[1];
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

export const middleware = { verifyToken };
