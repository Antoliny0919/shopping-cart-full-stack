import { describe, expect, test } from "vitest";
import CartManager from "../domain/CartManager";
import { CartItem } from "../types";

const cartItems: CartItem[] = [
  {
    product_id: "1",
    quantity: 2,
    product: { name: "피자", thumbnail: "pizza.png", price: 20000 },
  },
  {
    product_id: "2",
    quantity: 1,
    product: { name: "버거", thumbnail: "burger.png", price: 7000 },
  },
  {
    product_id: "3",
    quantity: 3,
    product: { name: "치킨", thumbnail: "chicken.png", price: 18000 },
  },
];

describe("CartManager Tests", () => {
  describe("selectedCartItems", () => {
    test("selectedItemId가 null이면 빈 배열을 반환한다.", () => {
      const manager = new CartManager(null, cartItems);
      expect(manager.selectedCartItems).toEqual([]);
    });

    test("selectedItemId에 해당하는 CartItem만 반환한다.", () => {
      const manager = new CartManager(["1", "3"], cartItems);
      expect(manager.selectedCartItems).toEqual([cartItems[0], cartItems[2]]);
    });

    test("cartItems에 존재하지 않는 ID는 결과에 포함되지 않는다.", () => {
      const manager = new CartManager(["1", "99"], cartItems);
      expect(manager.selectedCartItems).toEqual([cartItems[0]]);
    });
  });

  describe("allItemsId", () => {
    test("존재하는 모든 아이템의 product_id를 반환한다.", () => {
      const manager = new CartManager(null, cartItems);
      expect(manager.allItemsId).toEqual(["1", "2", "3"]);
    });

    test("아이템이 존재하지 않으면 빈 배열을 반환한다.", () => {
      const manager = new CartManager(null, []);
      expect(manager.allItemsId).toEqual([]);
    });
  });

  describe("allItemsSelected", () => {
    test("모든 아이템이 선택되어 있으면 true를 반환한다.", () => {
      const manager = new CartManager(["1", "2", "3"], cartItems);
      expect(manager.allItemsSelected).toBe(true);
    });

    test("일부 아이템이 선택되어 있으면 false를 반환한다.", () => {
      const manager = new CartManager(["1", "2"], cartItems);
      expect(manager.allItemsSelected).toBe(false);
    });

    test("선택된 아이템이 없으면 false를 반환한다.", () => {
      const manager = new CartManager(null, cartItems);
      expect(manager.allItemsSelected).toBe(false);
    });

    test("아이템이 비어있으면 false를 반환한다.", () => {
      const manager = new CartManager([], []);
      expect(manager.allItemsSelected).toBe(false);
    });
  });
});
