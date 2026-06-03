import { setupWorker } from "msw/browser";
import { handlers as shoppingCartHandlers } from "./pages/shopping-cart/mocks/handlers";

export const worker = setupWorker(...shoppingCartHandlers);
