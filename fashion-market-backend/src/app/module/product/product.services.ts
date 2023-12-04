import { IProduct } from "./porduct.interface";
import { Product } from "./product.model";

export const createProductToDb = async (
  product: IProduct
): Promise<IProduct> => {
  try {
    const createdProduct = await Product.create(product);
    if (!createdProduct) {
      throw new Error("Failed To Create Product");
    }
    return createdProduct;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsFromDb = async () => {
  try {
    const products = await Product.find({});
    if (!products) {
      throw new Error("Failed To Get Products");
    }
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsFromDbByName = async (query: any) => {
  try {
    const data = await Product.find(query);
  return data;
  } catch (error) {
    console.log(error);
  }
};
