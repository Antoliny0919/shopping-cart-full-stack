import Product from "./shop/models/Product.js";
import Cart from "./shop/models/Cart.js";
import { MY_CART_ID } from "./shop/constanst.js";

export const createInitialData = () => ({
  products: new Map<string, Product>(),
  cart: new Map<string, Cart>([[MY_CART_ID, new Cart()]]),
});
