import { NextFunction, Request, RequestHandler, Response } from "express";

import config from "../../../config/config";
const jwt = require("jsonwebtoken");

const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const authHeaders = req.headers.authorization;
  // console.log("Token", authHeaders);
  // Check Token Status
  if (!authHeaders) {
    res.status(401).json({
      data: [],
      message: "Unauthorised User",
    });
  }

  // Split Secret From Information
  const token = authHeaders?.split(" ")[1];

  // Veryfy and Decode Token
  jwt.verify(token, config.accessTokenSecret, (err: any, decoded: any) => {
    if (err) {
      res.status(401).json({
        data: [],
        messsage: "Could'nt Verify User",
      });
    }
    req.decoded = decoded;
    next();
  });
};

const createToken: RequestHandler = async (req, res) => {
  const user = req.body;
  // console.log(user, "user From fn Create Toekn");
  const token = jwt.sign(user, config.accessTokenSecret, {
    expiresIn: "15s",
  });
  res.json({ token });
};

export const middleware = { verifyToken, createToken };
