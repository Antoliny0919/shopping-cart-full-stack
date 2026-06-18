import {
  AmountDiscountCoupon,
  BonusCoupon,
  FreeShippingCoupon,
  RateDiscountCoupon,
} from "../models/Coupon.js";
import TempOrder from "../models/TempOrder.js";
import { DeliveryFee } from "../models/DeliveryFee.js";

describe("Coupon Test", () => {
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
    new DeliveryFee(10000),
  );
  describe("AmountDiscountCoupon Tests", () => {
    test("금액할인 쿠폰은 정해진 금액을 할인금액으로 반환한다.", () => {
      const coupon = new AmountDiscountCoupon({
        conditions: [],
        discountPrice: 10000,
      });
      expect(coupon.getDiscountPrice()).toBe(10000);
    });
  });

  describe("BonusCoupon Tests", () => {
    test("보너스 쿠폰은 보너스로 제공되는 상품의 금액만큼 할인금액으로 반환한다.", () => {
      const coupon = new BonusCoupon({
        conditions: [],
        minQuantity: 2,
        bonusCount: 2,
      });
      expect(coupon.getDiscountPrice(tempOrder)).toBe(10000);
    });
  });

  describe("FreeShippingCoupon Tests", () => {
    test("배송비 무료 쿠폰은 적용되는 배송비만큼 할인금액으로 반환한다.", () => {
      const coupon = new FreeShippingCoupon({
        conditions: [],
      });
      expect(coupon.getDiscountPrice(tempOrder)).toBe(10000);
    });
  });

  describe("RateDiscountCoupon Tests", () => {
    test("비율할인 쿠폰은 정해진 비율만큼 할인금액으로 반환한다.", () => {
      const coupon = new RateDiscountCoupon({
        conditions: [],
        discountRate: 30,
      });
      expect(coupon.getDiscountPrice(tempOrder)).toBe(9000);
    });
  });
});
