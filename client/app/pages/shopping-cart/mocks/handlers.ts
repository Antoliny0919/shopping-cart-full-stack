import { http, HttpResponse } from "msw";
import { BASE_URL } from "../../../constants";
import db from "./db";

export const handlers = [
  http.get(`${BASE_URL}/api/cart/`, () => {
    const data = db.cartItem.getAll();
    return HttpResponse.json(data);
  }),

  http.delete(`${BASE_URL}/api/cart/items/:id/`, ({ params }) => {
    const { id } = params;
    const item = db.cartItem.findFirst({
      where: { product_id: { equals: id as string } },
    });
    if (!item) {
      return HttpResponse.json(
        {
          code: "RESOURCE_NOT_FOUND",
          message: "요청한 리소스를 찾을 수 없습니다.",
        },
        { status: 404 },
      );
    }
    db.cartItem.delete({ where: { product_id: { equals: id as string } } });
    return new HttpResponse(null, { status: 204 });
  }),
];
