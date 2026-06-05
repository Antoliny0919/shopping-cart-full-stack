import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { ShoppingCartSectionContent } from "./ShoppingCartSection";

const meta = {
  title: "shopping-cart/ShoppingCartSectionContent",
  component: ShoppingCartSectionContent,
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
} satisfies Meta<typeof ShoppingCartSectionContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cartItems: [],
  goToOrderCheck: () => {},
  removeItem: () => {},
  updateItem: () => {},
  onChangeSelected: () => {},
  onChangeAllSelected: () => {},
  selectedItemId: [],
};

export const ManyItems: Story = {
  args: {
    ...defaultArgs,
    cartItems: [
      {
        product_id: "550e8400-e29b-41d4-a716-446655440000",
        quantity: 2,
        product: {
          name: "치킨",
          thumbnail: "/chicken.jpg",
          price: 25000,
        },
      },
      {
        product_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        quantity: 5,
        product: {
          name: "피자",
          thumbnail: "/pizza.jpg",
          price: 30000,
        },
      },
    ],
  },
};

export const NotExistItems: Story = {
  args: { ...defaultArgs },
};
