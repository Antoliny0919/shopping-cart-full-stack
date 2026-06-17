import {
  ExpireDateDiscountPolicy,
  HotTimeDiscountPolicy,
  MinimumOrderPriceDiscountPolicy,
} from "../models/DiscountPolicy.js";

describe("DiscountPolicy Tests", () => {
  describe("ExpireDateDiscountPolicy Tests", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date("2026-06-17T14:30:00"));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test("만료일 보다 이전날이면 사용할 수 있다.", () => {
      const policy = new ExpireDateDiscountPolicy(new Date("2026-06-20"));
      expect(policy.isAvailable()).toBeTruthy();
    });
  });
  describe("MinimumOrderPriceDiscountPolicy Tests", () => {
    test("특정 금액 이상이면 사용 가능하다.", () => {
      const policy1 = new MinimumOrderPriceDiscountPolicy(1000, 1001);
      expect(policy1.isAvailable()).toBeTruthy();
      const policy2 = new MinimumOrderPriceDiscountPolicy(1000, 1000);
      expect(policy2.isAvailable()).toBeTruthy();
    });

    test("특정 금액 미만이면 사용 불가능하다.", () => {
      const policy = new MinimumOrderPriceDiscountPolicy(1000, 999);
      expect(policy.isAvailable()).toBeFalsy();
    });
  });

  describe("HotTimeDiscountPolicy Tests", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    const policy = new HotTimeDiscountPolicy(
      new Date("2026-03-10T15:00:00"),
      new Date("2026-03-10T18:00:00"),
    );

    test("시작 시각보다 이전이면 사용할 수 없다.", () => {
      jest.setSystemTime(new Date("2026-03-10T14:30:00"));
      expect(policy.isAvailable()).toBeFalsy();
    });
    test("시작 시각과 종료 시각 사이면 사용할 수 있다.", () => {
      jest.setSystemTime(new Date("2026-03-10T15:30:00"));
      expect(policy.isAvailable()).toBeTruthy();
    });
    test("종료 시각보다 이후면 사용할 수 없다.", () => {
      jest.setSystemTime(new Date("2026-03-10T18:00:01"));
      expect(policy.isAvailable()).toBeFalsy();
    });
  });
});
