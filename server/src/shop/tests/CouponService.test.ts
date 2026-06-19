import TempOrder from "../models/TempOrder.js";
import { DeliveryFee } from "../models/DeliveryFee.js";
import {
  AmountDiscountCoupon,
  BonusCoupon,
  FreeShippingCoupon,
  RateDiscountCoupon,
} from "../models/Coupon.js";
import CouponService from "../services/CouponService.js";

describe("CouponService Tests", () => {
  const tempOrder = new TempOrder(
    [
      {
        product_id: "123",
        quantity: 10,
        product: {
          name: "민트초코",
          price: 3000,
          thumbnail: "mint-choco.png",
        },
      },
      {
        product_id: "456",
        quantity: 5,
        product: {
          name: "뉴욕치즈 케이크",
          price: 4000,
          thumbnail: "newyork-cheeze.png",
        },
      },
    ],
    new DeliveryFee(3000),
  );
  const amountDiscountCoupon = new AmountDiscountCoupon({
    conditions: [],
    discountPrice: 5000,
  });

  const bonusCoupon = new BonusCoupon({
    conditions: [],
    minQuantity: 2,
    bonusCount: 1,
  });

  const rateDiscountCoupon = new RateDiscountCoupon({
    conditions: [],
    discountRate: 20,
  });

  const deliveryFeeDiscountCoupon = new FreeShippingCoupon({
    conditions: [],
  });

  test("단일 쿠폰 할인금액을 계산하여 반환한다.", () => {
    expect(
      CouponService.calculateDiscount(tempOrder, [amountDiscountCoupon]),
    ).toBe(5000);

    expect(
      CouponService.calculateDiscount(tempOrder, [rateDiscountCoupon]),
    ).toBe(10000);
  });
  test("쿠폰 할인금액을 계산하여 반환한다.", () => {
    expect(
      CouponService.calculateDiscount(tempOrder, [
        amountDiscountCoupon,
        bonusCoupon,
      ]),
    ).toBe(9000);

    expect(
      CouponService.calculateDiscount(tempOrder, [
        amountDiscountCoupon,
        deliveryFeeDiscountCoupon,
      ]),
    ).toBe(8000);
  });

  test("정률, 정액 쿠폰 조합일때 정률쿠폰은 정액쿠폰에서 할인된 금액을 기준으로 계산하여 반환된다.", () => {
    expect(
      CouponService.calculateDiscount(tempOrder, [
        amountDiscountCoupon,
        rateDiscountCoupon,
      ]),
    ).toBe(14000);
  });

  test("최고 효율 쿠폰 조합을 반환한다.", () => {
    let result = CouponService.calculateBestCouponCombination(tempOrder, [
      amountDiscountCoupon,
      bonusCoupon,
      rateDiscountCoupon,
      deliveryFeeDiscountCoupon,
    ]);
    expect(result).toEqual({
      combinations: [amountDiscountCoupon, rateDiscountCoupon],
      discountPrice: 14000,
    });
    result = CouponService.calculateBestCouponCombination(tempOrder, [
      bonusCoupon,
      rateDiscountCoupon,
      deliveryFeeDiscountCoupon,
    ]);
    expect(result).toEqual({
      combinations: [bonusCoupon, rateDiscountCoupon],
      discountPrice: 13200,
    });
  });
});
