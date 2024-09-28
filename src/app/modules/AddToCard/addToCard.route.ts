import { Router } from "express";
import { AddoCardController } from "./addToCard.controller";

const router = Router();
router.post("/", AddoCardController.createAddtoCard);
export const AddToCartRoute = router;
