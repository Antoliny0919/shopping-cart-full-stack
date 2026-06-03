import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import ShoppingCartPage from "./ShoppingCartPage";

const meta = {
  title: "shopping-cart/ShoppingCartPage",
  component: ShoppingCartPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ShoppingCartPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
