import mongoose, { Model, Schema, model } from "mongoose";
import { IProduct } from "./porduct.interface";

type ProductModel = Model<IProduct, {}>;

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  creator_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isVerified: {
    type: Boolean,
    required: false,
  },
});

export const Product = model<IProduct, ProductModel>("products", productSchema);
