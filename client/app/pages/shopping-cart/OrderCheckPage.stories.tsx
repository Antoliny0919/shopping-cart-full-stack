import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import OrderCheckPage from "./OrderCheckPage";

const meta = {
  title: "shopping-cart/OrderCheckPage",
  component: OrderCheckPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/cart/check/",
            state: {
              totalItems: 10,
              totalQuantity: 100,
              totalPrice: 100000000,
            },
          },
        ]}
      >
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof OrderCheckPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
