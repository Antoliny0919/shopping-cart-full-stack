import { Router } from "express";
import {
  productBodyValidateMiddelware,
  cartBodyValidateMiddelware,
} from "./middlewares/BodyValiadateMiddleware.js";
import { ProductController, CartController } from "./controllers.js";

export function createShopRouter({
  productController,
  cartController,
}: {
  productController: ProductController;
  cartController: CartController;
}) {
  const router = Router();

  router
    .route("/api/products/")
    .get(productController.get)
    .post(productBodyValidateMiddelware, productController.add);

  router.route("/api/products/:id/").delete(productController.delete);

  router.route("/api/cart/").get(cartController.get);

  router
    .route("/api/cart/items/:id/")
    .patch(cartBodyValidateMiddelware, cartController.update)
    .delete(cartController.delete);

  return router;
}
