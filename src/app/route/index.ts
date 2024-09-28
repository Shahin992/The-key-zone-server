import { Router } from "express";
import { ProductRouter } from "../modules/products/product.route";
import { AddToCartRoute } from "../modules/AddToCard/addToCard.route";
const router = Router();

const modulsRoute = [
  {
    path: "/products",
    route: ProductRouter,
  },
  {
    path: "/addtocard",
    route: AddToCartRoute,
  },
];
modulsRoute.forEach((route) => router.use(route.path, route.route));
export default router;
