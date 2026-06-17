export interface DiscountPolicy {
  isAvailable: () => boolean;
}

export class ExpireDateDiscountPolicy implements DiscountPolicy {
  private readonly expirationDate: Date;

  constructor(expirationDate: Date) {
    this.expirationDate = expirationDate;
  }

  isAvailable() {
    return this.expirationDate >= new Date();
  }
}

export class MinimumOrderPriceDiscountPolicy implements DiscountPolicy {
  private readonly threshold: number;
  private readonly orderPrice: number;

  constructor(threshold: number, orderPrice: number) {
    this.threshold = threshold;
    this.orderPrice = orderPrice;
  }

  isAvailable() {
    return this.threshold <= this.orderPrice;
  }
}

export class HotTimeDiscountPolicy implements DiscountPolicy {
  private readonly startTime: Date;
  private readonly endTime: Date;

  constructor(startTime: Date, endTime: Date) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isAvailable() {
    const now = new Date();
    return this.startTime <= now && this.endTime >= now;
  }
}
