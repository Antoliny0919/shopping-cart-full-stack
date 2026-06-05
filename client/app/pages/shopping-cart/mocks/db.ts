import { factory, primaryKey } from "@mswjs/data";

const db = factory({
  cartItem: {
    product_id: primaryKey(String),
    quantity: Number,
    product: {
      name: String,
      price: Number,
      thumbnail: String,
    },
  },
});

const productItemData = [
  {
    product_id: "550e8400-e29b-41d4-a716-446655440000",
    quantity: 2,
    product: {
      name: "치킨",
      thumbnail: "/chicken.png",
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
  {
    product_id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    quantity: 1,
    product: {
      name: "꿔바로우",
      thumbnail: "/guobaorou.jpg",
      price: 45000,
    },
  },
  {
    product_id: "1f0e3dad-99fb-40a2-9d57-8f3b7e6a2d1c",
    quantity: 99,
    product: {
      name: "홈런볼",
      thumbnail: "/home-run-ball.jpg",
      price: 1500,
    },
  },
];

for (const item of productItemData) {
  db.cartItem.create(item);
}

export default db;
