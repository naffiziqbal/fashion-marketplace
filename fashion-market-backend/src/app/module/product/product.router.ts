import express from "express";
import {
  createProduct,
  getAllProducts,
  getAllProductsByName,
} from "./product.controller";
import { getAllProductsFromDb } from "./product.services";
import { middleware } from "../../middleware/jwt/jwtToken";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/all-products", getAllProducts);
router.get("/filter-products", middleware.verifyToken, getAllProductsByName);

export default router;
