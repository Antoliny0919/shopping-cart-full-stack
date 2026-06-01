import { createApp } from "./route.js";
import {
  createCartController,
  createProductController,
} from "./shop/controllers.js";
import {
  InMemoryCartRepository,
  InMemoryProductRepository,
} from "./shop/repositories/InMemoryRepositories.js";

const PORT = process.env.PORT ?? 3000;

const productRepository = new InMemoryProductRepository();
const cartRepository = new InMemoryCartRepository();
const productController = createProductController({
  productRepository,
  cartRepository,
});
const cartController = createCartController({ cartRepository });
const app = createApp({ productController, cartController });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
