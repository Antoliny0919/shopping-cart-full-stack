import {
  AmountDiscountCoupon,
  BonusCoupon,
  FreeShippingCoupon,
  RateDiscountCoupon,
} from "../models/Coupon.js";
import { DiscountPolicy } from "../models/DiscountPolicy.js";

describe("Coupon Test", () => {
  test("정책이 하나라도 허용되지 않으면 에러가 반환된다.", () => {
    class SomePolicy implements DiscountPolicy {
      isAvailable() {
        return false;
      }
    }

    expect(
      () =>
        new AmountDiscountCoupon({
          policies: [new SomePolicy()],
          discountPrice: 10000,
        }),
    ).toThrow("사용할 수 없는 쿠폰입니다.");
  });

  describe("AmountDiscountCoupon Tests", () => {
    test("금액할인 쿠폰은 정해진 금액을 할인금액으로 반환한다.", () => {
      const counpon = new AmountDiscountCoupon({
        policies: [],
        discountPrice: 10000,
      });
      expect(counpon.calculateDiscountPrice()).toBe(10000);
    });
  });

  describe("BonusCoupon Tests", () => {
    test("보너스 쿠폰은 보너스로 제공되는 상품의 금액만큼 할인금액으로 반환한다.", () => {
      const coupon = new BonusCoupon({
        policies: [],
        bonusCount: 2,
        targetProductPrice: 15000,
      });
      expect(coupon.calculateDiscountPrice()).toBe(30000);
    });
  });

  describe("FreeShippingCoupon Tests", () => {
    test("배송비 무료 쿠폰은 적용되는 배송비만큼 할인금액으로 반환한다.", () => {
      const coupon = new FreeShippingCoupon({
        policies: [],
        deliveryFee: 3000,
      });
      expect(coupon.calculateDiscountPrice()).toBe(3000);
    });
  });

  describe("RateDiscountCoupon Tests", () => {
    test("비율활인 쿠폰은 정해진 비율만큼 할인금액으로 반환한다.", () => {
      const coupon = new RateDiscountCoupon({
        policies: [],
        targetPrice: 15000,
        discountRate: 30,
      });
      expect(coupon.calculateDiscountPrice()).toBe(4500);
    });
  });
});
