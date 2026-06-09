import { setupWorker } from "msw/browser";
import { handlers as shoppingCartHandlers } from "./pages/shopping-cart/mocks/handlers";
import { seedDb } from "./pages/shopping-cart/mocks/db";

seedDb();

export const worker = setupWorker(...shoppingCartHandlers);
