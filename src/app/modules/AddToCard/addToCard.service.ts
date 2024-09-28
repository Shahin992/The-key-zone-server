import { TCard } from "./addToCard.interfase";
import { AddToCard } from "./addToCard.model";

const createAddtoCardIntoDB = async (payload: TCard) => {
  const result = await (await AddToCard.create(payload)).populate("product");
  return result;
};

export const AddoCardService = {
  createAddtoCardIntoDB,
};
