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
  private readonly targetProductPrice: number;

  constructor({
    policies,
    bonusCount,
    targetProductPrice,
  }: {
    policies: DiscountPolicy[];
    bonusCount: number;
    targetProductPrice: number;
  }) {
    super(policies);
    this.bonusCount = bonusCount;
    this.targetProductPrice = targetProductPrice;
  }

  public calculateDiscountPrice() {
    return this.targetProductPrice * this.bonusCount;
  }
}

export class FreeShippingCoupon extends Coupon {
  private readonly deliveryFee: number;

  constructor({
    policies,
    deliveryFee,
  }: {
    policies: DiscountPolicy[];
    deliveryFee: number;
  }) {
    super(policies);
    this.deliveryFee = deliveryFee;
  }

  public calculateDiscountPrice() {
    return this.deliveryFee;
  }
}

export class RateDiscountCoupon extends Coupon {
  private readonly discountRate: number;
  private readonly targetPrice: number;

  constructor({
    policies,
    targetPrice,
    discountRate,
  }: {
    policies: DiscountPolicy[];
    targetPrice: number;
    discountRate: number;
  }) {
    super(policies);
    this.targetPrice = targetPrice;
    this.discountRate = discountRate;
  }

  public calculateDiscountPrice() {
    return this.targetPrice * (this.discountRate / 100);
  }
}
