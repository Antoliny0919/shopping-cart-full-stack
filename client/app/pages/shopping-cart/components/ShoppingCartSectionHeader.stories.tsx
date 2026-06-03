import type { Meta, StoryObj } from "@storybook/react-vite";

import { ShoppingCartSectionHeader } from "./ShoppingCartSection";

const meta = {
  title: "shopping-cart/ShoppingCartSectionHeader",
  component: ShoppingCartSectionHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingCartSectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithItems: Story = {
  args: { itemCount: 3 },
};

export const NoItems: Story = {
  args: { itemCount: 0 },
};
