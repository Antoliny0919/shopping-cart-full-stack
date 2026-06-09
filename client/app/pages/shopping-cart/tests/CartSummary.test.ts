import { describe, expect, test } from "vitest";
import CartSummary from "../domain/CartSummary";
import { CartItem } from "../types";

class StubPricing {
  constructor(_: CartItem[]) {}
  get total() {
    return 999;
  }
  get delivery() {
    return 100;
  }
  get grandTotal() {
    return 999;
  }
}

describe("CartSummary Tests", () => {
  const cartItems: CartItem[] = [
    {
      product_id: "99444",
      quantity: 2,
      product: {
        price: 20000,
        thumbnail: "love-pizza-school.png",
        name: "피자스쿨 고구마 피자(치즈크러스트)",
      },
    },
    {
      product_id: "99445",
      quantity: 3,
      product: {
        price: 7000,
        thumbnail: "burger.png",
        name: "롯데리아 불고기버거",
      },
    },
  ];

  const summary = new CartSummary(cartItems, StubPricing);

  test("카트에 담긴 총 아이템 종류 수를 반환한다.", () => {
    expect(summary.totalItems).toBe(2);
  });

  test("카트에 담긴 총 수량을 반환한다.", () => {
    expect(summary.totalQuantity).toBe(5);
  });

  test("상품이 없으면 배달비는 계산되지 않는다", () => {
    expect(summary.delivery).toBe(100);
    const emptyItemAggregate = new CartSummary([], StubPricing);
    expect(emptyItemAggregate.delivery).toBe(0);
  });
});
