import { model, Schema } from "mongoose";
import { TProduct } from "./products.interfase";

const productSchema = new Schema<TProduct>(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
export const Products = model<TProduct>("products", productSchema);
