import { Request, Response } from "express";
import { AddoCardService } from "./addToCard.service";

const createAddtoCard = async (req: Request, res: Response) => {
  const newCard = req.body;
  const result = await AddoCardService.createAddtoCardIntoDB(newCard);
  console.log(result);
  res.status(200).json({
    success: true,
    message: "Add to card successfully",
    data: result,
  });
};
export const AddoCardController = {
  createAddtoCard,
};
