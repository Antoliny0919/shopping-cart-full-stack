import { Router } from "express";
import {
  productBodyValidateMiddelware,
  cartBodyValidateMiddelware,
} from "./middlewares/BodyValiadateMiddleware.js";
import {
  ProductController,
  CartController,
  tempOrderController,
  CouponController,
} from "./controllers.js";

export function createShopRouter({
  productController,
  cartController,
  tempOrderController,
  couponController,
}: {
  productController: ProductController;
  cartController: CartController;
  tempOrderController: tempOrderController;
  couponController: CouponController;
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

  router.route("/api/orders/").post(tempOrderController.post);
  router
    .route("/api/orders/:id/")
    .get(tempOrderController.get)
    .patch(tempOrderController.patch);

  router.route("/api/coupons/").get(couponController.get);

  return router;
}
