import { DiscountCondition } from "./DiscountCondition.js";
import TempOrder from "./TempOrder.js";

export enum CouponPhase {
  FIXED = 1,
  RATE = 2,
}

export abstract class Coupon {
  private readonly id: string;
  private readonly conditions: DiscountCondition[];
  abstract readonly phase: CouponPhase;

  constructor(conditions: DiscountCondition[]) {
    this.id = crypto.randomUUID();
    this.conditions = conditions;
  }

  public getId() {
    return this.id;
  }

  public isAvailable(tempOrder: TempOrder) {
    return this.conditions.every((policy) => policy.isAvailable(tempOrder));
  }

  public abstract getDiscountPrice(tempOrder: TempOrder, basePrice?: number): number;
}

export class AmountDiscountCoupon extends Coupon {
  public readonly phase = CouponPhase.FIXED;
  private readonly discountPrice: number;

  constructor({
    conditions,
    discountPrice,
  }: {
    conditions: DiscountCondition[];
    discountPrice: number;
  }) {
    super(conditions);
    this.discountPrice = discountPrice;
  }

  public getDiscountPrice() {
    return this.discountPrice;
  }
}

export class BonusCoupon extends Coupon {
  public readonly phase = CouponPhase.FIXED;
  private readonly bonusCount: number;
  private readonly minQuantity: number;

  constructor({
    conditions,
    minQuantity,
    bonusCount,
  }: {
    conditions: DiscountCondition[];
    minQuantity: number;
    bonusCount: number;
  }) {
    super(conditions);
    this.minQuantity = minQuantity;
    this.bonusCount = bonusCount;
  }

  public getDiscountPrice(tempOrder: TempOrder): number {
    const price = tempOrder.findMostExpensiveItemPrice(this.minQuantity);
    if (!price) return 0;
    return price * this.bonusCount;
  }
}

export class FreeShippingCoupon extends Coupon {
  public readonly phase = CouponPhase.FIXED;

  constructor({ conditions }: { conditions: DiscountCondition[] }) {
    super(conditions);
  }

  public getDiscountPrice(tempOrder: TempOrder) {
    return tempOrder.calculateDeliveryFee();
  }
}

export class RateDiscountCoupon extends Coupon {
  public readonly phase = CouponPhase.RATE;
  private readonly discountRate: number;

  constructor({
    conditions,
    discountRate,
  }: {
    conditions: DiscountCondition[];
    discountRate: number;
  }) {
    super(conditions);
    this.discountRate = discountRate;
  }

  public getDiscountPrice(tempOrder: TempOrder, basePrice?: number) {
    const price = basePrice ?? tempOrder.calculateOrderPrice();
    return price * (this.discountRate / 100);
  }
}
