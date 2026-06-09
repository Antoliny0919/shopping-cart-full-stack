import { setupServer } from "msw/node";
import { handlers as shoppingCartHandlers } from "./pages/shopping-cart/mocks/handlers";

export const server = setupServer(...shoppingCartHandlers);
