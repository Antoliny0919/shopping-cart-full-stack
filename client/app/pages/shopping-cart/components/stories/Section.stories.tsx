import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { http, HttpResponse, delay } from "msw";
import { worker } from "../../../msw-browser";
import { BASE_URL } from "../../../constants";
import Section from "./Section";

const cartItemsData = [
  {
    product_id: "550e8400-e29b-41d4-a716-446655440000",
    quantity: 2,
    product: { name: "치킨", thumbnail: "/chicken.jpg", price: 25000 },
  },
  {
    product_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    quantity: 5,
    product: { name: "피자", thumbnail: "/pizza.jpg", price: 30000 },
  },
];

const meta = {
  title: "shopping-cart/Section",
  component: Section,
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
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ManyItems: Story = {
  loaders: [
    async () => {
      await worker.start({ onUnhandledRequest: "bypass" });
      worker.use(
        http.get(`${BASE_URL}/api/cart/`, () =>
          HttpResponse.json(cartItemsData),
        ),
      );
      return {};
    },
  ],
};

export const NotExistItems: Story = {
  loaders: [
    async () => {
      await worker.start({ onUnhandledRequest: "bypass" });
      worker.use(
        http.get(`${BASE_URL}/api/cart/`, () => HttpResponse.json([])),
      );
      return {};
    },
  ],
};

export const Loading: Story = {
  loaders: [
    async () => {
      await worker.start({ onUnhandledRequest: "bypass" });
      worker.use(
        http.get(`${BASE_URL}/api/cart/`, async () => {
          await delay("infinite");
        }),
      );
      return {};
    },
  ],
};

export const Error: Story = {
  loaders: [
    async () => {
      await worker.start({ onUnhandledRequest: "bypass" });
      worker.use(
        http.get(`${BASE_URL}/api/cart/`, () => HttpResponse.error()),
      );
      return {};
    },
  ],
};
