import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../../constants";
import db from "./db";

export const handlers = [
  http.get(`${BASE_URL}/api/cart/`, () => {
    const data = db.cartItem.getAll();
    return HttpResponse.json(data);
  }),
];
