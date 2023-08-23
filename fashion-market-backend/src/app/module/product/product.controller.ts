import { Request, Response } from "express";
import { createProductToDb, getAllProductsFromDb } from "./user.services";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await createProductToDb(data);
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
