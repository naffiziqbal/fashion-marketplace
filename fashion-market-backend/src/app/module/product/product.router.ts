import express from "express";
import { createProduct, getAllProducts } from "./product.controller";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/all-products", getAllProducts);

export default router;
