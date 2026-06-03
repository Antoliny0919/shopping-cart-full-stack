import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./app/msw-node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
