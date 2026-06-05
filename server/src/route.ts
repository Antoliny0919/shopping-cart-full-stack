import express from "express";
import cors from "cors";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
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

  const __dirname = dirname(fileURLToPath(import.meta.url));
  router.use(express.json());
  router.use(cors());
  router.use(express.static(join(__dirname, "../public/images")));
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
