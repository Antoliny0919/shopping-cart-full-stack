import { describe, test, expect } from "vitest";
import { CartPricing } from "../CartPricing";

describe("CartPricing Tests", () => {
  const bigCartItems = [
    {
      product_id: "123",
      quantity: 10,
      product: {
        price: 20000,
        thumbnail: "love-papajons.png",
        name: "파파존스 피자",
      },
    },
    {
      product_id: "456",
      quantity: 5,
      product: {
        price: 5000,
        thumbnail: "pc-lamen.png",
        name: "피시방 계란 들어간 신라면",
      },
    },
  ];
  const smallCartItems = [
    {
      product_id: "999",
      quantity: 1,
      product: {
        price: 500,
        thumbnail: "eraser.png",
        name: "지우개",
      },
    },
  ];
  const bigCart = new CartPricing(bigCartItems);
  const smallCart = new CartPricing(smallCartItems);
  test("카트에 존재하는 아이템들의 가격과 수량을 곱한 총 금액을 반환한다.", () => {
    expect(bigCart.total).toBe(225000);
    expect(smallCart.total).toBe(500);
  });

  test("총금액을 기반으로 배달비를 계산하여 반환한다.", () => {
    expect(bigCart.delivery).toBe(0);
    expect(smallCart.delivery).toBe(3000);
  });

  test("총금액과 배달비를 차감한 금액을 반환한다.", () => {
    expect(bigCart.grandTotal).toBe(225000);
    expect(smallCart.grandTotal).toBe(3500);
  });
});
