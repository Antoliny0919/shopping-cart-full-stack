import type { Meta, StoryObj } from "@storybook/react-vite";
import ShoppingCartSectionSkeleton from "./ShoppingCartSectionSkeleton";

const meta = {
  title: "shopping-cart/ShoppingCartSectionSkeleton",
  component: ShoppingCartSectionSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingCartSectionSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
