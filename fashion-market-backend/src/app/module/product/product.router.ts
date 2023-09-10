import express from "express";
import {
  createProduct,
  getAllProducts,
  getAllProductsByName,
} from "./product.controller";
import { getAllProductsFromDb } from "./user.services";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/all-products", getAllProducts);
router.get("/filter-products", getAllProductsByName);

export default router;
