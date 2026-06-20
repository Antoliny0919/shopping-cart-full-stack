export interface DeliveryFeePolicy {
  getExtraFee(): number;
  isHardPlace(): boolean;
}

export class DeliveryFee {
  private readonly baseFee: number;
  private readonly policies: DeliveryFeePolicy[];

  constructor(baseFee: number, policies: DeliveryFeePolicy[] = []) {
    this.baseFee = baseFee;
    this.policies = policies;
  }

  getDeliveryFee() {
    return (
      this.baseFee +
      this.policies.reduce((sum, policy) => sum + policy.getExtraFee(), 0)
    );
  }

  isHardPlace() {
    return this.policies.some((policy) => policy.isHardPlace());
  }
}

export class HardPlacePolicy implements DeliveryFeePolicy {
  private readonly extraFee: number;

  constructor(extraFee: number) {
    this.extraFee = extraFee;
  }

  getExtraFee() {
    return this.extraFee;
  }

  isHardPlace() {
    return true;
  }
}
