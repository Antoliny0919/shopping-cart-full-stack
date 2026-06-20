import TempOrder from "./TempOrder.js";

export interface DiscountCondition {
  isAvailable: (tempOrder: TempOrder) => boolean;
  description: () => string | null;
}

export class ExpireDateDiscountCondition implements DiscountCondition {
  constructor(private readonly expirationDate: Date) {}

  isAvailable() {
    return this.expirationDate >= new Date();
  }

  description() {
    return null;
  }
}

export class MinimumOrderPriceDiscountCondition implements DiscountCondition {
  constructor(private readonly threshold: number) {}

  isAvailable(tempOrder: TempOrder) {
    return this.threshold <= tempOrder.calculateOrderPrice();
  }

  description() {
    return `최소 주문 금액: ${this.threshold}`;
  }
}

export class HotTimeDiscountCondition implements DiscountCondition {
  constructor(
    private readonly startHour: number,
    private readonly endHour: number,
  ) {}

  isAvailable() {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= this.startHour && currentHour < this.endHour;
  }

  description() {
    const formatHour = (hour: number) => {
      const period = hour < 12 ? "오전" : "오후";
      const h = hour % 12 === 0 ? 12 : hour % 12;
      return `${period} ${h}시`;
    };
    return `사용 가능 시간: ${formatHour(this.startHour)}부터 ${formatHour(this.endHour)}까지`;
  }
}
