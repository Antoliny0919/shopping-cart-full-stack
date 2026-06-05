import type { Meta, StoryObj } from "@storybook/react-vite";
import Loading from "../Loading";

const meta = {
  title: "shopping-cart/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
