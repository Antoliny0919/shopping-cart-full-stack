export interface DeliveryFeePolicy {
  calculate: (fee: number, orderPrice: number) => number;
}

export class DeliveryFee {
  private readonly baseFee: number;
  private readonly policies: DeliveryFeePolicy[];
  private readonly hardPlace: boolean;

  constructor(baseFee: number, policies: DeliveryFeePolicy[], hardPlace: boolean = false) {
    this.baseFee = baseFee;
    this.policies = policies;
    this.hardPlace = hardPlace;
  }

  getDeliveryFee(orderPrice: number) {
    return this.policies.reduce(
      (fee, p) => (fee += p.calculate(fee, orderPrice)),
      this.baseFee,
    );
  }

  isHardPlace() {
    return this.hardPlace;
  }
}

export class HardPlacePolicy implements DeliveryFeePolicy {
  private readonly hardPlaceExtraFee: number;

  constructor(hardPlaceExtraFee: number) {
    this.hardPlaceExtraFee = hardPlaceExtraFee;
  }

  calculate() {
    return this.hardPlaceExtraFee;
  }
}

export class FreeDeliveryPolicy implements DeliveryFeePolicy {
  private readonly threshold: number;

  constructor(threshold: number) {
    this.threshold = threshold;
  }

  calculate(fee: number, orderPrice: number) {
    if (orderPrice >= this.threshold) {
      return -fee;
    }
    return 0;
  }
}
