import { TProduct } from "./products.interfase";
import { Products } from "./products.model";

const createProductsIntoDB = async (payload: TProduct) => {
  const result = await Products.create(payload);
  return result;
};
const getProductsFromDB = async () => {
  const result = await Products.find();
  return result;
};
const getSingleProductsFromDB = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};
const updateProductsFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Products.findByIdAndUpdate(id, payload, { new: true });
  console.log(result);
  return result;
};

export const ProductsService = {
  createProductsIntoDB,
  getProductsFromDB,
  getSingleProductsFromDB,
  updateProductsFromDB,
};
