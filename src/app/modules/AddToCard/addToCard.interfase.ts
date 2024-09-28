import { Types } from "mongoose";

export type TCard = {
  product: Types.ObjectId;
  quantity: number;
};
