export interface DiscountCondition {
  isAvailable: () => boolean;
}

export class ExpireDateDiscountCondition implements DiscountCondition {
  private readonly expirationDate: Date;

  constructor(expirationDate: Date) {
    this.expirationDate = expirationDate;
  }

  isAvailable() {
    return this.expirationDate >= new Date();
  }
}

export class MinimumOrderPriceDiscountCondition implements DiscountCondition {
  private readonly threshold: number;

  constructor(threshold: number) {
    this.threshold = threshold;
  }

  isAvailable(orderPrice: number) {
    return this.threshold <= orderPrice;
  }
}

export class HotTimeDiscountCondition implements DiscountCondition {
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
