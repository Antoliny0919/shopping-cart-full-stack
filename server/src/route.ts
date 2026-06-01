import express from "express";
import cors from "cors";
import { ProductController, CartController } from "./shop/controllers.js";
import { createShopRouter } from "./shop/route.js";
import { handleErrors } from "./errors.js";

export function createApp({
  productController,
  cartController,
}: {
  productController: ProductController;
  cartController: CartController;
}) {
  const app = express();
  const router = app.router;

  router.use(express.json());
  router.use(cors());
  router.use(createShopRouter({ productController, cartController }));

  router.use(
    (
      err: Error,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      handleErrors(res, err);
    },
  );

  return app;
}
