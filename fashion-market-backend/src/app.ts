import express, { Request, Response } from "express";
import cors from "cors";
import productRouter from "./app/module/product/product.router";
import userRouter from "./app/module/user/user.routers";
import config from "./config/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/api/v1/product/", productRouter);
app.use("/api/v1/user/", userRouter);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    data: "API Is Online",
  });
});
// console.log(config.accessTokenSecret);

export default app;
