import { DiscountCondition } from "./DiscountCondition.js";
import TempOrder from "./TempOrder.js";

export abstract class Coupon {
  private readonly id: string;
  private readonly conditions: DiscountCondition[];

  constructor(conditions: DiscountCondition[]) {
    this.id = crypto.randomUUID();
    this.conditions = conditions;
  }

  public getId() {
    return this.id;
  }

  private isAvailable(tempOrder: TempOrder) {
    return this.conditions.every((policy) => policy.isAvailable(tempOrder));
  }

  protected calculateDiscountPrice(tempOrder: TempOrder): number {
    if (this.isAvailable(tempOrder)) {
      return this.getDiscountPrice(tempOrder);
    }
    return 0;
  }

  public abstract getDiscountPrice(tempOrder?: TempOrder | undefined): number;
}

export class AmountDiscountCoupon extends Coupon {
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
  private readonly bonusCount: number;

  constructor({
    conditions,
    bonusCount,
  }: {
    conditions: DiscountCondition[];
    bonusCount: number;
  }) {
    super(conditions);
    this.bonusCount = bonusCount;
  }

  public getDiscountPrice(tempOrder: TempOrder): number {
    // TODO: 가장 비싼 금액 + 2개 이상인 상품을 대상으로
    return 10000 * this.bonusCount;
  }
}

export class FreeShippingCoupon extends Coupon {
  constructor({ conditions }: { conditions: DiscountCondition[] }) {
    super(conditions);
  }

  public getDiscountPrice(tempOrder: TempOrder) {
    // TODO: 주문서에 존재하는 배송비 기준
    return 10000;
  }
}

export class RateDiscountCoupon extends Coupon {
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

  public getDiscountPrice(tempOrder: TempOrder) {
    return tempOrder.calculateOrderPrice() * (this.discountRate / 100);
  }
}
