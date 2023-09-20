import { IProduct } from "./porduct.interface";
import { Product } from "./product.model";

export const createProductToDb = async (
  product: IProduct
): Promise<IProduct | null> => {
  const createdProduct = await Product.create(product);
  if (!createdProduct) {
    throw new Error("Failed To Create Product");
  }
  return createdProduct;
};

export const getAllProductsFromDb = async () => {
  const products = await Product.find({});
  if (!products) {
    throw new Error("Failed To Get Products");
  }
  return products;
};

export const getAllProductsFromDbByName = async (query: any) => {
  console.log(query);
  const data = await Product.find(query);
  return data;
};
