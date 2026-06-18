import { jest } from "@jest/globals";
import {
  ExpireDateDiscountCondition,
  HotTimeDiscountCondition,
  MinimumOrderPriceDiscountCondition,
} from "../models/DiscountCondition.js";
import { DeliveryFee } from "../models/DeliveryFee.js";
import TempOrder from "../models/TempOrder.js";

describe("DiscountCondition Tests", () => {
  const tempOrder = new TempOrder(
    [
      {
        product_id: "123",
        quantity: 5,
        product: {
          name: "말차라떼",
          price: 4000,
          thumbnail: "matcha-latte.png",
        },
      },
      {
        product_id: "456",
        quantity: 2,
        product: {
          name: "블루 레모네이드",
          price: 5000,
          thumbnail: "blue-lemonade.png",
        },
      },
    ],
    new DeliveryFee(3000),
  );
  describe("ExpireDateDiscountCondition Tests", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date("2026-06-17T14:30:00"));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test("만료일 보다 이전날이면 사용할 수 있다.", () => {
      const condition = new ExpireDateDiscountCondition(new Date("2026-06-20"));
      expect(condition.isAvailable()).toBeTruthy();
    });
  });

  describe("MinimumOrderPriceDiscountCondition Tests", () => {
    test("특정 금액 이상이면 사용 가능하다.", () => {
      const condition1 = new MinimumOrderPriceDiscountCondition(20000);
      expect(condition1.isAvailable(tempOrder)).toBeTruthy();
      const condition2 = new MinimumOrderPriceDiscountCondition(30000);
      expect(condition2.isAvailable(tempOrder)).toBeTruthy();
    });

    test("특정 금액 미만이면 사용 불가능하다.", () => {
      const condition = new MinimumOrderPriceDiscountCondition(30001);
      expect(condition.isAvailable(tempOrder)).toBeFalsy();
    });
  });

  describe("HotTimeDiscountCondition Tests", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    const condition = new HotTimeDiscountCondition(15, 18);

    test("시작 시각보다 이전이면 사용할 수 없다.", () => {
      jest.setSystemTime(new Date("2026-03-10T14:30:00"));
      expect(condition.isAvailable()).toBeFalsy();
    });
    test("시작 시각과 종료 시각 사이면 사용할 수 있다.", () => {
      jest.setSystemTime(new Date("2026-03-10T15:30:00"));
      expect(condition.isAvailable()).toBeTruthy();
    });
    test("종료 시각보다 이후면 사용할 수 없다.", () => {
      jest.setSystemTime(new Date("2026-03-10T18:00:01"));
      expect(condition.isAvailable()).toBeFalsy();
    });
  });
});
