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

  constructor(threshold: number, orderPrice: number) {
    this.threshold = threshold;
  }

  isAvailable(orderPrice: number) {
    return this.threshold <= orderPrice;
  }
}

export class HotTimeDiscountPolicy implements DiscountPolicy {
  private readonly startHour: number;
  private readonly endHour: number;

  constructor(startHour: number, endHour: number) {
    this.startHour = startHour;
    this.endHour = endHour;
  }

  isAvailable() {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= this.startHour && currentHour < this.endHour;
  }
}
