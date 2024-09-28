import { model, Schema } from "mongoose";
import { TCard } from "./addToCard.interfase";

const addToCardSchema = new Schema<TCard>({
  product: { type: Schema.Types.ObjectId, ref: "Products" },
  quantity: { type: Number },
});
export const AddToCard = model<TCard>("AddoCard", addToCardSchema);
