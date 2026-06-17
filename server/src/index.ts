import { createApp } from "./route.js";
import {
  createCartController,
  createProductController,
  createTempOrderController,
} from "./shop/controllers.js";
import {
  InMemoryCartRepository,
  InMemoryProductRepository,
  InMemoryTempOrderRepository,
} from "./shop/repositories/InMemoryRepositories.js";
import Product from "./shop/models/Product.js";
import {
  AmountDiscountCoupon,
  BonusCoupon,
  FreeShippingCoupon,
  RateDiscountCoupon,
} from "./shop/models/Coupon.js";

const PORT = process.env.PORT ?? 3000;

const productRepository = new InMemoryProductRepository();
const cartRepository = new InMemoryCartRepository();
const tempOrderRepository = new InMemoryTempOrderRepository();

const seedData = {
  products: [
    { name: "치킨", thumbnail: "/chicken.png", price: 25000, quantity: 2 },
    { name: "피자", thumbnail: "/pizza.jpg", price: 30000, quantity: 5 },
    {
      name: "꿔바로우",
      thumbnail: "/guobaorou.jpg",
      price: 45000,
      quantity: 1,
    },
    {
      name: "홈런볼",
      thumbnail: "/home-run-ball.jpg",
      price: 1500,
      quantity: 99,
    },
  ],
  coupons: [
    new AmountDiscountCoupon({ policies: [], discountPrice: 5000 }),
    new BonusCoupon({ policies: [], bonusCount: 1 }),
    new FreeShippingCoupon({ policies: [] }),
    new RateDiscountCoupon({ policies: [], discountRate: 30 }),
  ],
};

const cart = cartRepository.get();
for (const { quantity, ...productData } of seedData["products"]) {
  const product = new Product(productData);
  productRepository.save(product.getId(), product);
  cart.updateItemByProductId(product.getId(), quantity);
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
});
const app = createApp({
  productController,
  cartController,
  tempOrderController,
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
