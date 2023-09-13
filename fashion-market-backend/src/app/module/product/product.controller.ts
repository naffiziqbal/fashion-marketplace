import { Request, Response } from "express";
import {
  createProductToDb,
  getAllProductsFromDb,
  getAllProductsFromDbByName,
} from "./product.services";

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
    console.log(data);
    console.log(data);
    const decoded = req.decoded;
    console.log(decoded, " Decoded", data.author_email);
    if (decoded.email !== data.author_email) {
      res.status(401).json({
        data: [],
        status: 401,
        message: "Unauthorized Access",
      });
    }
    const product = await getAllProductsFromDbByName(data);
    res.status(200).json({
      data: product,
    });
  } catch {}
};
