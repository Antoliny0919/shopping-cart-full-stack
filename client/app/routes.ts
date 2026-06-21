import {
  type RouteConfig,
  route,
  prefix,
  index,
} from "@react-router/dev/routes";

export default [
  ...prefix("cart/", [
    index("./pages/shopping-cart/ShoppingCartPage.tsx"),
    route("check/", "./pages/shopping-cart/OrderCheckPage.tsx"),
  ]),
] satisfies RouteConfig;
