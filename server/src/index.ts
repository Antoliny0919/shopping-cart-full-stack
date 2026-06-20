import { createApp } from "./route.js";
import {
  createCartController,
  createProductController,
  createTempOrderController,
  createDiscountSummaryController,
  createCouponController,
} from "./shop/controllers.js";
import {
  InMemoryCartRepository,
  InMemoryProductRepository,
  InMemoryTempOrderRepository,
  InMemoryCouponRepository,
} from "./shop/repositories/InMemoryRepositories.js";
import { SEED_DATA } from "./shop/data.js";
import Product from "./shop/models/Product.js";

const PORT = process.env.PORT ?? 3000;

const productRepository = new InMemoryProductRepository();
const cartRepository = new InMemoryCartRepository();
const tempOrderRepository = new InMemoryTempOrderRepository();
const couponRepository = new InMemoryCouponRepository();

const cart = cartRepository.get();
for (const { quantity, ...productData } of SEED_DATA["products"]) {
  const product = new Product(productData);
  productRepository.save(product.getId(), product);
  cart.updateItemByProductId(product.getId(), quantity);
}

for (const coupon of SEED_DATA["coupons"]) {
  couponRepository.save(coupon.getId(), coupon);
}

const productController = createProductController({
  productRepository,
  cartRepository,
});
const cartController = createCartController({
  cartRepository,
  productRepository,
});
const tempOrderController = createTempOrderController({
  productRepository,
  tempOrderRepository,
  couponRepository,
});

const discountSummaryController = createDiscountSummaryController({
  tempOrderRepository,
  couponRepository,
});

const couponController = createCouponController({
  couponRepository,
});

const app = createApp({
  productController,
  cartController,
  tempOrderController,
  discountSummaryController,
  couponController,
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
