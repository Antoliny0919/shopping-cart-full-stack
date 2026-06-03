import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../../constants";

export const handlers = [
  http.get(`${BASE_URL}/api/car/`, () => {
    return HttpResponse.json([
      {
        product_id: 1,
        quantity: 2,
        product: {
          name: "치킨",
          thumbnail: "/chicken.jpg",
          price: 25000,
        },
      },
      {
        product_id: 22,
        quantity: 5,
        product: {
          name: "피자",
          thumbnail: "/pizza.jpg",
          price: 30000,
        },
      },
      {
        product_id: 38,
        quantity: 1,
        product: {
          name: "꿔바로우",
          thumbnail: "/guobaorou.jpg",
          price: 45000,
        },
      },
      {
        product_id: 92,
        quantity: 99,
        product: {
          name: "홈런볼",
          thumbnail: "homerun-ball.jpg",
          price: 1500,
        },
      },
    ]);
  }),
];
