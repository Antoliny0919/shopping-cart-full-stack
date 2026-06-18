import {
  ExpireDateDiscountCondition,
  HotTimeDiscountCondition,
  MinimumOrderPriceDiscountCondition,
} from "../models/DiscountCondition.js";

describe("DiscountCondition Tests", () => {
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
      const condition1 = new MinimumOrderPriceDiscountCondition(1000);
      expect(condition1.isAvailable(undefined as any)).toBeTruthy();
      const condition2 = new MinimumOrderPriceDiscountCondition(10000);
      expect(condition2.isAvailable(undefined as any)).toBeTruthy();
    });

    test("특정 금액 미만이면 사용 불가능하다.", () => {
      const condition = new MinimumOrderPriceDiscountCondition(10001);
      expect(condition.isAvailable(undefined as any)).toBeFalsy();
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
