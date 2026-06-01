import { ProductFieldValidators, CartFieldValidators } from "../validators.js";
import { createValidateBodyMiddleware } from "../../middlewares.js";

export const productBodyValidateMiddelware = createValidateBodyMiddleware(
  ProductFieldValidators,
);

export const cartBodyValidateMiddelware =
  createValidateBodyMiddleware(CartFieldValidators);
