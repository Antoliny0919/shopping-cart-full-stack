import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import OrderCheckPage from "../pages/shopping-cart/OrderCheckPage";

describe("App", () => {
  test("renders headline", () => {
    render(<OrderCheckPage />);

    screen.debug();
  });
});
