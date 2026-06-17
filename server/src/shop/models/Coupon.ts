import { DiscountPolicy } from "./DiscountPolicy.js";

abstract class Coupon {
  private readonly policies: DiscountPolicy[];

  constructor(policies: DiscountPolicy[]) {
    this.policies = policies;
    if (!this.isAvailable()) {
      throw new Error("사용할 수 없는 쿠폰입니다.");
    }
  }

  private isAvailable() {
    return this.policies.every((policy) => policy.isAvailable());
  }

  abstract calculateDiscountPrice(): number;
}

export class AmountDiscountCoupon extends Coupon {
  private readonly discountPrice: number;

  constructor({
    policies,
    discountPrice,
  }: {
    policies: DiscountPolicy[];
    discountPrice: number;
  }) {
    super(policies);
    this.discountPrice = discountPrice;
  }

  public calculateDiscountPrice() {
    return this.discountPrice;
  }
}

export class BonusCoupon extends Coupon {
  private readonly bonusCount: number;

  constructor({
    policies,
    bonusCount,
  }: {
    policies: DiscountPolicy[];
    bonusCount: number;
  }) {
    super(policies);
    this.bonusCount = bonusCount;
  }

  public calculateDiscountPrice(bonusProductPrice: number) {
    return bonusProductPrice * this.bonusCount;
  }
}

export class FreeShippingCoupon extends Coupon {
  constructor({ policies }: { policies: DiscountPolicy[] }) {
    super(policies);
  }

  public calculateDiscountPrice(deliveryFee: number) {
    return deliveryFee;
  }
}

export class RateDiscountCoupon extends Coupon {
  private readonly discountRate: number;

  constructor({
    policies,
    discountRate,
  }: {
    policies: DiscountPolicy[];
    discountRate: number;
  }) {
    super(policies);
    this.discountRate = discountRate;
  }

  public calculateDiscountPrice(price: number) {
    return price * (this.discountRate / 100);
  }
}
