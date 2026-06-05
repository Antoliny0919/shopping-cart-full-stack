import type { Meta, StoryObj } from "@storybook/react-vite";
import CartLoading from "./CartLoading";

const meta = {
  title: "shopping-cart/CartLoading",
  component: CartLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CartLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
