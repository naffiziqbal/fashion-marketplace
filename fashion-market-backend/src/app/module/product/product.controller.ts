import { Request, Response } from "express";
import {
  createProductToDb,
  getAllProductsFromDb,
  getAllProductsFromDbByName,
} from "./user.services";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await createProductToDb(product);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: true,
      data: "Failed",
    });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductsFromDb();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: true,
      data: "Failed",
    });
  }
};

export const getAllProductsByName = async (req: any, res: any) => {
  try {
    const data = req?.query;
    const decoded = req?.decoded;
    console.log(data, " email");
    console.log(decoded.user.email);
    console.log("\n sssssss");

    if (decoded?.user?.email !== data.author_email) {
      res.status(403).json({
        data: [],
        message: "Unauthorized Access",
      });
      console.log("Data Not Matched");
    }
    const product = await getAllProductsFromDbByName(data);
    res.status(200).json({
      data: product,
    });
  } catch {}
};
