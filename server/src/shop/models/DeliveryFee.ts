export interface DeliveryFeePolicy {
  calculate: (fee: number, orderPrice: number) => number;
}

export class DeliveryFee {
  private readonly baseFee: number;
  private readonly policies: DeliveryFeePolicy[];

  constructor(baseFee: number, policies: DeliveryFeePolicy[]) {
    this.baseFee = baseFee;
    this.policies = policies;
  }

  getDeliveryFee(orderPrice: number) {
    return this.policies.reduce(
      (fee, p) => (fee += p.calculate(fee, orderPrice)),
      this.baseFee,
    );
  }

  isHardPlace() {
    return this.policies.some((policy) => policy instanceof HardPlacePolicy);
  }
}

export class HardPlacePolicy implements DeliveryFeePolicy {
  hardPlaceExtraFee: number;

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
