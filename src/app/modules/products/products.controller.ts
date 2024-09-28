import { Request, Response } from "express";
import { ProductsService } from "./products.service";

const createProducts = async (req: Request, res: Response) => {
  const { body } = req.body;
  // console.log("payload, body", body);
  const result = await ProductsService.createProductsIntoDB(body);
  try {
    res.status(200).json({
      success: true,
      message: "products create successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(`${error}`);
  }
};
const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductsService.getProductsFromDB();
  try {
    res.status(200).json({
      success: true,
      message: "products retirved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(`${error}`);
  }
};
const getSingleProducts = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductsService.getSingleProductsFromDB(productId);
  try {
    res.status(200).json({
      success: true,
      message: "product retirved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(`${error}`);
  }
};
const updateProducts = async (req: Request, res: Response) => {
  const { productId } = req.params;
  console.log(productId);
  const result = await ProductsService.updateProductsFromDB(
    productId,
    req.body
  );
  try {
    res.status(200).json({
      success: true,
      message: "product updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(`${error}`);
  }
};
export const ProductsController = {
  createProducts,
  getAllProducts,
  getSingleProducts,
  updateProducts,
};
