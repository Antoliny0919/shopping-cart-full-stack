import { setupServer } from "msw/node";
import { handlers } from "../mocks/handlers/some";

export const server = setupServer(...handlers);
