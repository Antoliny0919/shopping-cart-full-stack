import { createApp } from "./route.js";
import {
  createCartController,
  createProductController,
} from "./shop/controllers.js";
import {
  InMemoryCartRepository,
  InMemoryProductRepository,
} from "./shop/repositories/InMemoryRepositories.js";
import Product from "./shop/models/Product.js";

const PORT = process.env.PORT ?? 3000;

const productRepository = new InMemoryProductRepository();
const cartRepository = new InMemoryCartRepository();

const seedData = [
  { name: "치킨", thumbnail: "/chicken.png", price: 25000, quantity: 2 },
  { name: "피자", thumbnail: "/pizza.jpg", price: 30000, quantity: 5 },
  { name: "꿔바로우", thumbnail: "/guobaorou.jpg", price: 45000, quantity: 1 },
  { name: "홈런볼", thumbnail: "/home-run-ball.jpg", price: 1500, quantity: 99 },
];

const cart = cartRepository.get();
for (const { quantity, ...productData } of seedData) {
  const product = new Product(productData);
  productRepository.save(product.getId(), product);
  cart.updateItemByProductId(product.getId(), quantity);
}
const productController = createProductController({
  productRepository,
  cartRepository,
});
const cartController = createCartController({ cartRepository, productRepository });
const app = createApp({ productController, cartController });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
